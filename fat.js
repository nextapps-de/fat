;/**!
 * @preserve FAT v0.2.0
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Released under the Apache 2.0 Licence
 * https://github.com/nextapps-de/fat
 */

/** @define {boolean} */ const SUPPORT_DEBUG = true;
/** @define {boolean} */ const SUPPORT_COLOR = true;
/** @define {boolean} */ const SUPPORT_CONTROL = true;
/** @define {boolean} */ const SUPPORT_SEQUENCES = true;
/** @define {boolean} */ const SUPPORT_TRANSFORM = true;
/** @define {string} */  const SUPPORT_ENGINE = "";
/** @define {boolean} */ const SUPPORT_ANIMATE = SUPPORT_ENGINE ? SUPPORT_ENGINE === "all" || SUPPORT_ENGINE === "js" : true;
/** @define {boolean} */ const SUPPORT_TRANSITION = SUPPORT_ENGINE ? SUPPORT_ENGINE === "all" || SUPPORT_ENGINE === "css" : true;
/** @define {boolean} */ const SUPPORT_NATIVE = SUPPORT_ENGINE ? SUPPORT_ENGINE === "all" || SUPPORT_ENGINE === "native" || SUPPORT_ENGINE === "waapi" : true;
/** @define {boolean} */ const SUPPORT_EASING = true;
/** @define {boolean} */ const SUPPORT_EASE_QUAD_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_QUAD_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_QUAD_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_CUBIC_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_CUBIC_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_CUBIC_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_QUART_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_QUART_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_QUART_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_QUINT_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_QUINT_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_QUINT_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_SINE_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_SINE_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_SINE_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_EXPO_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_EXPO_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_EXPO_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_CIRC_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_CIRC_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_CIRC_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_ELASTIC_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_ELASTIC_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_ELASTIC_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_BACK_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_BACK_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_BACK_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_BOUNCE_IN = false;
/** @define {boolean} */ const SUPPORT_EASE_BOUNCE_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_BOUNCE_IN_OUT = false;
/** @define {boolean} */ const SUPPORT_EASE_BEZIER = false;

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(){

    provide("Fat", (function(){

        "use strict";

        const res = Math.max(screen.width, screen.height);
        const prefetch = create_object();
        const prefetch_resolution = 1000;
        const float_resolution = 1000;

        const vendor = (SUPPORT_TRANSFORM || SUPPORT_TRANSITION) && (function(){

            const styles = getComputedStyle(document.body);

            if(is_undefined(styles["transform"])){

                const vendors = ["ms", "moz", "webkit", "o"];

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
        const prefix_transform_js = vendor && ("-" + prefix_transform.replace("T", "-t"));
        const prefix_transition = vendor && (vendor + "Transition");
        const prefix_transition_js = vendor && ("-" + prefix_transition.replace("T", "-t"));

        let last_update = 0;

        const easing = {

            "linear": function(t, b, c, d) {

                return (c * (t / d) + b);
            }
        };

        if(SUPPORT_EASING || SUPPORT_EASE_QUAD_IN){

            easing["quadIn"] = function(t, b, c, d){

                return c * (t /= d) * t + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_QUAD_OUT){

            easing["quadOut"] = function(t, b, c, d){

                return -c * (t /= d) * (t - 2) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_QUAD_IN_OUT){

            easing["quadInOut"] = function(t, b, c, d){

                if((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_CUBIC_IN){

            easing["cubicIn"] = function(t, b, c, d){

                return c * (t /= d) * t * t + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_CUBIC_OUT){

            easing["cubicOut"] = function(t, b, c, d){

                return c * ((t = t / d - 1) * t * t + 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_CUBIC_IN_OUT){

            easing["cubicInOut"] = function(t, b, c, d){

                if((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_QUART_IN){

            easing["quartIn"] = function(t, b, c, d){

                return c * (t /= d) * t * t * t + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_QUART_OUT){

            easing["quartOut"] = function(t, b, c, d){

                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_QUART_IN_OUT){

            easing["quartInOut"] = function(t, b, c, d){

                if((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_QUINT_IN){

            easing["quintIn"] = function(t, b, c, d){

                return c * (t /= d) * t * t * t * t + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_QUINT_OUT){

            easing["quintOut"] = function(t, b, c, d){

                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_QUINT_IN_OUT){

            easing["quintInOut"] = function(t, b, c, d){

                if((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_SINE_IN){

            easing["sineIn"] = function(t, b, c, d){

                return -c * Math.cos(t / d * (1.5708)) + c + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_SINE_OUT){

            easing["sineOut"] = function(t, b, c, d){

                return c * Math.sin(t / d * (1.5708)) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_SINE_IN_OUT){

            easing["sineInOut"] = function(t, b, c, d){

                return -c / 2 * (Math.cos(3.1416 * t / d) - 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_EXPO_IN){

            easing["expoIn"] = function(t, b, c, d){

                return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_EXPO_OUT){

            easing["expoOut"] = function(t, b, c, d){

                return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_EXPO_IN_OUT){

            easing["expoInOut"] = function(t, b, c, d){

                if(t === 0) return b;
                if(t === d) return b + c;
                if((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_CIRC_IN){

            easing["circIn"] = function(t, b, c, d){

                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_CIRC_OUT){

            easing["circOut"] = function(t, b, c, d){

                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_CIRC_IN_OUT){

            easing["circInOut"] = function(t, b, c, d){

                if((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_ELASTIC_IN){

            easing["elasticIn"] = function(t, b, c, d, s){

                s = 1.70158;
                let p = 0;
                let a = c;
                if(t === 0) return b;
                if((t /= d) === 1) return b + c;
                if(!p) p = d * .3;
                if(a < Math.abs(c)){
                    a = c;
                    s = p / 4;
                }
                else s = p / (6.2832) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (6.2832) / p)) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_ELASTIC_OUT){

            easing["elasticOut"] = function(t, b, c, d, s){

                s = 1.70158;
                let p = 0;
                let a = c;
                if(t === 0) return b;
                if((t /= d) === 1) return b + c;
                if(!p) p = d * .3;
                if(a < Math.abs(c)){
                    a = c;
                    s = p / 4;
                }
                else s = p / (6.2832) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (6.2832) / p) + c + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_ELASTIC_IN_OUT){

            easing["elasticInOut"] = function(t, b, c, d, s){

                s = 1.70158;
                let p = 0;
                let a = c;
                if(t === 0) return b;
                if((t /= d / 2) === 2) return b + c;
                if(!p) p = d * (0.45);
                if(a < Math.abs(c)){
                    a = c;
                    s = p / 4;
                }
                else s = p / (6.2832) * Math.asin(c / a);
                if(t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (6.2832) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (6.2832) / p) * .5 + c + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_BACK_IN){

            easing["backIn"] = function(t, b, c, d, s){

                if(is_undefined(s)) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_BACK_OUT){

            easing["backOut"] = function(t, b, c, d, s){

                if(is_undefined(s)) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_BACK_IN_OUT){

            easing["backInOut"] = function(t, b, c, d, s){

                if(is_undefined(s)) s = 1.70158;
                if((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_BOUNCE_IN){

            easing["bounceIn"] = function(t, b, c, d){

                return c - easing["easeOutBounce"](d - t, 0, c, d) + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_BOUNCE_OUT){

            easing["bounceOut"] = function(t, b, c, d){

                if((t /= d) < (1 / 2.75)){
                    return c * (7.5625 * t * t) + b;
                }
                else if(t < (0.7273)){
                    return c * (7.5625 * (t -= (0.5454)) * t + .75) + b;
                }
                else if(t < (0.9091)){
                    return c * (7.5625 * (t -= (0.8182)) * t + .9375) + b;
                }
                else{
                    return c * (7.5625 * (t -= (0.9545)) * t + .984375) + b;
                }
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_BOUNCE_IN_OUT){

            easing["bounceInOut"] = function(t, b, c, d){

                if(t < d / 2) return easing["easeInBounce"](t * 2, 0, c, d) * .5 + b;
                return easing["easeOutBounce"](t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            };
        }

        if(SUPPORT_EASING || SUPPORT_EASE_BEZIER){

            easing["bezier"] = function(t, b, c, d){

                // TODO
                // https://github.com/gre/bezier-easing/blob/master/src/index.js
            };
        }

        /**
         * @param obj
         * @param style
         * @param from
         * @param to
         * @param metric
         * @param force
         * @param duration
         * @param ease_str
         * @param callback
         * @param step
         * @param {number=} delay
         * @param {number=} loop
         * @param {string=} transform
         * @param {number=} color
         * @param {string=} color_group
         * @constructor
         */

        function Job(

            obj,
            style,
            from,
            to,
            metric,
            force,
            duration,
            ease_str,
            callback,
            step,
            delay,
            loop,
            transform,
            color,
            color_group
        ){
            this.obj = obj;
            this.css = obj._style;
            this.style = style;
            this.from = from;
            this.to = to;
            this.current = from;
            this.metric = metric;
            this.force = force;
            this.duration = duration;
            this.ease_str = ease_str;
            this.ease = init_easing(ease_str);
            this.start = 0;
            this.callback = callback;
            this.step = step;
            this.checkkey = "_fat_" + style;
            this.diff = (to - from) / 100;
            this.res = res / duration;
            this.delay = delay;
            this.loop = loop;
            this.float = (SUPPORT_COLOR && color ? ((metric === "%") || (style.indexOf("A") !== -1)) : (metric !== "px"));

            if(SUPPORT_COLOR){

                if(color){

                    this.color = color;
                    this.color_group = color_group;
                }
            }

            if(SUPPORT_TRANSFORM){

                if(transform){

                    this.transform = transform;
                }
            }
        }

        if(SUPPORT_ANIMATE || SUPPORT_TRANSFORM){

            /**
             * @param {number} time
             * @param {number=} ratio
             * @param {boolean=} direction
             */

            Job.prototype.animate = function(time, ratio, direction){

                const bypass = this.from === this.to;
                const obj = this.obj;
                const stamp = Math.max((time - (this.start || (this.start = (time /*+ this.delay*/)))) * (SUPPORT_CONTROL ? ratio : 1), 0);
                const complete = stamp >= this.duration;

                let current_value;

                if(!bypass){

                    if(complete){

                        current_value = (SUPPORT_CONTROL && !direction) ? this.from : this.to;
                    }
                    else{

                        current_value = this.diff * this.ease[((this.res * stamp + 0.5) >> 0)] / prefetch_resolution;

                        if(SUPPORT_CONTROL && !direction){

                            current_value = this.to - current_value;
                        }
                        else{

                            current_value = this.from + current_value;
                        }

                        current_value = (

                            this.float ? // --> 0.0 - 1.0, %, deg, em

                                ((current_value * float_resolution + 0.5) >> 0) / float_resolution
                            :
                                (current_value + 0.5) >> 0
                        );
                    }
                }

                const style = this.style;
                const has_changes = this.current !== current_value;

                if(has_changes){

                    this.current = current_value;

                    if(SUPPORT_TRANSFORM && this.transform){

                        obj._transform[style] = current_value + this.metric;
                    }
                    else if(SUPPORT_COLOR && this.color){

                        obj["_" + this.color_group][style] = current_value;
                    }
                    else{

                        this.animate_job(style, current_value);
                    }
                }

                if(SUPPORT_TRANSFORM && (style === this.transform)){

                    current_value = this.transform_job();
                }

                if(SUPPORT_COLOR && (style === this.color)){

                    current_value = this.color_job(this.color_group);
                }

                if((has_changes || bypass) && this.step){

                    this.step.call(obj, current_value);
                }

                if(complete){

                    /* CHECK AGAINST SELF LOOPING */

                    this.start = -1;

                    if(this.callback){

                        if(SUPPORT_SEQUENCES){

                            const sequences = obj._sequences;

                            if(sequences){

                                let current = ++obj._sequence_current;

                                if(this.loop && (current >= sequences.length)){

                                    this.loop--;

                                    obj._sequence_current = current = 0;
                                }

                                if(current < sequences.length){

                                    if(current > 0){

                                        return;
                                    }
                                }
                                else{

                                    obj._sequences = null;
                                }
                            }
                        }

                        this.callback.call(obj);
                    }
                }
            };
        }

        if(SUPPORT_ANIMATE){

            Job.prototype.animate_job = function(style, value){

                if(style === "scrollTop"){

                    this.obj.scrollTop = value;
                }
                else{

                    set_style(this.css, style, value + this.metric, this.force);
                }
            };
        }

        /**
         * @const
         * @dict
         */

        const color_keys = SUPPORT_COLOR ? (function(obj){

            function construct(suffix, index){

                obj[suffix] = -index;
                obj[suffix + "R"] = index;
                obj[suffix + "G"] = index;
                obj[suffix + "B"] = index;
                obj[suffix + "A"] = index;
            }

            construct("color", 1);
            construct("backgroundColor", 2);
            construct("borderColor", 3);
            // TODO:
            // construct("borderLeftColor", 3);
            // construct("borderTopColor", 3);
            // construct("borderRightColor", 3);
            // construct("borderBottomColor", 3);

            return obj;

        })(create_object()) : null;

        /**
         * @const
         * @dict
         */

        const transform_keys = SUPPORT_TRANSFORM ? (function(obj){

            function construct(suffix){

                obj[suffix] = 1;
                obj[suffix + "X"] = 1;
                obj[suffix + "Y"] = 1;
                obj[suffix + "Z"] = 1;
                obj[suffix + "3d"] = 1;
            }

            construct("scale");
            construct("skew");
            construct("translate");
            construct("rotate");

            return obj;

        })(create_object()) : null;

        /**
         * @const
         * @dict
         */

        // TODO: parse matrix data
        /*
        const matrix2d_index = {

            "scaleX": 0,
            "skewY": 1,
            "skewX": 2,
            "scaleY": 3,
            "translateX": 4,
            "translateY": 5
        };
        */

        let hex_to_int_table;
        let int_to_hex_table;

        if(SUPPORT_COLOR){

            hex_to_int_table = create_object();
            int_to_hex_table = new Array(255);

            for(let i = 0; i < 256; i++){

                let hex = (i).toString(16);

                if(hex.length % 2){

                    hex = "0" + hex;
                }

                hex_to_int_table[hex] = i;
                int_to_hex_table[i] = hex;
            }
        }

        if(SUPPORT_TRANSFORM){

            Job.prototype.transform_job = function(){

                const transform = this.obj._transform;

                set_style(this.css, prefix_transform_js || "transform", merge_transform(transform, "rotate") +
                                                                        merge_transform(transform, "scale") +
                                                                        merge_transform(transform, "skew") +
                                                                        merge_transform(transform, "translate"), this.force);
                return transform;
            };
        }

        if(SUPPORT_COLOR){

            Job.prototype.color_job = function(color_group){

                const color = this.obj["_" + color_group];

                set_style(this.css, color_group.replace("C", "-c"), merge_color(color, color_group, this.metric), this.force);

                return color;
            };
        }

        /**
         * @param hex_or_rgba
         * @param key
         * @param {number=} default_alpha
         * @returns {Object<string, number>}
         */

        function parse_color(hex_or_rgba, key, default_alpha){

            let r, g, b, a = default_alpha || -1, tmp;

            if(hex_or_rgba[0] === "#"){

                if(hex_or_rgba.length === 4){

                    r = hex_to_int_table[(tmp = hex_or_rgba[1]) + tmp];
                    g = hex_to_int_table[(tmp = hex_or_rgba[2]) + tmp];
                    b = hex_to_int_table[(tmp = hex_or_rgba[3]) + tmp];
                }
                else{

                    r = hex_to_int_table[hex_or_rgba.substring(1, 3)];
                    g = hex_to_int_table[hex_or_rgba.substring(3, 5)];
                    b = hex_to_int_table[hex_or_rgba.substring(5, 7)];
                }
            }
            else{

                tmp = hex_or_rgba.indexOf("(");
                tmp = hex_or_rgba.substring(tmp + 1, hex_or_rgba.indexOf(")")).split(',');

                r = parseInt(tmp[0], 10);
                g = parseInt(tmp[1], 10);
                b = parseInt(tmp[2], 10);

                if(tmp.length > 3){

                    a = parseFloat(tmp[3]);
                }

                if(hex_or_rgba.indexOf("hsl") !== -1){

                    const rgb = hsl_to_rgb(r, g, b);

                    r = rgb.r;
                    g = rgb.g;
                    b = rgb.b;
                }
            }

            const obj = create_object();

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
         * http://en.wikipedia.org/wiki/HSL_color_space
         *
         * @param {number} r
         * @param {number} g
         * @param {number} b
         * @return {Object<string, number>}
         */

        function rgb_to_hsl(r, g, b){

            r /= 255;
            g /= 255;
            b /= 255;

            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const l = (max + min) / 2;

            let h, s;

            if(max === min){

                h = s = 0;

            }
            else{

                const d = max - min;

                s = (

                    l > 0.5 ?

                        d / (2 - max - min)
                    :
                        d / (max + min)
                );

                     if(max === r) h = (g - b) / d + (g < b ? 6 : 0);
                else if(max === g) h = (b - r) / d + 2;
                else if(max === b) h = (r - g) / d + 4;

                h /= 6;
            }

            return {

                h: h,
                s: s,
                l: l
            };
        }

        /**
         * @param {Object<string, number|boolean>=} config
         * @constructor
         */

        function Fat(config){

            if(SUPPORT_ANIMATE || SUPPORT_TRANSFORM){

                this.stack = [];
                this.render = render_frames.bind(this);
                this.exec = 0;
                this.resync = false;

                if(SUPPORT_CONTROL){

                    config || (config = create_object());

                    //TODO:
                    this.autostart = !(config["autostart"] === false);
                    //TODO:
                    this.fps = config["fps"];
                    this.plays = true;
                    this.direction = true;
                    this.ratio = 1;
                }
            }
        }

        if(SUPPORT_ANIMATE || SUPPORT_TRANSFORM){

            Fat.prototype.handle = handle;
            /** @export */
            Fat.prototype.animate = animate;
            /** @export */
            Fat.prototype.destroy = destroy;
            /** @export */
            Fat.prototype.init = init;
            /** @export */
            Fat.prototype.easing = easing;
        }

        if(SUPPORT_TRANSFORM){

            /** @export */
            Fat.prototype.transform = animate;
        }

        if(SUPPORT_TRANSITION){

            /** @export */
            Fat.prototype.transition = transition;
        }

        if(SUPPORT_NATIVE){

            /** @export */
            Fat.prototype.native = native;
        }

        if(SUPPORT_CONTROL){

            /** @export */
            Fat.prototype.update = update;

            /** @export */
            Fat.prototype.seek = seek;

            /** @export */
            Fat.prototype.pause = function(){

                this.plays = false;
                return this;
            };

            /** @export */
            Fat.prototype.start = function(){

                this.plays = true;
                return this;
            };

            /** @export */
            Fat.prototype.stop = function(){

                return this.reset().pause();
            };

            /** @export */
            Fat.prototype.speed = function(ratio){

                this.ratio = ratio;
                return this;
            };

            /** @export */
            Fat.prototype.reset = function(){

                return this.seek(0);
            };

            /** @export */
            Fat.prototype.finish = function(){

                return this.seek(1);
            };

            /** @export */
            Fat.prototype.reverse = function(_reverse){

                if(is_undefined(_reverse)){

                    this.direction = !this.direction;
                }
                else{

                    this.direction = !_reverse;
                }

                return this;
            };
        }

        if(SUPPORT_ANIMATE || SUPPORT_TRANSFORM || SUPPORT_TRANSITION || SUPPORT_NATIVE){

            /** @export */
            Fat.prototype.create = function(){

                return new Fat();
            };
        }

        return new Fat();

        function seek(progress){

            for(let i = 0, len = this.stack.length; i < len; i++){

                const cur_job = this.stack[i];
                const cur_from = cur_job.from;
                const duration = cur_job.duration / this.ratio;

                cur_job.start += ((cur_job.current - cur_from) / (cur_job.to - cur_from) * duration) - (progress * duration);
            }

            return this;
        }

        /**
         * @param obj
         * @param style
         * @param {number|string=} value
         * @param {boolean=} force
         */

        function update(obj, style, value, force){

            if(is_string(style)){

                if(is_string(obj)){

                    obj = document.querySelectorAll(/** @type {string} */ (obj));
                }

                let obj_length = obj.length;

                if(!obj_length){

                    obj = [obj];
                    obj_length = 1;
                }

                for(let i = 0; i < obj_length; i++){

                    const cur_obj = obj[i];
                    const cur_job = cur_obj["_fat_" + style];

                    let found = true;

                    if(cur_job){

                        // TODO:
                        //if(SUPPORT_TRANSFORM){}
                        //if(SUPPORT_COLOR){}

                        if(cur_job.current === value){

                            found = false;
                        }
                        else{

                            if(is_string(value)){

                                value = parseFloat(value);
                            }
                            else if(is_undefined(value)){

                                value = cur_job.from;
                            }

                            if(cur_job.start !== -1){

                                cur_job.from = value;
                                cur_job.diff = (cur_job.to - value) / 100;
                            }

                            cur_job.current = value;

                            force || (force = cur_job.force);

                            if(cur_job.metric){

                                value += cur_job.metric;
                            }
                        }
                    }
                    else if(get_style(cur_obj, style) === value){

                        found = false;
                    }

                    if(found){

                        const css = cur_obj._style || (cur_obj._style = cur_obj.style);

                        set_style(css, style, value, force);
                    }
                }
            }
            else{

                const keys = Object.keys(style);

                for(let i = 0, len = keys.length; i < len; i++){

                    const key = keys[i];

                    this.update(obj, key, style[key]);
                }
            }

            return this;
        }

        function destroy(){

            if(this.exec){

                //cancelAnimationFrame(this.exec);

                this.exec = 0;
                this.stack = [];
            }

            return this;
        }

        function init(){

            this.resync = true;

            return this;
        }

        /**
         * @const
         * @param {string=} ease
         * @return {Array<number>}
         */

        function init_easing(ease){

            return (

                prefetch[ease] || (

                    prefetch[ease] = prefetch_ease(ease)
                )
            );
        }

        /**
         * @const
         * @param {string=} ease
         * @return {Array<number>|Int32Array<number>}
         */

        function prefetch_ease(ease){

            /**
             * @type {Array<number>|Int32Array<number>}
             * @const
             */

            const arr = (

                is_undefined(Int32Array) ?

                    new Array(res)
                :
                    new Int32Array(res)
            );

            const fn_ease = easing[ease] || easing["linear"];

            for(let i = 0; i < res; i++){

                arr[i] = (fn_ease(i, 0, 100, res) * prefetch_resolution + 0.5) >> 0;
            }

            return arr;
        }

        function render_frames(time){

            let len = this.stack.length;

            if(len){

                this.exec = requestAnimationFrame(this.render);

                const delay = time - last_update;

                last_update = time;

                let in_progress = false;

                for(let i = 0; i < len; i++){

                    const current_job = this.stack[i];

                    if(current_job){

                        if(current_job.start === -1){

                            if(SUPPORT_SEQUENCES && current_job.callback){

                                const current_obj = current_job.obj;
                                const sequences = current_obj._sequences;

                                if(sequences){

                                    this.animate(current_obj, sequences[current_obj._sequence_current], {

                                        "duration": current_job.duration,
                                        "ease": current_job.ease_str,
                                        "callback": current_job.callback,
                                        "step": current_job.step,
                                        "force": current_job.force
                                    });

                                    in_progress = true;

                                    continue;
                                }
                            }

                            current_job.obj[current_job.checkkey] = null;

                            this.stack[i] = null;
                        }
                        else{

                            in_progress = true;

                            if(current_job.delay) {

                                if((current_job.delay -= delay) > 0){

                                    continue;
                                }
                                else{

                                    current_job.delay = 0;
                                }
                            }

                            if(SUPPORT_CONTROL){

                                if(!this.plays){

                                    current_job.start += delay;
                                    continue;
                                }

                                current_job.animate(time, this.ratio, this.direction);
                            }
                            else{

                                current_job.animate(time);
                            }
                        }
                    }
                }

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

        function is_undefined(val){

            return typeof val === "undefined";
        }

        /**
         * @param {*} val
         * @param {string=} type
         * @returns {boolean}
         */

        function is_type(val, type){

            if(type){

                return typeof val !== "undefined";
            }
            else{

                return typeof val === type;
            }
        }

        function create_object(){

            return Object.create(null);
        }

        /**
         * @param {HTMLElement} obj
         * @param {string} style
         * @param {string|number} to
         * @param {boolean} force
         * @param {number|string|Function} duration
         * @param {string} ease_str
         * @param {Function} callback
         * @param {Function} step
         * @param {number} delay
         * @param {number=} loop
         * @param {string=} transform
         * @param {number=} color
         * @param {string=} color_group
         */

        function handle(obj, style, to, force, duration, ease_str, callback, step, delay, loop, transform, color, color_group){

            const checkkey = "_fat_" + style;

            /** @type Job */

            const cur_job = obj[checkkey];

            let from;

            if(cur_job){

                cur_job.from = from = cur_job.current;
                cur_job.to = to = parseFloat(to);
                cur_job.duration = duration;
                cur_job.start = 0;
                cur_job.force = force;

                if(cur_job.ease_str !== ease_str){

                    cur_job.ease = init_easing(ease_str);
                    cur_job.ease_str = ease_str;
                }

                cur_job.diff = (to - from) / 100;
                cur_job.res = res / duration;

                cur_job.callback = callback;
                cur_job.step = step;
                cur_job.delay = delay;

                if(SUPPORT_TRANSFORM){

                    if(transform){

                        cur_job.transform = transform;
                    }
                }

                if(SUPPORT_COLOR){

                    if(color){

                        cur_job.color = color;
                        cur_job.color_group = color_group;
                    }
                }
            }
            else{

                let style_from = "" + (

                    SUPPORT_TRANSFORM && transform ?

                        get_transform
                    :
                        SUPPORT_COLOR && color ?

                            get_color
                        :
                            get_style

                )(obj, style, color_group);

                if(style_from === "auto") style_from = "0";
                from = parseFloat(style_from);

                let style_to = "" + to;
                to = parseFloat(to);

                let metric = style_to.substring(("" + to).length);

                if(!metric){

                    metric = style_from.substring(("" + from).length);
                }

                const job = SUPPORT_TRANSFORM && SUPPORT_COLOR ? (new Job(

                    obj,
                    style,
                    from,
                    to,
                    metric,
                    force,
                    duration,
                    ease_str,
                    callback,
                    step,
                    delay,
                    loop,
                    transform,
                    color,
                    color_group

                )) : (new Job(

                    obj,
                    style,
                    from,
                    to,
                    metric,
                    force,
                    duration,
                    ease_str,
                    callback,
                    step,
                    delay,
                    loop
                ));

                this.stack[this.stack.length] = job;
                obj[checkkey] = job;
            }
        }

        function get_style(obj, style){

            if(style === "scrollTop"){

                return obj.scrollTop;
            }

            const css = obj._style || (obj._style = obj.style);
            const style_value = css[style];

            if(!style_value){

                return (

                    obj._style_comp || (obj._style_comp = getComputedStyle(obj))

                )[style];
            }

            return style_value;
        }

        function get_transform(obj, style){

            let style_prop = obj._transform;

            if(!style_prop){

                obj._transform = style_prop = create_object();

                const style_value = get_style(obj, prefix_transform || "transform");

                if(style_value === "none"){

                    style_prop["translateX"] = 0;
                    style_prop["translateY"] = 0;
                }
                else{

                    const parts = style_value.split(' ');

                    for(let i = 0; i < parts.length; i++){

                        const current_part = parts[i];
                        const part_val = current_part.indexOf("(");

                        if(part_val === -1){

                            continue;
                        }

                        const values = current_part.substring(part_val + 1, current_part.indexOf(")")).split(',');
                        let prop = current_part.substring(0, part_val);

                        if(values.length > 2){

                            prop = prop.replace("3d", "");
                            style_prop[prop + "Z"] = values[2];
                        }

                        if(values.length > 1){

                            style_prop[prop + "X"] = values[0];
                            style_prop[prop + "Y"] = values[1];
                        }
                        else{

                            style_prop[prop] = values[0];
                        }
                    }
                }
            }

            return style_prop[style];
        }

        /**
         * @param {Element} obj
         * @param {string} style
         * @param {string} color_group
         * @returns {Object<string, number>}
         */

        function get_color(obj, style, color_group){

            const key = "_" + color_group;
            let style_prop = obj[key];

            if(!style_prop){

                const style_value = get_style(obj, color_group);

                obj[key] = style_prop = parse_color(style_value, color_group, /* default_alpha: */ 1);
            }

            return style_prop[style];
        }

        /**
         * @param {Object<string, string|number>} transform
         * @param {string} prop
         * @returns {string}
         */

        function merge_transform(transform, prop){

            const x = transform[prop + "X"] || 0;
            const y = transform[prop + "Y"] || 0;
            const z = transform[prop + "Z"] || 0;

            if(x || y || z){

                if(z && parseFloat(z)){


                    return prop + "3d(" + x + "," + y + "," + z + ") ";
                }
                else{

                    return prop + "(" + x + "," + y + ") ";
                }
            }

            return "";
        }

        /**
         * @param {Object<string, number>} color
         * @param {string} prop
         * @param {string} metric
         * @returns {string}
         */

        function merge_color(color, prop, metric){

            let r = color[prop + "R"] || 0;
            let g = color[prop + "G"] || 0;
            let b = color[prop + "B"] || 0;
            let a = color[prop + "A"];

            if(metric === "%"){

                r = (2.55 * r + 0.5) >> 0;
                g = (2.55 * g + 0.5) >> 0;
                b = (2.55 * b + 0.5) >> 0;

                if(a){

                    a /= 100;
                }
            }

            if((a === 1) || is_undefined(a)){

                return "#" + int_to_hex_table[r]
                           + int_to_hex_table[g]
                           + int_to_hex_table[b];
            }
            else{

                return "rgba(" + r + "," + g + "," + b + "," + a + ")";
            }
        }
        
        function merge_arrays_at(first, second, pos){

            const second_length = second.length;
            const first_length = first.length;
            const result = new Array(first_length + second_length);
            
            for(let i = 0; i < pos; i++){

                result[i] = first[i];
            }

            for(let i = 0; i < second_length; i++){

                result[i + pos] = second[i];
            }

            for(let i = pos; i < first_length; i++){

                result[i + second_length] = first[i];
            }

            return result;
        }

        /*
        function get_transform_matrix(style_matrix, style){

            // var values = matrix.split('(')[1].split(')')[0].split(','),
            //     pi = Math.PI,
            //     sinB = parseFloat(values[8]),
            //     b = Math.round(Math.asin(sinB) * 180 / pi),
            //     cosB = Math.cos(b * pi / 180),
            //     matrixVal10 = parseFloat(values[9]),
            //     a = Math.round(Math.asin(-matrixVal10 / cosB) * 180 / pi),
            //     matrixVal1 = parseFloat(values[0]),
            //     c = Math.round(Math.acos(matrixVal1 / cosB) * 180 / pi);
            // rotateX = a;
            // rotateY = b;
            // rotateZ = c;

            const values = ((style_matrix.split('(')[1]).split(')')[0]).split(',');

            return values[matrix2d_index[style]] || "";
        }
        */

        /**
         * @param {Array<(Node|null)>|Node|NodeList|string|null} obj
         * @param {Object<string, number|string>|Array<Object<string, number|string>>} styles
         * @param {Object<string, number|string|boolean>} config
         */

        function animate(obj, styles, config){

            if(obj && styles){

                if(config){

                    const config_engine = config["engine"];

                    if(SUPPORT_TRANSITION && (config_engine === "css")){

                        return this.transition(obj, styles, config);
                    }

                    if(SUPPORT_NATIVE && (config_engine === "native")){

                        return this.native(obj, styles, config);
                    }
                }
                else{

                    config = create_object();
                }

                if(is_string(obj)){

                    obj = document.querySelectorAll(/** @type {string} */ (obj));
                }

                let obj_length = obj.length;

                if(!obj_length){

                    obj = [obj];
                    obj_length = 1;
                }

                if(SUPPORT_SEQUENCES){

                    if(styles.constructor === Array){

                        for(let i = 0; i < obj_length; i++){

                            const current_obj = obj[i];

                            current_obj._sequences = styles;
                            current_obj._sequence_current = 0;
                        }

                        styles = styles[0];
                    }
                }

                const config_duration = config["duration"] || 400;
                const config_ease = config["ease"] || "linear";
                const config_callback = config["callback"] || (SUPPORT_SEQUENCES && function(){/* TODO: mark last style */});
                const config_step = config["step"] || false;
                const config_delay = config["delay"] || 0;
                const config_force = config["force"] || false;
                const config_init = this.resync || config["init"];
                const config_loop = SUPPORT_SEQUENCES && config["loop"];

                let style_keys = Object.keys(styles);
                let style_length = style_keys.length;

                let last_transform;
                let last_color;
                let last_color_background;
                let last_color_border;

                if(SUPPORT_TRANSFORM || SUPPORT_COLOR){

                    for(let k = style_length; k-- > 0;){

                        const key = style_keys[k];

                        if(SUPPORT_TRANSFORM){

                            if(!last_transform && transform_keys[key]){

                                last_transform = key;

                                if(SUPPORT_COLOR){

                                    continue;
                                }
                                else{

                                    break;
                                }
                            }
                        }

                        if(SUPPORT_COLOR){

                            const color_type = color_keys[key];

                            if(color_type){

                                if(color_type < 0){

                                    const value = styles[key];
                                    const color = parse_color(value, key);
                                    let tmp, val;

                                    style_keys.unshift(tmp = key + "R");
                                    styles[tmp] = color[tmp];

                                    style_keys.unshift(tmp = key + "G");
                                    styles[tmp] = color[tmp];

                                    style_keys.unshift(tmp = key + "B");
                                    styles[tmp] = color[tmp];

                                    const has_alpha = !is_undefined(val = color[tmp = key + "A"]);

                                    if(has_alpha){

                                        style_keys.unshift(tmp);
                                        styles[tmp] = val;
                                    }

                                    k += has_alpha ? 4 : 3;
                                    style_length += has_alpha ? 4 : 3;
                                }
                                else{

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
                        }
                    }
                }

                /* Create Jobs */

                for(let k = 0; k < style_length; k++){

                    let has_transform;
                    let has_color;
                    let has_color_background;
                    let has_color_border;
                    let color_group;

                    const last = (k === style_length - 1);
                    const key = style_keys[k];
                    const value = styles[key];

                    if(SUPPORT_TRANSFORM){

                        has_transform = transform_keys[key] && last_transform;
                    }

                    if(SUPPORT_COLOR){

                        const color_type = color_keys[key];

                        if(color_type){

                            if(color_type < 0){

                                continue;
                            }

                            if(color_type === 1){

                                has_color = last_color;
                                color_group = "color";
                            }
                            else if(color_type === 2){

                                has_color_background = last_color_background;
                                color_group = "backgroundColor";
                            }
                            else if(color_type === 3){

                                has_color_border = last_color_border;
                                color_group = "borderColor";
                            }
                        }
                    }

                    for(let i = 0; i < obj_length; i++){

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

                        if(SUPPORT_TRANSFORM && SUPPORT_COLOR){

                            this.handle(

                                current_obj,
                                key,
                                value,
                                config_force,
                                config_duration,
                                config_ease,
                                last && config_callback,
                                last && config_step,
                                config_delay,
                                config_loop,
                                has_transform,
                                has_color || has_color_background || has_color_border,
                                color_group
                            );
                        }
                        else{

                            this.handle(

                                current_obj,
                                key,
                                value,
                                config_force,
                                config_duration,
                                config_ease,
                                last && config_callback,
                                last && config_step,
                                config_delay,
                                config_loop
                            );
                        }
                    }
                }

                if(config_init){

                    this.resync = false;
                }

                if(!this.exec){

                    this.exec = requestAnimationFrame(this.render)
                }
            }

            return this;
        }

        /**
         * @param {Array<(Node|null)>|Node|NodeList|string|null} obj
         * @param {Object} styles
         * @param {Object} config
         */

        function transition(obj, styles, config){

            if(obj && styles){

                /* Create Empty Config Fallback */

                config || (config = create_object());

                if(is_string(obj)){

                    obj = document.querySelectorAll(/** @type {string} */ (obj));
                }

                let obj_length = obj.length;

                if(!obj_length){

                    obj = [obj];
                    obj_length = 1;
                }

                const style_keys = Object.keys(styles);
                const style_length = style_keys.length;
                const config_duration = (config["duration"] || 400) + "ms";
                const config_ease = config["ease"] || "linear";
                const config_callback = config["callback"] || false;
                // TODO:
                //const config_step = config["step"] || false;
                const config_delay = (config["delay"] || 0) + "ms";
                const config_force = config["force"];

                if(prefix_transform) {

                    for(let i = 0; i < style_length; i++){

                        if(style_keys[i] === "transform"){

                            style_keys[i] = prefix_transform;
                        }
                    }
                }

                const event = prefix_transition ? prefix_transition + "End" : "transitionend";

                /* Create Jobs */

                for(let i = 0; i < obj_length; i++){

                    const current_obj = obj[i];
                    const current_listener = current_obj.current_listener;

                    if(!config_callback || (config_callback !== current_listener)){

                        if(current_listener){

                            current_obj.removeEventListener(event, current_listener, false);
                            current_obj.current_listener = null;
                        }

                        if(config_callback){

                            current_obj.current_listener = config_callback;
                            current_obj.addEventListener(event, config_callback, false);
                        }
                    }

                    requestAnimationFrame(function(){

                        const transition_str = " " + config_duration + " " + config_ease + " " + config_delay;
                        const props_str = style_keys.join(transition_str + ",") + transition_str;
                        const current_style = current_obj._style || (current_obj._style = current_obj.style);

                        set_style(current_style, prefix_transition_js || "transition", props_str, config_force);

                        for(let k = 0; k < style_length; k++){

                            const key = style_keys[k];

                            set_style(current_style, key, styles[key], config_force);
                        }
                    });
                }
            }

            return this;
        }

        /**
         * @param {CSSStyleDeclaration} css
         * @param {string} key
         * @param {string} value
         * @param {boolean=} force
         */

        function set_style(css, key, value, force){

            css.setProperty(key, value, force ? "important" : void 0);
        }

        /**
         * @param {Array<(Node|null)>|Node|NodeList|string|null} obj
         * @param {Object} styles
         * @param {Object} config
         */

        function native(obj, styles, config){

            if(obj && styles){

                /* Create Empty Config Fallback */

                config || (config = create_object());

                /* Handle Delay */

                const style_keys = Object.keys(styles);

                if(is_string(obj)){

                    obj = document.querySelectorAll(/** @type {string} */ (obj));
                }

                let obj_length = obj.length;

                if(!obj_length){

                    obj = [obj];
                    obj_length = 1;
                }

                const config_duration = (config["duration"] || 400);
                const config_ease = config["ease"] || "linear";
                const config_callback = config["callback"];
                // TODO:
                //const config_step = config["step"];
                const config_cancel = config["cancel"];
                const config_delay = (config["delay"] || 0);
                const style_length = style_keys.length;

                /* Create Jobs */

                for(let i = 0; i < obj_length; i++){

                    const current_obj = obj[i];
                    const styles_arr = create_object();

                    for(let k = 0; k < style_length; k++){

                        const key = style_keys[k];

                        styles_arr[key] = [

                            get_style(current_obj, key),
                            styles[key]
                        ];
                    }

                    const anim = current_obj.animate(styles_arr, {

                        delay: config_delay,
                        duration: config_duration,
                        ease: config_ease
                    });

                    if(config_callback){

                        anim.onfinish = function(){

                            for(let k = 0; k < style_length; k++){

                                const key = style_keys[k];

                                set_style(current_obj._style, key, styles[key]);
                            }

                            config_callback.call(current_obj);
                        };
                    }

                    if(config_cancel){

                        anim.oncancel = function(){

                            config_cancel.call(current_obj);
                        };
                    }
                }
            }

            return this;
        }

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
