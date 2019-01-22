/**!
 * @preserve FAT v0.6.7 Compact
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Released under the Apache 2.0 Licence
 * https://github.com/nextapps-de/fat
 */

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(){

    provide("Fat", (function(){

        "use strict";

        const res = Math.max(screen.width, screen.height);
        const prefetch_resolution = res * (window.devicePixelRatio || 1); //10000
        const prefetch = {};
        const easing = {};

        const vendor = (function(){

            const styles = getComputedStyle(document.body);

            if(is_undefined(styles["transform"])){

                const vendors = ["webkit", "moz", "ms", "o"];

                for(let i = 0, tmp; i < vendors.length; i++) {

                    if(!is_undefined(styles[(tmp = vendors[i]) + "Transform"])){

                        return tmp;
                    }
                }
            }
            else{

                return "";
            }

        })();

        const prefix_transform = vendor && (vendor + "Transform");
        const prefix_transform_js = vendor && ("-" + camel_to_snake(prefix_transform));
        const parse_float = parseFloat;

        let id_counter = 0;

        /*
         * Penner equations
         * http://matthewlein.com/ceaser/
         */

        const builtin_easing = {

            "easeIn": [0.55, 0.085, 0.68, 0.53], // quadIn
            "easeOut": [0.25, 0.46, 0.45, 0.94], // quadOut
            "easeInOut": [0.455, 0.03, 0.515, 0.955], // quadInOut
            "cubicIn": [0.55, 0.055, 0.675, 0.19],
            "cubicOut": [0.215, 0.61, 0.355, 1],
            "cubicInOut": [0.645, 0.045, 0.355, 1],
            "quartIn": [0.895, 0.03, 0.685, 0.22],
            "quartOut": [0.165, 0.84, 0.44, 1],
            "quartInOut": [0.77, 0, 0.175, 1],
            "quintIn": [0.755, 0.05, 0.855, 0.06],
            "quintOut": [0.23, 1, 0.32, 1],
            "quintInOut": [0.86, 0, 0.07, 1],
            "expoIn": [0.95, 0.05, 0.795, 0.035],
            "expoOut": [0.19, 1, 0.22, 1],
            "expoInOut": [1, 0, 0, 1],
            "circIn": [0.6, 0.04, 0.98, 0.335],
            "circOut": [0.075, 0.82, 0.165, 1],
            "circInOut": [0.785, 0.135, 0.15, 0.86],
            "sineIn": [0.47, 0, 0.745, 0.715],
            "sineOut": [0.39, 0.575, 0.565, 1],
            "sineInOut": [0.445, 0.05, 0.55, 0.95],
            "backIn": [0.6, -0.28, 0.735, 0.045],
            "backOut": [0.175, 0.885, 0.32, 1.275],
            "backInOut": [0.68, -0.55, 0.265, 1.55],
            "snap": [0.1, 1, 0.1, 1]
        };

        // BezierEasing
        // https://github.com/gre/bezier-easing
        // https://github.com/Pomax/bezierjs

        const easing_bezier = (function(){

            /**
             * @param mX1
             * @param mY1
             * @param mX2
             * @param mY2
             * @constructor
             */

            function BezierClass(mX1, mY1, mX2, mY2){
                /** @private */
                this.mX1 = mX1;
                /** @private */
                this.mY1 = mY1;
                /** @private */
                this.mX2 = mX2;
                /** @private */
                this.mY2 = mY2;
            }

            /**
             * @param aA1
             * @param aA2
             * @private
             * @returns {number}
             */

            BezierClass.prototype.A = function(aA1, aA2){

                return 1.0 - 3.0 * aA2 + 3.0 * aA1;
            };

            /**
             * @param aA1
             * @param aA2
             * @private
             * @returns {number}
             */

            BezierClass.prototype.B = function(aA1, aA2){

                return 3.0 * aA2 - 6.0 * aA1;
            };

            /**
             * @param aA1
             * @private
             * @returns {number}
             */

            BezierClass.prototype.C = function(aA1){

                return 3.0 * aA1;
            };

            /**
             * @param aT
             * @param aA1
             * @param aA2
             * @private
             * @returns {number}
             */

            BezierClass.prototype.CalcBezier = function(aT, aA1, aA2){

                return ((this.A(aA1, aA2) * aT +
                         this.B(aA1, aA2)) * aT +
                         this.C(aA1)) * aT;
            };

            /**
             * @param aT
             * @param aA1
             * @param aA2
             * @private
             * @returns {number}
             */

            BezierClass.prototype.GetSlope = function(aT, aA1, aA2){

                return 3.0 * this.A(aA1, aA2) * aT * aT + 2.0 *
                             this.B(aA1, aA2) * aT +
                             this.C(aA1);
            };

            /**
             * @param aX
             * @private
             * @returns {*}
             */

            BezierClass.prototype.GetTForX = function(aX){

                let aGuessT = aX;

                for(let i = 0; i < 4; ++i){

                    const currentSlope = this.GetSlope(

                        aGuessT,
                        this.mX1,
                        this.mX2
                    );

                    if(currentSlope === 0){

                        return aGuessT;
                    }

                    const currentX = this.CalcBezier(

                        aGuessT,
                        this.mX1,
                        this.mX2

                    ) - aX;

                    aGuessT -= currentX / currentSlope;
                }

                return aGuessT;
            };

            /**
             * @param x
             * @returns {*}
             */

            BezierClass.prototype.InitBezier = function(x){

                if(x === 0 || x === 1 || (this.mX1 === this.mY1 && this.mX2 === this.mY2)){

                    return x;
                }

                return this.CalcBezier(

                    this.GetTForX(x),
                    this.mY1,
                    this.mY2
                );
            };

            return function(mX1, mY1, mX2, mY2){

                const bezier = new BezierClass(mX1, mY1, mX2, mY2);

                return bezier.InitBezier.bind(bezier);
            };
        })();

        /**
         * @param obj
         * @param style
         * @param job_id
         * @param from
         * @param to
         * @param unit
         * @param force
         * @param duration
         * @param ease_str
         * @param callback
         * @param step
         * @param {number|string} delay
         * @param {string=} transform
         * @param {number=} color
         * @param {string=} style_group
         * @constructor
         * @final
         */

        function Job(

            obj,
            style,
            job_id,
            from,
            to,
            unit,
            force,
            duration,
            ease_str,
            callback,
            step,
            delay,
            transform,
            color,
            style_group
        ){
            /** @private */
            this.obj = obj;
            /** @private */
            this.css = obj._style;
            /** @private */
            this.style = style;
            /** @private */
            this.style_js = camel_to_snake(style);
            /** @private */
            this.from = from;
            /** @private */
            this.to = to;
            /** @private */
            this.current = from;
            /** @private */
            this.unit = unit;
            /** @private */
            this.force = force;
            /** @private */
            this.duration = duration;
            /** @private */
            this.ease_str = ease_str;
            /** @private */
            this.ease = init_easing(ease_str);
            /** @private */
            this.time = 0;
            /** @private */
            this.callback = callback;
            /** @private */
            this.step = step;
            /** @private */
            this.job_id = job_id;
            /** @private */
            this.delay = delay;
            /** @private */
            this.float = (

                color ?

                    ((unit === "%") || (style.indexOf("A") !== -1))
                :
                    (unit !== "px")
            );

            if(color){

                /** @private */
                this.color = color;
                /** @private */
                this.style_group = style_group;
            }

            if(transform){

                /** @private */
                this.transform = transform;
            }
        }

        const JobPrototype = Job.prototype;

        /**
         * @param {number} now
         * @param {number=} last
         * @private
         */

        JobPrototype.animate = function(now, last){

            const from = this.from;
            const to = this.to;
            const duration = this.duration;
            const obj = this.obj;
            const bypass = (from === to);

            let stamp = this.time += (now - (last || now));
            const complete = (stamp >= duration);
            let current_value;

            if(!bypass){

                if(complete){

                    current_value = to;
                }
                else{

                    let ease;

                    if((ease = this.ease)){

                        if(ease.length){

                            current_value = (to - from) * ease[((res / duration * stamp + 0.5) >> 0)] / prefetch_resolution;
                        }
                        else{

                            // linear (default)
                            current_value = (to - from) * stamp / duration;
                        }
                    }
                    else if((ease = this.ease_str)){

                        if(ease.length === 1){

                            // fn(x)
                            current_value = ease(stamp / duration);
                        }
                        else{

                            // fn(current, from, to, total)
                            current_value = ease(stamp, from, to, duration);
                        }
                    }

                    current_value = from + current_value;

                    current_value = (

                        this.float ? // --> 0.0 - 1.0, %, deg, em

                            ((current_value * res + 0.5) >> 0) / res
                        :
                            (current_value + 0.5) >> 0
                    );
                }
            }

            const style = this.style;

            if(!bypass && (this.current !== current_value)){

                this.current = current_value;

                if(this.transform){

                    obj._transform[style] = current_value + this.unit;
                }
                else if(this.color){

                    obj["_" + this.style_group][style] = current_value;
                }
                else{

                    this.animate_job(style, current_value += this.unit);
                }
            }

            if(style === this.transform){

                current_value = this.transform_job();
            }
            else if(style === this.color){

                current_value = this.color_job(this.style_group);
            }

            if(this.step){

                this.step.call(obj, complete ? 1 : stamp / duration, current_value);
            }

            if(complete){

                /* CHECK AGAINST SELF LOOPING */

                this.time = -1;

                if(this.callback){

                    this.callback.call(obj);
                }
            }
        };

        /** @private */

        JobPrototype.render_job = function(fat, now){

            if(this.time === -1){

                this.obj[this.job_id] = null;

                return;
            }
            else{

                const elapsed = now - fat.last_update;

                if(this.delay) {

                    if((this.delay -= elapsed) > 0){

                        return true;
                    }
                    else{

                        this.delay = 0;
                    }
                }

                this.animate(now, fat.last_update);
            }

            return true;
        };

        /** @private */

        JobPrototype.animate_job = function(style, value){

            set_style(this.css, this.style_js, value, this.force);
        };

        /**
         * @const
         * @dict
         */

        const color_keys = (function(obj){

             function construct(suffix, index){

                obj[suffix] = -index;
                obj[suffix + "R"] = index;
                obj[suffix + "G"] = index;
                obj[suffix + "B"] = index;
                obj[suffix + "A"] = index;

                obj[suffix + "H"] = index;
                obj[suffix + "S"] = index;
                obj[suffix + "L"] = index;
            }

            construct("color", 1);
            construct("backgroundColor", 2);
            construct("borderColor", 3);

            return obj;

        })({});

        /**
         * @const
         * @dict
         */

        const transform_keys = (function(obj){

            function construct(suffix, index){

                obj[suffix] = index;
                obj[suffix + "X"] = index;
                obj[suffix + "Y"] = index;
                obj[suffix + "Z"] = index;
                obj[suffix + "3d"] = index;
            }

            construct("translate", 1);
            construct("scale", 2);
            construct("rotate", 3);
            construct("skew", 4);

            return obj;

        })({});

        /**
         * @const
         * @dict
         */

        const matrix2d_index = {

            "scaleX": 0,
            "skewY": 1,
            "skewX": 2,
            "scaleY": 3,
            "translateX": 4,
            "translateY": 5
        };

        const hex_to_int_table = {};
        const int_to_hex_table = new Array(255);

        for(let i = 0; i < 256; i++){

            let hex = (i).toString(16);

            if(hex.length % 2){

                hex = "0" + hex;
            }

            hex_to_int_table[hex] = i;
            int_to_hex_table[i] = hex;
        }

        /** @private */

        JobPrototype.transform_job = function(){

            const transform = this.obj._transform;
            const order = this.obj._transform_order;

            set_style(this.css, prefix_transform_js || "transform", merge_transform(transform, order), this.force);

            return transform;
        };

        /** @private */

        JobPrototype.color_job = function(style_group){

            const color = this.obj["_" + style_group];

            set_style(this.css, style_group.replace("C", "-c"), merge_color(color, style_group, this.unit), this.force);

            return color;
        };

        /**
         * @param hex_or_rgba
         * @param key
         * @param {number=} default_alpha
         * @returns {Object<string, number>}
         */

        function parse_color(hex_or_rgba, key, default_alpha){

            let r, g, b, a = default_alpha || -1, tmp;

            if(hex_or_rgba[0] === "#"){

                hex_or_rgba = hex_or_rgba.toLowerCase();

                if(hex_or_rgba.length === 4){

                    r = hex_to_int_table[(tmp = hex_or_rgba[1]) + tmp];
                    g = hex_to_int_table[(tmp = hex_or_rgba[2]) + tmp];
                    b = hex_to_int_table[(tmp = hex_or_rgba[3]) + tmp];
                }
                else{

                    r = hex_to_int_table[hex_or_rgba[1] + hex_or_rgba[2]];
                    g = hex_to_int_table[hex_or_rgba[3] + hex_or_rgba[4]];
                    b = hex_to_int_table[hex_or_rgba[5] + hex_or_rgba[6]];
                }
            }
            else{

                tmp = substring_match(hex_or_rgba, "(", ")").split(",");

                r = parseInt(tmp[0], 10);
                g = parseInt(tmp[1], 10);
                b = parseInt(tmp[2], 10);

                if(tmp.length > 3){

                    a = parse_float(tmp[3]);
                }

                if(hex_or_rgba.indexOf("hsl") !== -1){

                    const rgb = hsl_to_rgb(r, g, b);

                    r = rgb.r;
                    g = rgb.g;
                    b = rgb.b;
                }
            }

            const obj = {};

            obj[key + "R"] = r;
            obj[key + "G"] = g;
            obj[key + "B"] = b;

            if(a !== -1){

                obj[key + "A"] = a;
            }

            return obj;
        }

        /**
         * http://en.wikipedia.org/wiki/HSL_color_space
         *
         * @param {number} h
         * @param {number} s
         * @param {number} l
         * @return {Object<string, number>}
         */

        function hsl_to_rgb(h, s, l){

            let r, g, b;

            if(s === 0){

                r = g = b = l;
            }
            else{

                const q = (

                    l < 0.5 ?

                        l * (1 + s)
                    :
                        l + s - l * s
                );

                const p = 2 * l - q;

                r = hue_to_rgb(p, q, h + 1/3);
                g = hue_to_rgb(p, q, h);
                b = hue_to_rgb(p, q, h - 1/3);
            }

            return {

                r: (r * 255 + 0.5) >> 0,
                g: (g * 255 + 0.5) >> 0,
                b: (b * 255 + 0.5) >> 0
            };
        }

        function hue_to_rgb(p, q, t){

            if(t < 0) t += 1;
            else if(t > 1) t -= 1;

            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;

            return p;
        }

        /**
         * @constructor
         * @final
         */

        function Fat(){

            /** @export */
            this.id = id_counter++;
            /** @private */
            this.stack = [];
            /** @private */
            this.render = render_frames.bind(this);
            /** @private */
            this.last_update = 0;
            /** @private */
            this.exec = 0;
        }

        /**
         * @param {CSSStyleDeclaration} css
         * @param {string} key
         * @param {string} value
         * @param {boolean=} force
         */

        function set_style(css, key, value, force){

            if(force){

                css.setProperty(key, value, "important");
            }
            else{

                css.setProperty(key, value);
            }
        }

        /**
         * @param {string} string
         * @returns {string}
         */

        function camel_to_snake(string) {

            return string.replace(/([A-Z])/g, "-$1").toLowerCase();
        }

        function get_nodes(obj){

            if(is_string(obj)){

                obj = document.querySelectorAll(/** @type {string} */ (obj));
            }
            else{

                obj.length || (obj = [obj]);
            }

            return obj;
        }

        function destroy(){

            if(this.exec){

                this.exec = 0;
                this.stack = [];
                this.last_update = 0;
            }

            return this;
        }

        /**
         * @const
         * @param {string=} ease
         * @return {Array<number>}
         */

        function init_easing(ease){

            return (

                is_string(ease) ? (

                    ease ? prefetch[ease] || (

                        prefetch[ease] = prefetch_ease(ease)

                    ) : []

                ) : null
            );
        }

        /**
         * @const
         * @param {string=} ease
         * @return {Array<number>|Int16Array<number>}
         */

        function prefetch_ease(ease){

            let fn_ease = easing[ease] || (

                easing[ease] = easing_bezier.apply(easing_bezier, builtin_easing[ease])
            );

            if(!fn_ease){

                return [];
            }

            /**
             * @constructor
             */

            const Arr_class = Int16Array || Array;

            /**
             * @type {Array<number>|Int16Array<number>}
             * @const
             */

            const arr = new Arr_class(res);

            for(let i = 0; i < res; i++){

                arr[i] = (fn_ease(i / res) * prefetch_resolution + 0.5) >> 0;
            }

            return arr;
        }

        function render_frames(time){

            const stack = this.stack;
            const len = stack.length;

            if(len){

                this.exec = requestAnimationFrame(this.render);

                let in_progress = false;

                if(len){

                    for(let i = 0; i < len; i++){

                        const current_job = stack[i];

                        if(current_job){

                            in_progress = true;

                            if(!current_job.render_job(this, time)){

                                stack[i] = null;
                            }
                        }
                    }
                }

                this.last_update = time;

                if(!in_progress){

                    this.destroy();
                }
            }
        }

        /**
         * @param {*} val
         * @returns {boolean}
         */

        function is_string(val){

            return typeof val === "string";
        }

        /**
         * @param {*} val
         * @returns {boolean}
         */

        function is_array(val){

            return val.constructor === Array;
        }

        /**
         * @param {*} val
         * @returns {boolean}
         */

        function is_undefined(val){

            return typeof val === "undefined";
        }

        /**
         * @param {string|number} from
         * @param {string|number} to
         * @param {boolean} force
         * @param {number|string|Function} duration
         * @param {string} ease_str
         * @param {Function} callback
         * @param {Function} step
         * @param {number} delay
         * @param {string=} transform
         * @param {string=} color
         * @param {string=} style_group
         */

        JobPrototype.update_job = function(from, to, force, duration, ease_str, callback, step, delay, transform, color, style_group){

            if(is_undefined(from)){

                from = this.current;
            }
            else{

                from = parse_float(from);
            }

            if(is_string(to)){

                to = parse_float(to);
            }

            this.from = from;
            this.to = to;
            this.duration = duration;
            this.time = 0;
            this.force = force;

            if(this.ease_str !== ease_str){

                this.ease = init_easing(ease_str);
                this.ease_str = ease_str;
            }

            this.callback = callback;
            this.step = step;
            this.delay = delay;

            if(transform){

                this.transform = transform;
            }

            if(color){

                this.color = color;
                this.style_group = style_group;
            }
        };

        /**
         * @param {HTMLElement} obj
         * @param {string} style
         * @param {string} job_id
         * @param {string|number} from
         * @param {string|number} to
         * @param {string} unit
         * @param {boolean} force
         * @param {number|string|Function} duration
         * @param {string} ease_str
         * @param {Function} callback
         * @param {Function} step
         * @param {number} delay
         * @param {string=} transform
         * @param {number=} color
         * @param {string=} style_group
         */

        function create_job(obj, style, job_id, from, to, unit, force, duration, ease_str, callback, step, delay, transform, color, style_group){

            let style_from = "" + (

                transform ?

                    get_transform
                :
                    color ?

                        get_color
                    :
                        get_style

            )(obj, style, from, style_group);

            if(style_from === "auto"){

                style_from = "0";
            }

            from = parse_float(style_from);

            if(is_string(to)){

                let style_to = to;

                to = parse_float(to);

                if(!unit){

                    unit = style_to.substring(("" + to).length);
                }
            }

            if(!unit){

                unit = style_from.substring(("" + from).length);
            }

            const job = new Job(

                obj,
                style,
                job_id,
                from,
                to,
                unit,
                force,
                duration,
                ease_str,
                callback,
                step,
                delay,
                transform,
                color,
                style_group
            );

            this.stack[this.stack.length] = job;

            obj[job_id] = job;
        }

        /**
         * @param obj
         * @param style
         * @param {string|number=} from
         * @returns {string|number}
         */

        function get_style(obj, style, from){

            const css = obj._style || (obj._style = obj.style);

            return (is_undefined(from) ? css[style] : from) || (

                obj._style_comp || (

                    obj._style_comp = getComputedStyle(obj)
                )

            )[style];
        }

        /**
         * @param style
         * @param style_value
         * @param style_prop
         * @param {Array<string>=} style_order
         * @returns {Object}
         */

        function parse_transform(style, style_value, style_prop, style_order){

            if(style_value === "none"){

                const transform_group = style.substring(0, style.length - 1);

                style_prop[style] = transform_group === "scale" ? 1 : 0;

                if(style_order){

                    if(!style_prop[transform_group]){

                        style_order[style_order.length] = transform_group;
                        style_prop[transform_group] = 1;
                    }
                }

                return style_prop;
            }
            else if(style_value.indexOf("matrix") !== -1){

                style_value = style + "(" + get_transform_matrix(style_value, style) + ")";
            }

            const parts = style_value.replace(/, /g, ",").split(" ");
            const has_prop = {};

            let style_order_len = 0;

            for(let i = 0; i < parts.length; i++){

                const part = parts[i];
                let prop = substring_match(part, "(");

                if(prop){

                    const values = substring_match(part, "(", ")").split(",");
                    const len = values.length;

                    if(len > 2){

                        prop = prop.replace("3d", "");
                        style_prop[prop + "Z"] = values[2];
                    }

                    if(len > 1){

                        style_prop[prop + "X"] = values[0];
                        style_prop[prop + "Y"] = values[1];
                    }
                    else{

                        style_prop[prop] = values[0];
                        prop = prop.substring(0, prop.length - 1);
                    }

                    if(!has_prop[prop]){

                        if(style_order){

                            style_order[style_order_len++] = prop;
                        }

                        has_prop[prop] = 1;
                    }
                }
            }

            return style_prop;
        }

        function get_transform(obj, style, from){

            let style_prop = obj._transform;
            let style_order;

            if(!style_prop){

                obj._transform = style_prop = {};
                obj._transform_order = style_order = [];
            }
            else{

                style_order = obj._transform_order;
            }

            if(!style_prop || is_undefined(style_prop[style])){

                let style_value = from || get_style(obj, prefix_transform || "transform");

                parse_transform(style, style_value, style_prop, style_order);
            }

            return style_prop[style];
        }

        /**
         * @param {Element} obj
         * @param {string} style
         *  @param {string} from
         * @param {string=} style_group
         * @returns {Object<string, number>}
         */

        function get_color(obj, style, from, style_group){

            const key = "_" + style_group;
            let style_prop = obj[key];

            if(!style_prop){

                const style_value = from || get_style(obj, style_group);

                obj[key] = style_prop = parse_color(style_value, style_group, /* default_alpha: */ 1);
            }

            return style_prop[style];
        }

        /**
         * @param {Object<string, string|number>} transform
         * @param {Array<string>} order
         * @returns {string}
         */

        function merge_transform(transform, order){

            let str = "";

            for(let i = 0, len = order.length; i < len; i++){

                const prop = order[i];
                const default_value = prop === "scale" ? 1 : 0;

                const x = transform[prop + "X"];
                const y = transform[prop + "Y"];
                const z = transform[prop + "Z"];

                if(x || y || z){

                    if(prop === "rotate"){

                        if(x) str += prop + "X(" + (x || default_value) + ") ";
                        if(y) str += prop + "Y(" + (y || default_value) + ") ";
                    }

                    if(z && (parse_float(z) !== default_value)){

                        if(prop === "rotate"){

                            str += prop + "Z(" + (z || default_value) + ") ";
                        }
                        else{

                            str += prop + "3d(" + (x || default_value) + "," + (y || default_value) + "," + z + ") ";
                        }
                    }
                    else{

                        if(prop !== "rotate"){

                            str += prop + "(" + (x || default_value) + "," + (y || default_value) + ") ";
                        }
                    }
                }
            }

            return str;
        }

        /**
         * @param {Object<string, number>} color
         * @param {string} prop
         * @param {string} unit
         * @returns {string}
         */

        function merge_color(color, prop, unit){

            let r = color[prop + "R"] || 0;
            let g = color[prop + "G"] || 0;
            let b = color[prop + "B"] || 0;
            let a = color[prop + "A"];

            if(unit === "%"){

                r = (2.55 * r + 0.5) >> 0;
                g = (2.55 * g + 0.5) >> 0;
                b = (2.55 * b + 0.5) >> 0;

                if(a){

                    a /= 100;
                }
            }

            return (

                ((a === 1) || is_undefined(a)) ?

                    "#" + int_to_hex_table[r]
                        + int_to_hex_table[g]
                        + int_to_hex_table[b]
                :
                    "rgba(" + r + "," + g + "," + b + "," + a + ")"
            );

        }

        /**
         * @param {string} str
         * @param {string} from
         * @param {string=} to
         * @returns {string}
         */

        function substring_match(str, from, to){

            const pos = str.indexOf(from);

            if(pos !== -1){

                if(to){

                    return str.substring(pos + from.length, str.indexOf(to));
                }
                else{

                    return str.substring(0, pos);
                }
            }

            return "";
        }

        function parse_bezier(config_ease){

            if(config_ease){

                let bezier;
                let values;

                if(is_string(config_ease)){

                    if((bezier = substring_match(config_ease, "bezier(", ")"))){

                        bezier = bezier.replace(/ /g, "");
                        values = bezier.split(",");
                    }
                }
                else if(is_array(config_ease)){

                    bezier = config_ease.join(",");
                    values = config_ease;
                }

                if(bezier){

                    easing[bezier] || (easing[bezier] = easing_bezier.apply(easing_bezier, values));
                    config_ease = bezier;
                }
            }

            return config_ease;
        }

        function get_transform_matrix(style_matrix, style){

            const values = substring_match(style_matrix, "(", ")").split(",");

            return parseFloat(values[matrix2d_index[style]]) || 0;
        }

        /**
         * @param {Array<(Node|null)>|Node|NodeList|string|null} obj
         * @param {!Object<string, number|string|Object>} styles
         * @param {Object<string, number|string|boolean>|Function=} config
         * @param {Function=} callback
         */

        function animate(obj, styles, config, callback){

            if(config){

                if(typeof config === "function"){

                    callback = config;
                    config = {};
                }
            }
            else{

                config = {};
            }

            obj = get_nodes(obj);

            let config_delay = config["delay"];
            let config_duration = config["duration"] || 400;
            let config_ease = parse_bezier(config["ease"]) || "";

            let style_keys = Object.keys(styles);
            let style_length = style_keys.length;

            const config_callback = callback || config["callback"];
            const config_step = config["step"];
            const config_force = config["force"];
            const config_init = config["init"];

            let last_transform;
            let last_color;
            let last_color_background;
            let last_color_border;

            for(let k = style_length; k-- > 0;){

                let key = style_keys[k];

                if(key === "transform"){

                    const props = parse_transform(key, styles[key], {});
                    const prop_keys = Object.keys(/** @type {!Object} */ (props));

                    for(let i = 0, len = prop_keys.length; i < len; i++){

                        const tmp = prop_keys[i];

                        style_keys[style_length++] = tmp;
                        styles[tmp] = props[tmp];
                    }

                    last_transform = prop_keys[prop_keys.length - 1];

                    continue;
                }

                if(!last_transform && transform_keys[key]){

                    last_transform = key;

                    continue;
                }

                let color_type = color_keys[key];

                if(color_type){

                    if(color_type < 0){

                        let value = styles[key];

                        if(typeof value === "object"){

                            value = value["to"];
                        }

                        const color = parse_color(value, key);
                        let tmp, val;

                        style_keys[style_length++] = (tmp = key + "R");
                        styles[tmp] = color[tmp];

                        style_keys[style_length++] = (tmp = key + "G");
                        styles[tmp] = color[tmp];

                        style_keys[style_length++] = (tmp = key + "B");
                        styles[tmp] = color[tmp];

                        const has_alpha = !is_undefined(val = color[tmp = key + "A"]);

                        if(has_alpha){

                            style_keys[style_length++] = tmp;
                            styles[tmp] = val;
                            key = tmp;
                        }
                        else{

                            key = key + "B";
                        }

                        color_type *= -1;
                    }

                    if(!last_color && (color_type === 1)){

                        last_color = key;
                    }
                    else if(!last_color_background && (color_type === 2)){

                        last_color_background = key;
                    }
                    else if(!last_color_border && (color_type === 3)){

                        last_color_border = key;
                    }
                }
            }

            /* Create Jobs */

            for(let k = 0; k < style_length; k++){

                let has_transform;
                let has_color;
                let has_color_background;
                let has_color_border;
                let style_group;

                let key = style_keys[k];
                let value = styles[key];
                let from;
                let unit;

                if(key === "transform"){

                    continue;
                }

                has_transform = transform_keys[key] && last_transform;

                const color_type = color_keys[key];

                if(color_type){

                    if(color_type < 0){

                        continue;
                    }

                    if(color_type === 1){

                        has_color = last_color;
                        style_group = "color";
                    }
                    else if(color_type === 2){

                        has_color_background = last_color_background;
                        style_group = "backgroundColor";
                    }
                    else if(color_type === 3){

                        has_color_border = last_color_border;
                        style_group = "borderColor";
                    }
                }

                if(is_array(value)){

                    from = value[0];
                    unit = value[2];
                    value = value[1];
                }
                else if(typeof value === "object"){

                    config_delay = value["delay"] || config_delay;
                    config_duration = value["duration"] || config_duration;
                    config_ease = value["ease"] || config_ease;
                    from = value["from"];
                    unit = value["unit"];
                    value = value["to"];
                }

                const last = (k === style_length - 1);
                const job_id = "_fat_" + key + this.id;

                for(let i = 0, len = obj.length; i < len; i++){

                    const current_obj = obj[i];

                    if(config_init){

                        if(k === 0){

                            current_obj._style_comp = null;

                            if(last_transform) {

                                current_obj._transform = null;
                            }
                            else if(last_color) {

                                current_obj._color = null;
                            }
                            else if(last_color_background) {

                                current_obj._backgroundColor = null;
                            }
                            else if(last_color_border) {

                                current_obj._borderColor = null;
                            }
                        }
                    }

                    /**
                     * @type Job
                     */

                    const cur_job = !config_init && current_obj[job_id];

                    if(cur_job){

                        cur_job.update_job(

                            from,
                            value,
                            config_force,
                            config_duration,
                            config_ease,
                            last && config_callback,
                            last && config_step,
                            config_delay,
                            has_transform,
                            has_color || has_color_background || has_color_border,
                            style_group
                        );
                    }
                    else{

                        this.create_job(

                            current_obj,
                            key,
                            job_id,
                            from,
                            value,
                            unit,
                            config_force,
                            config_duration,
                            config_ease,
                            last && config_callback,
                            last && config_step,
                            config_delay,
                            has_transform,
                            has_color || has_color_background || has_color_border,
                            style_group
                        );
                    }
                }
            }

            if(!this.exec){

                this.exec = requestAnimationFrame(this.render)
            }

            return this;
        }

        const FatPrototype = Fat.prototype;

        FatPrototype.create_job = create_job;
        /** @export */
        FatPrototype.animate = animate;
        /** @export */
        FatPrototype.destroy = destroy;
        /** @export */
        FatPrototype.create = function(){

            return new Fat();
        };

        /** @export */
        FatPrototype.ease = easing;

        /** @export */
        FatPrototype.transform = function(obj, styles, config, callback){

            if(is_string(styles)){

                styles = {

                    "transform": styles
                }
            }

            return this.animate(obj, styles, config, callback);
        };

        return new Fat();

    })(), this);

    /** --------------------------------------------------------------------------------------
     * UMD Wrapper for Browser and Node.js
     * @param {!string} name
     * @param {!Function|Object} factory
     * @param {!Function|Object=} root
     * @suppress {checkVars}
     * @const
     */

    function provide(name, factory, root){

        let prop;

        // AMD (RequireJS)
        if((prop = root["define"]) && prop["amd"]){

            prop([], function(){

                return factory;
            });
        }
        // Closure (Xone)
        else if((prop = root["modules"])){

            prop[name.toLowerCase()] = factory;
        }
        // CommonJS (Node.js)
        else if(typeof exports === "object"){

            /** @export */
            module.exports = factory;
        }
        // Global (window)
        else{

            root[name] = factory;
        }
    }

}).call(this);
