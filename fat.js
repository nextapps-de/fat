;/**!
 * @preserve FAT v0.1.0
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Released under the Apache 2.0 Licence
 * https://github.com/nextapps-de/fat
 */

/** @define {boolean} */ const SUPPORT_DEBUG = true;
/** @define {boolean} */ const SUPPORT_COLOR = true;
/** @define {boolean} */ const SUPPORT_CONTROL = true;
/** @define {boolean} */ const SUPPORT_TRANSFORM = true;
/** @define {string} */  const SUPPORT_ENGINE = "all";
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
        const vendor = (SUPPORT_TRANSFORM || SUPPORT_TRANSITION) && (function(){

            const styles = getComputedStyle(document.body, null);

            if(!is_undefined(styles["transform"])){

                return "";
            }
            else{

                const vendors = ["ms", "moz", "webkit", "o"];

                for(let i = 0, tmp; i < vendors.length; i++) {

                    if(!is_undefined(styles[(tmp = vendors[i]) + "Transform"])){

                        return tmp;
                    }
                }
            }

        })();
        const prefix_transform = SUPPORT_TRANSFORM && vendor && (vendor + "Transform");
        const prefix_transform_js = SUPPORT_TRANSFORM && vendor && ("-" + prefix_transform.replace("T", "-t"));
        const prefix_transition = SUPPORT_TRANSITION && vendor && (vendor + "Transition");
        const prefix_transition_js = SUPPORT_TRANSITION && vendor && ("-" + prefix_transition.replace("T", "-t"));

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
         * @constructor
         */

        function Job(

            obj,
            style,
            css,
            from,
            to,
            metric,
            force,
            duration,
            ease_str,
            res,
            callback,
            step,
            delay,
            transform,
            color
        ){
            this.obj = obj;
            this.style = style;
            this.css = css;
            this.from = from;
            this.to = to;
            this.current = from;
            this.metric = metric;
            this.metric_type = (metric.length === 0 ? 0 : (metric === "%" ? 1 : 2));
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

            if(SUPPORT_CONTROL){

                this.dir = true;
                this.pause = false;
            }

            if(SUPPORT_TRANSFORM){

                this.transform = transform;
            }

            if(SUPPORT_COLOR){

                this.color = color;

                if(color){

                    this.metric_type = 2;
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

                const style = this.style;
                const stamp = Math.max((time - (this.start || (this.start = (time /*+ this.delay*/))) ), 0);
                const complete = stamp >= this.duration;

                let current_value;

                if(complete){

                    current_value = !SUPPORT_CONTROL || direction ? this.to : this.from;
                }
                else{

                    current_value = this.diff * this.ease[(this.res * stamp + 0.5) >> 0] / prefetch_resolution;

                    if(!SUPPORT_CONTROL || direction){

                        current_value = this.from + current_value;
                    }
                    else{

                        current_value = this.to - current_value;
                    }

                    const metric_type = this.metric_type;

                    current_value = (

                        metric_type < 2 /*metric_type === 0*/ ? // --> 0.0 - 1.0

                            ((current_value * 1000 + 0.5) >> 0) / 1000
                        :

                        // metric_type === 1 ? // --> %, deg, em
                        //
                        //     ((current_value * 1000 + 0.5) >> 0) / 1000
                        // :

                            (current_value + 0.5) >> 0
                    );
                }

                if(this.current !== current_value){

                    this.current = current_value;

                    if(SUPPORT_TRANSFORM && this.transform){

                        this.obj._transform[style] = current_value + this.metric;

                        if(style === this.transform){

                            this.transform_job();
                        }
                    }
                    else if(SUPPORT_COLOR && this.color){

                        let style_group = style;
                        let color = color_keys[style];

                        if(color === 1){

                            style_group = "color";
                        }
                        else if(color === 2){

                            style_group = "backgroundColor";
                        }
                        else if(color === 3){

                            style_group = "borderColor";
                        }

                        this.obj["_" + style_group][style] = current_value;

                        if(style === this.color){

                            this.color_job(style_group);
                        }
                    }
                    else{

                        this.render_job(style, current_value);
                    }
                }

                if(complete){

                    /* CHECK AGAINST SELF LOOPING */

                    this.start = -1;

                    /* CALLBACK HANDLER */

                    if(this.callback){

                        this.callback.call(this.obj);
                    }
                }
            };
        }

        if(SUPPORT_ANIMATE){

            Job.prototype.render_job = function(style, value){

                if(style === "scrollTop"){

                    this.obj.scrollTop = value;
                }
                else{

                    this.css.setProperty(style, value + this.metric, this.force ? "important" : "");
                }

                if(this.step){

                    this.step.call(this.obj, value);
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
                obj[suffix + "Alpha"] = index;
            }

            construct("color", 1);
            construct("backgroundColor", 2);
            construct("borderColor", 3);
            construct("borderLeftColor", 3);
            construct("borderTopColor", 3);
            construct("borderRightColor", 3);
            construct("borderBottomColor", 3);

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

        if(SUPPORT_TRANSFORM){

            Job.prototype.transform_job = function(){

                const transform = this.obj._transform;

                this.css.setProperty(prefix_transform_js || "transform", merge_transform(transform, "rotate") +
                                                                         merge_transform(transform, "scale") +
                                                                         merge_transform(transform, "skew") +
                                                                         merge_transform(transform, "translate"), this.force ? "important" : "");
                if(this.step){

                    this.step.call(this.obj, transform);
                }
            };
        }

        if(SUPPORT_COLOR){

            Job.prototype.color_job = function(color_group){

                const color = this.obj["_" + color_group];

                this.css.setProperty(color_group.replace("C", "-c"), merge_color(color, color_group), this.force ? "important" : "");

                if(this.step){

                    this.step.call(this.obj, color);
                }
            };
        }

        function parse_color(hex_or_rgba, key){

            let r, g, b, alpha = -1, tmp;

            if(hex_or_rgba[0] === "#"){

                if(hex_or_rgba.length === 4){

                    r = parseInt((tmp = hex_or_rgba[1]) + tmp, 16);
                    g = parseInt((tmp = hex_or_rgba[2]) + tmp, 16);
                    b = parseInt((tmp = hex_or_rgba[3]) + tmp, 16);
                }
                else{

                    r = parseInt(hex_or_rgba.substring(1, 3), 16);
                    g = parseInt(hex_or_rgba.substring(3, 5), 16);
                    b = parseInt(hex_or_rgba.substring(5, 7), 16);
                }
            }
            else{

                tmp = hex_or_rgba.indexOf("(");
                tmp = hex_or_rgba.substring(tmp + 1, hex_or_rgba.indexOf(")")).split(',');

                r = tmp[0];
                g = tmp[1];
                b = tmp[2];

                if(tmp.length > 3){

                    alpha = tmp[3];
                }
            }

            const obj = create_object();

            obj[key + "R"] = r;
            obj[key + "G"] = g;
            obj[key + "B"] = b;

            if(alpha !== -1){

                obj[key + "Alpha"] = alpha;
            }

            return obj;
        }

        /**
         * @constructor
         */

        function Fat(){

            if(SUPPORT_ANIMATE || SUPPORT_TRANSFORM){

                this.stack = [];
                this.render = render_frames.bind(this);
                this.exec = 0;
                this.resync = false;

                //TODO:
                //this.autoplay = true;

                if(SUPPORT_CONTROL){

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
            Fat.prototype.update = update;
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
            Fat.prototype.pause = function(){ this.plays = false; };
            /** @export */
            Fat.prototype.start = function(){ this.plays = true; };
            /** @export */
            Fat.prototype.speed = function(ratio){ this.ratio = ratio; };
            /** @export */
            Fat.prototype.reset = function(){};
            /** @export */
            Fat.prototype.finish = function(){};
            /** @export */
            Fat.prototype.seek = function(){};
            /** @export */
            Fat.prototype.stop = function(){};
            /** @export */
            Fat.prototype.reverse = function(_reverse){

                if(is_undefined(_reverse)){

                    this.direction = !this.direction;
                }
                else{

                    this.direction = !_reverse;
                }
            };
        }

        if(SUPPORT_ANIMATE || SUPPORT_TRANSFORM || SUPPORT_TRANSITION || SUPPORT_NATIVE){

            /** @export */
            Fat.prototype.create = function(){

                return new Fat();
            };
        }

        return new Fat();

        function update(obj, style, value){

            if(is_undefined(value)){

                const keys = Object.keys(style);
                let key;

                for(let i = 0; i < keys.length; i++){

                    key = keys[i];

                    this.update(obj, key, style[key]);
                }
            }
            else{

                const cur_job = obj["_fat_" + style];

                if(cur_job){

                    if(cur_job.current !== value){

                        cur_job.current = value;

                        const css = obj._style || (obj._style = obj.style);

                        css.setProperty(style, value + cur_job.metric, cur_job.force ? "important" : "");
                    }
                }
            }

            return this;
        }

        function destroy(){

            if(this.exec){

                cancelAnimationFrame(this.exec);

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

                    prefetch[ease] = ease_prefetch(ease)
                )
            );
        }

        /**
         * @const
         * @param {string=} ease
         * @return {Array<number>|Int32Array<number>}
         */

        function ease_prefetch(ease){

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

                arr[i] = (fn_ease(i, 0, 100, res) * prefetch_resolution) >> 0;
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

                            // TODO: may some other props stay animated, use counter
                            //current_job.obj._transform = null;
                            //current_job.obj._style = null;

                            /*
                                var observer = new MutationObserver(function(mutations) {
                                    mutations.forEach(function(mutationRecord) {
                                        console.log('style changed!');
                                    });
                                });

                                var target = document.getElementById('myId');
                                observer.observe(target, { attributes : true, attributeFilter : ['style'] });
                             */

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
         * @param {number|string|Function} duration
         * @param {string} ease_str
         * @param {Function} callback
         * @param {Function} step
         * @param {number} delay
         * @param {string} transform
         * @param {number} color
         * @param {boolean} force
         */

        function handle(obj, style, to, duration, ease_str, callback, step, delay, transform, color, force){

            const checkkey = "_fat_" + style;
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

                    cur_job.transform = transform;
                }

                if(SUPPORT_COLOR){

                    cur_job.color = color;
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

                )(obj, style);

                /** @type {CSSStyleDeclaration} */
                const css = obj._style;

                if(style_from === "auto") style_from = "0";
                from = parseFloat(style_from);

                let style_to = "" + to;
                to = parseFloat(to);

                let metric = style_to.substring(("" + to).length);

                if(!metric){

                    metric = style_from.substring(("" + from).length);
                }

                const job = (new Job(

                    obj,
                    style,
                    css,
                    from,
                    to,
                    metric,
                    force,
                    duration,
                    ease_str,
                    res,
                    callback,
                    step,
                    delay,
                    transform,
                    color
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

                    obj._style_comp || (obj._style_comp = getComputedStyle(obj, null))

                )[style];
            }

            return style_value;
        }

        function get_transform(obj, style){

            let style_prop = obj._transform;

            if(!style_prop){

                const style_value = get_style(obj, prefix_transform || "transform");
                const parts = style_value.split(' ');

                obj._transform = style_prop = create_object();

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

            return style_prop[style];
        }

        function get_color(obj, style){

            const color = color_keys[style];
            let style_group = style;

            if(color === 1){

                style_group = "color";
            }
            else if(color === 2){

                style_group = "backgroundColor";
            }
            else if(color === 3){

                style_group = "borderColor";
            }

            let key = "_" + style_group;
            let style_prop = obj[key];

            if(!style_prop){

                const style_value = get_style(obj, style_group);

                obj[key] = style_prop = parse_color(style_value, style_group);
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
         * @param {Object<string, string|number>} color
         * @param {string} prop
         * @returns {string}
         */

        function merge_color(color, prop){

            const r = color[prop + "R"] || 0;
            const g = color[prop + "G"] || 0;
            const b = color[prop + "B"] || 0;
            const alpha = color[prop + "Alpha"] || 0;

            if(r || g || b || alpha){

                if(alpha && (parseFloat(alpha) !== 255)){

                    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
                }
                else{

                    return "rgb(" + r + "," + g + "," + b + ")";
                }
            }

            return "";
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
         * @param {Object} styles
         * @param {Object} config
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

                const style_keys = Object.keys(styles);
                const config_duration = config["duration"] || 400;
                const config_ease = config["ease"] || "linear";
                const config_callback = config["callback"] || false;
                const config_step = config["step"] || false;
                const config_delay = config["delay"] || 0;
                const config_force = config["force"];
                const config_init = this.resync || config["init"];

                let style_length = style_keys.length;
                let init_transform;
                let init_color;
                let init_color_background;
                let init_color_border;

                /* Create Jobs */

                for(let k = style_length - 1; k >= 0; k--){

                    const first = (k === 0);
                    const key = style_keys[k];
                    const value = "" + styles[key];

                    let has_transform = (SUPPORT_TRANSFORM && transform_keys[key]) ? key : "";
                    let has_color = (SUPPORT_COLOR && color_keys[key]) ? key : "";

                    if(has_transform){

                        if(init_transform){

                            has_transform = "1";
                        }
                        else{

                            init_transform = true;
                        }
                    }

                    if(has_color){

                        if(init_color){

                            has_color = "1";
                        }
                        else{

                            init_color = true;
                        }
                    }

                    if(SUPPORT_COLOR && has_color && (color_keys[key] < 0)){

                        const color = parse_color(value, key);

                        let tmp, val;

                        style_keys[style_length++] = (tmp = key + "R");
                        styles[tmp] = color[tmp];

                        style_keys[style_length++] = (tmp = key + "G");
                        styles[tmp] = color[tmp];

                        style_keys[style_length++] = (tmp = key + "B");
                        styles[tmp] = color[tmp];

                        tmp = key + "Alpha";

                        if(!is_undefined(val = color[tmp])){

                            style_keys[style_length++] = tmp;
                            styles[tmp] = val;
                        }

                        init_color = false;
                        init_color_background = false;
                        init_color_border = false;

                        continue;
                    }

                    for(let i = 0; i < obj_length; i++){

                        const current_obj = obj[i];

                        if(config_init && (k === 0)){

                            current_obj._style_comp = null;

                            if(has_transform) {

                                current_obj._transform = null;
                            }

                            if(has_color) {

                                current_obj._color = null;
                                current_obj._backgroundColor = null;
                                current_obj._borderColor = null;
                            }
                        }

                        this.handle(

                            current_obj,
                            key,
                            value,
                            config_duration,
                            config_ease,
                            first && config_callback,
                            first && config_step,
                            config_delay,
                            has_transform,
                            has_color,
                            config_force
                        );
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

                const transition_str = " " + config_duration + " " + config_ease + " " + config_delay;
                const props_str = style_keys.join(transition_str + ",") + transition_str;
                const event = prefix_transition ? prefix_transition + "End" : "transitionend";

                /* Create Jobs */

                for(let i = 0; i < obj_length; i++){

                    const current_obj = obj[i];
                    const current_style = current_obj._style || (current_obj._style = current_obj.style);
                    const current_listener = current_obj.current_listener;

                    current_style.setProperty(prefix_transition_js || "transition", props_str, config_force ? "important" : "");

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

                        for(let k = 0; k < style_length; k++){

                            const key = style_keys[k];

                            current_style.setProperty(key, styles[key], config_force ? "important" : "");
                        }
                    });
                }
            }

            return this;
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

                                current_obj._style.setProperty(key, styles[key]);
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
        else if(typeof module !== "undefined"){

            /** @export */
            module.exports = factory;
        }
        // Global (window)
        else{

            root[name] = factory;
        }
    }

}).call(this);
