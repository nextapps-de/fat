var child_process = require("child_process");
var fs = require("fs");
var { version } = require("./package.json");

console.log("Start build .....");

fs.existsSync("log") || fs.mkdirSync("log");
fs.existsSync("dist") || fs.mkdirSync("dist");

var flag_str = "";

var options = (function(argv){

    var arr = {};
    var count = 0;

    argv.forEach(function(val, index) {

        if(++count > 2){

            flag_str += " --define='" + val + "'";

            index = val.split('=');
            val = index[1];
            index = index[0];

            arr[index] = val;

            if(count > 3) console.log(index + ': ' + val);
        }
    });

    console.log('RELEASE: ' + (arr['RELEASE'] || 'custom'));

    return arr;

})(process.argv);

var parameter = (function(opt){

    var parameter = '';

    for(var index in opt){

        if(opt.hasOwnProperty(index)){

            parameter += ' --' + index + '=' + opt[index];
        }
    }

    return parameter;
})({

    compilation_level: "ADVANCED_OPTIMIZATIONS", //"WHITESPACE"
    use_types_for_optimization: true,
    new_type_inf: true,
    jscomp_warning: "newCheckTypes",
    //jscomp_error: "strictCheckTypes",
    generate_exports: true,
    export_local_property_definitions: true,
    language_in: "ECMASCRIPT6_STRICT",
    language_out: "ECMASCRIPT5_STRICT",
    process_closure_primitives: true,
    summary_detail_level: 3,
    warning_level: "VERBOSE",
    emit_use_strict: true,
    //ambiguate_properties: true,
    //replace_strings: true,
    output_manifest: "log/manifest.log",
    output_module_dependencies: "log/module_dependencies.log",
    property_renaming_report: "log/renaming_report.log"
    //formatting: "PRETTY_PRINT"
});

exec("java -jar node_modules/google-closure-compiler-java/compiler.jar" + parameter + " --define='DEBUG=" + (options['DEBUG'] || 'false') + "' --define='SUPPORT_EASING=" + (options['SUPPORT_EASING'] || 'false') + "' --define='SUPPORT_COLOR=" + (options['SUPPORT_COLOR'] || 'false') + "'" + flag_str + " --js='fat.js' --js_output_file='fat." + (options['RELEASE'] || 'custom') + ".js' && exit 0", function(){

    var filename = "fat." + (options['RELEASE'] || 'custom') + ".js";

    console.log("Build Complete: " + filename);

    fs.existsSync("dist/" + version) || fs.mkdirSync("dist/" + version);
    fs.copyFileSync(filename, "dist/" + version + "/" + filename)
});

function exec(prompt, callback){

    var child = child_process.exec(prompt, function(err, stdout, stderr){

        if(err){

            console.log(err);
        }
        else{

            if(callback){

                callback();
            }
        }
    });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}
