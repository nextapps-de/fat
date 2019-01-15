// noinspection ThisExpressionReferencesGlobalObjectJS
(function(window, Math){

	"use strict";

	var document = window.document;
	var w = document.documentElement.clientWidth || window.innerWidth || 0;
	var h = document.documentElement.clientHeight || window.innerHeight || 0;

	var MAX_W = w - 12;
	var MAX_H = h - 50 - 12;

	var EXECUTE = false;

	var container = document.getElementById('container');
	var domFPS = document.getElementById('fps');
	var domMedian = document.getElementById('median');
	var domMin = document.getElementById('min');
	var domMax = document.getElementById('max');
	var domStep = document.getElementById('step');
	var domCount = document.getElementById('ballcount');

	var animateBall = {};
	var transformBall = {};
	var colorBall = {};
	var fps_val = 0;
    var start_time = 0;

	// #############################################################################################################

	function getNextCoords(direction){

		return (

			direction ?

				[	Math.random() > 0.5 ? 0 : MAX_W,
					Math.random() * MAX_H | 0]
			:
				[	Math.random() * MAX_W | 0,
					Math.random() > 0.5 ? 0 : MAX_H ]
		)
	}

	function getNextColor(){

		var letters = "0123456789ABCDEF";
		var color = "#";

		for(var i = 0; i < 6; i++) {

			color += letters[(Math.random() * 16) >> 0];
		}

		return color;
	}

	// #############################################################################################################

	animateBall.FAT = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			Fat.animate(this, {

				left: coords[0],
				top: coords[1]
			},{
				duration: (Math.random() * 1000 + 1000) >> 0,
				callback: animateBall.FAT,
				step: function(){

					fps_val++;
				}
			});
		}
	};

	colorBall.FAT = function(){

		if(EXECUTE){

			Fat.animate(this, {

				backgroundColor: getNextColor()
			},{
				"duration": (Math.random() * 200 + 200) >> 0,
				"callback": colorBall.FAT,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	transformBall.FAT = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			Fat.transform(this, {

				translateX: coords[0],
				translateY: coords[1]
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": transformBall.FAT,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	// #############################################################################################################

	animateBall.FAT_CSS3 = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			Fat.transition(this, {

				left: coords[0] + "px",
				top: coords[1] + "px"
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": animateBall.FAT_CSS3,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	colorBall.FAT_CSS3 = function(){

		if(EXECUTE){

			Fat.transition(this, {

				backgroundColor: getNextColor()
			},{
				"duration": (Math.random() * 200 + 200) >> 0,
				"callback": colorBall.FAT_CSS3,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	transformBall.FAT_CSS3 = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			Fat.transition(this, {

				transform: "translate(" + coords[0] + "px," + coords[1] + "px)"
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": transformBall.FAT_CSS3,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	// #############################################################################################################

	animateBall.FAT_NATIVE = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			Fat.native(this, {

				left: coords[0] + "px",
				top: coords[1] + "px"
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": animateBall.FAT_NATIVE,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	transformBall.FAT_NATIVE = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			Fat.native(this, {

				transform: "translate(" + coords[0] + "px," + coords[1] + "px)"
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": transformBall.FAT_NATIVE,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	colorBall.FAT_NATIVE = function(){

		if(EXECUTE){

			Fat.native(this, {

				"backgroundColor": getNextColor()
			},{
				"duration": (Math.random() * 200 + 200) >> 0,
				"callback": colorBall.FAT_NATIVE,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	// #############################################################################################################

	//document.getElementById('container_canvas').style.width = w;
	//document.getElementById('container_canvas').style.height = h;

	/*
	var CanvasLayer = new FAT_canvas(document.getElementById('container_canvas'), viewportSize[0], viewportSize[1]);
	//var testImage = new Image(12, 12);
	//testImage.src = 'ball.png';

	animateBall.FAT_CANVAS = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			FAT_animate(this, {

				left: coords[0],
				top:  coords[1]

			}, (Math.random() * 1000 + 1000) | 0, 'easeLinear', animateBall.FAT_CANVAS, function(){ fps_val++; });
		}
	};
	*/

	// #############################################################################################################

	animateBall.JQUERY = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			jQuery(this).animate({

				left: coords[0],
				top:  coords[1]
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				progress: function(){ fps_val++; },
				easing: "linear",
				complete: function(){

					animateBall.JQUERY.call(_this);
				}
			});
		}
	};

	transformBall.JQUERY = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			if(!this._jquery_transform){

				this._jquery_transform = true;

				jQuery(this).animate({

					translateX: coords[0] + "px",
					translateY: coords[1] + "px"
				},{
					duration: 0
				});

				requestAnimationFrame(function(){

					transformBall.JQUERY.call(_this);
				});

				return;
			}

			jQuery(this).animate({

				translateX: coords[0],
				translateY: coords[1]
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: "linear",
				step: function(now, tween){

					$(this).css("transform", (tween.prop === "translateX" ? "translateX" : $(this).css("transform") + " translateY") + "(" + now + "px)");
				},
				progress: function(){ fps_val++; },
				complete: function(){

					transformBall.JQUERY.call(_this);
				}
			});
		}
	};

	colorBall.JQUERY = function(){

		if(EXECUTE){

			var _this = this;

			jQuery(this).animate({

				backgroundColor: getNextColor()
			},{
				duration: (Math.random() * 200 + 200) | 0,
				progress: function(){ fps_val++; },
				easing: "linear",
				complete: function(){

					colorBall.JQUERY.call(_this);
				}
			});
		}
	};

	// #############################################################################################################

	animateBall.VELOCITY = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			jQuery(this).velocity({

				left: [coords[0], 'linear'],
				top:  [coords[1], 'linear']
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				progress: function(){ fps_val++; },
				complete: function(){ animateBall.VELOCITY.call(_this) },
				easing: 'linear'
			});
		}
	};

	transformBall.VELOCITY = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			jQuery(this).velocity({

				translateX: [coords[0], 'linear'],
				translateY: [coords[1], 'linear']
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				progress: function(){ fps_val++; },
				complete: function(){ transformBall.VELOCITY.call(_this) },
				easing: 'linear'
			});
		}
	};

	colorBall.VELOCITY = function(){

		if(EXECUTE){

			var _this = this;

			jQuery(this).velocity({

				backgroundColor: [getNextColor(), 'linear']
			},{
				duration: (Math.random() * 200 + 200) | 0,
				progress: function(){ fps_val++; },
				complete: function(){ colorBall.VELOCITY.call(_this) },
				easing: 'linear'
			});
		}
	};

	// #############################################################################################################

	animateBall.GSAP = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			TweenLite.to(this, (Math.random() * 1000 + 1000) / 1000, {

				left: coords[0],
				top: coords[1],
				onComplete: function(){ animateBall.GSAP.call(_this); },
				onUpdate: function(){ fps_val++; },
				ease: Linear.easeNone
			});
		}
	};

	transformBall.GSAP = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			TweenLite.to(this, (Math.random() * 1000 + 1000) / 1000, {

				x: coords[0],
				y: coords[1],
				onComplete: function(){ transformBall.GSAP.call(_this); },
				onUpdate: function(){ fps_val++; },
				ease: Linear.easeNone
			});
		}
	};

	colorBall.GSAP = function(){

		if(EXECUTE){

			var _this = this;

			TweenLite.to(this, (Math.random() * 200 + 200) / 1000, {

				backgroundColor: getNextColor(),
				onComplete: function(){ colorBall.GSAP.call(_this); },
				onUpdate: function(){ fps_val++; },
				ease: Linear.easeNone
			});
		}
	};

	// #############################################################################################################

	animateBall.ZEPTO = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			Zepto(this).animate({

				left: coords[0],
				top:  coords[1]
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: "linear",
				complete: function(){

					animateBall.ZEPTO.call(_this);
				}
			});
		}
	};

	colorBall.ZEPTO = function(){

		if(EXECUTE){

			var _this = this;

			Zepto(this).animate({

				backgroundColor: getNextColor()
			},{
				duration: (Math.random() * 200 + 200) | 0,
				easing: "linear",
				complete: function(){

					colorBall.ZEPTO.call(_this);
				}
			});
		}
	};

	transformBall.ZEPTO = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			Zepto(this).animate({

				translate: coords[0] + "px," + coords[1] + "px"
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: "linear",
				complete: function(){

					transformBall.ZEPTO.call(_this);
				}
			});
		}
	};

	// #############################################################################################################

	animateBall.ANIMEJS = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			anime({

				targets: this,
				left: coords[0],
				top:  coords[1],
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: "linear",
				complete: function(){ animateBall.ANIMEJS.call(_this); },
				update: function(){ fps_val++; }
			});
		}
	};

	transformBall.ANIMEJS = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			if(!this._animejs_transform){

				this._animejs_transform = true;

				anime({

					targets: this,
					translateX: coords[0] + "px",
					translateY:  coords[1] + "px",
					duration: 0
				});

				requestAnimationFrame(function(){

					transformBall.ANIMEJS.call(_this);
				});

				return;
			}

			anime({

				targets: this,
				translateX: coords[0] + "px",
				translateY:  coords[1] + "px",
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: "linear",
				complete: function(){ transformBall.ANIMEJS.call(_this); },
				update: function(){ fps_val++; }
			});
		}
	};

	colorBall.ANIMEJS = function(){

		if(EXECUTE){

			var _this = this;

			anime({

				targets: this,
				backgroundColor: getNextColor(),
				duration: (Math.random() * 200 + 200) | 0,
				easing: "linear",
				complete: function(){ colorBall.ANIMEJS.call(_this); },
				update: function(){ fps_val++; }
			});
		}
	};

	// #############################################################################################################

	animateBall.ANIM = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			anim(this, {

				left: coords[0],
				top: coords[1]

			}, Math.random() + 1, "lin").anim(function(){

				animateBall.ANIMEJS.call(_this);
			});
		}
	};

	colorBall.ANIM = function(){

		if(EXECUTE){

			var _this = this;

			anim(this, {

				backgroundColor: getNextColor()

			}, (Math.random() + 1) / 5, "lin").anim(function(){

				colorBall.ANIM.call(_this);
			});
		}
	};

	// #############################################################################################################

	animateBall.BA = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			if(typeof this._x === "undefined"){

				this._x = this.style.left;
				this._y = this.style.top;
			}

			bajs.a(this, {

				"curve": "linear",
				"duration": ((Math.random() * 1000 + 1000) | 0) + "ms",
				"0%": {
					left: this._x,
					top: this._y
				},
				"100%": {
					left: this._x = coords[0] + "px",
					top: this._y = coords[1] + "px"
				}

			}, animateBall.BA);
		}
	};

	transformBall.BA = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			if(!this._bajs_transform){

				this._bajs_transform = true;
				this._x = coords[0];
				this._y = coords[1];

				requestAnimationFrame(function(){

					transformBall.BA.call(_this);
				});

				return;
			}

			bajs.a(this, {

				"curve": "linear",
				"duration": ((Math.random() * 1000 + 1000) | 0) + "ms",
				"0%": {
					transform: "translateX(" + this._x + "px) translateY(" + this._y + "px)"
				},
				"100%": {
					transform: "translateX(" + (this._x = coords[0]) + "px) translateY(" + (this._y = coords[1]) + "px)"
				}

			}, transformBall.BA);
		}
	};

	colorBall.BA = function(){

		if(EXECUTE){

			if(!this._bajs_color){

				this._bajs_color = true;
				this._color = getNextColor();
			}

			bajs.a(this, {

				"curve": "linear",
				"duration": ((Math.random() * 200 + 200) | 0) + "ms",
				"0%": {
					"background-color": this._color
				},
				"100%": {
					"background-color": this._color = getNextColor()
				}

			}, colorBall.BA);
		}
	};

	// #############################################################################################################

	function ease_linear_fps(t, b, c, d){

		fps_val+=0.5;

		return c * t / d + b;
	}

	animateBall.TINYANIMATE = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			if(typeof this._x === "undefined"){

				this._x = parseInt(this.style.left, 10);
				this._y = parseInt(this.style.top, 10);
			}

			var from_x = this._x;
			var from_y = this._y;

			this._x = coords[0];
			this._y = coords[1];

			var duration = ((Math.random() * 1000 + 1000) | 0);

			TinyAnimate.animateCSS(this, "left", "px", from_x, this._x, duration, "linear");
			TinyAnimate.animateCSS(this, "top", "px", from_y, this._y, duration, ease_linear_fps, function(){

				animateBall.TINYANIMATE.call(_this);
			});
		}
	};

	// #############################################################################################################

	/*
	animateBall.DOM = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);

			$dom.animate(this, {

				left: coords[0] + "px",
				top:  coords[1] + "px"

			}, ((Math.random() * 1000 + 1000) | 0), function(isComplete, elm){

				animateBall.DOM.call(elm);
			});
		}
	};
	*/

	// #############################################################################################################

	animateBall.MORPHEUS = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			morpheus(this, {

				left: coords[0] + "px",
				top:  coords[1] + "px",
				duration: ((Math.random() * 1000 + 1000) | 0),
				easing: function(t){

					fps_val++;
					return t;
				},
				complete: function(){

					animateBall.MORPHEUS.call(_this);
				}
			});
		}
	};

	transformBall.MORPHEUS = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			morpheus(this, {

				transform: "translate(" + (coords[0]) + "px," + (coords[1]) + "px)",
				duration: ((Math.random() * 1000 + 1000) | 0),
				easing: function(t){

					fps_val++;
					return t;
				},
				complete: function(){

					transformBall.MORPHEUS.call(_this);
				}
			});
		}
	};

	colorBall.MORPHEUS = function(){

		if(EXECUTE){

			var _this = this;

			morpheus(this, {

				backgroundColor: getNextColor(),
				duration: ((Math.random() * 200 + 200) | 0),
				easing: function(t){

					fps_val++;
					return t;
				},
				complete: function(){

					colorBall.MORPHEUS.call(_this);
				}
			});
		}
	};

	// #############################################################################################################

	/*
	animateBall.JANIS = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			Janis(this).chain().animate({

				"left": coords[0] + "px",
				"top":  coords[1] + "px",
				"duration": ((Math.random() * 1000 + 1000) | 0),
				"easing": "linear",
				"callback": function(){

					animateBall.JANIS.call(_this);
				}

			}).execute();
		}
	};
	*/

	/*
	var manager;
	var anim_stack = {};

	animateBall.JSANIM = function(){

		if(EXECUTE){

			manager || (manager = new jsAnimManager(40));

			var _this = this;
			var id = _this.id;

			var anim;

			if(anim_stack[id]){

				anim = anim_stack[id];
			}
			else{

				manager.registerPosition(_this);
				_this.setPosition(parseFloat(_this.style.left, 10), parseFloat(_this.style.top, 10));
				anim = anim_stack[id] ||(anim_stack[id] = manager.createAnimObject(_this));
			}

			var coords = getNextCoords(_this.direction = !_this.direction);

			anim.add({

				'property': Prop.position,
				'to': new Pos(coords[0]-MAX_W/2|0, coords[1]),
				'duration': ((Math.random() * 1000 + 1000)) | 0,
				'ease': {transform:function(t){fps_val++;return t}},//jsAnimEase.linear,
				'onLoop': function(){ fps_val++; },
				'onComplete': function(){ animateBall.JSANIM.call(_this); }
			});
		}
	};
	*/

	/*
	animateBall.JSANIM2 = function(){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);
			var duration = ((Math.random() * 1000 + 1000)) | 0;

			animate(this, "left", coords[0], duration, "linear");
			animate(this, "top", coords[1], duration, "linear", function(){ animateBall.JSANIM2.call(_this); });
		}
	};
	*/

	// #############################################################################################################
	/*
	animateBall.TWEENJS = function(){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);

			createjs.Tween.get(_this).to({left:coords[0], top:coords[1]}, (Math.random() * 1000 + 1000) | 0).call(function(){
				animateBall.TWEENJS.call(_this);
			});
		}
	};
	*/

	// #############################################################################################################

	//dojo.require("dojo/_base/fx");
	//dojo.require("dojo.fx.easing");

	animateBall.DOJO = function(){

		if(EXECUTE){

			var _this = this;
			var coords = getNextCoords(_this.direction = !_this.direction);

			dojo.animateProperty({

				node: _this,
				properties: {
					left: coords[0],
					top: coords[1]
				},
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: function(n){ fps_val++; return n; },
				onEnd: function(){ animateBall.DOJO.call(_this); }

			}).play();
		}
	};

	colorBall.DOJO = function(){

		if(EXECUTE){

			var _this = this;

			dojo.animateProperty({

				node: _this,
				properties: {
					backgroundColor: getNextColor()
				},
				duration: (Math.random() * 200 + 200) | 0,
				easing: function(n){ fps_val++; return n; },
				onEnd: function(){ colorBall.DOJO.call(_this); }

			}).play();
		}
	};

	// #############################################################################################################

	animateBall.YUI = function(Y){

		if(EXECUTE){

			var _this = this;
			var coords = getNextCoords(_this.direction = !_this.direction);

			var anim = new Y.Anim({

				node: _this,
				to: {
					xy: [
						coords[0],
						coords[1]
					]
				},
				duration: ((Math.random() * 1000 + 1000) | 0) / 1000,
				easing: function(e,t,n,r){fps_val++; return n*e/r+t}
			});

			anim.on("end", function(){ animateBall.YUI.call(_this, Y); });
			anim.run();
		}
	};

	colorBall.YUI = function(Y){

		if(EXECUTE){

			var _this = this;

			var anim = new Y.Anim({

				node: _this,
				to: {
					backgroundColor: getNextColor()
				},
				duration: ((Math.random() * 200 + 200) | 0) / 1000,
				easing: function(e,t,n,r){fps_val++; return n*e/r+t}
			});

			anim.on("end", function(){ colorBall.YUI.call(_this, Y); });
			anim.run();
		}
	};

	// #############################################################################################################

	animateBall.MOOTOOLS = function(){

		if(EXECUTE){

			var _this = this;
			var coords = getNextCoords(_this.direction = !_this.direction);

			var myFx = new Fx.Morph(_this, {

				duration: (Math.random() * 1000 + 1000) | 0,
				transition: function(t){fps_val++; return t},
				onComplete: function(){ animateBall.MOOTOOLS.call(_this); }
			});

			myFx.start({
				'left': coords[0],
				'top': coords[1]
			});
		}
	};

	colorBall.MOOTOOLS = function(){

		if(EXECUTE){

			var _this = this;

			var myFx = new Fx.Morph(_this, {

				duration: (Math.random() * 200 + 200) | 0,
				transition: function(t){fps_val++; return t},
				onComplete: function(){ colorBall.MOOTOOLS.call(_this); }
			});

			myFx.start({

				backgroundColor: getNextColor()
			});
		}
	};

	// #############################################################################################################

	createjs.CSSPlugin.install();
	createjs.ColorPlugin.install();
	createjs.Ticker.timingMode = createjs.Ticker.RAF;

	animateBall.TWEENJS = function(){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);

			createjs.Tween.get(this, {onChange: (function(){fps_val++})}).to({

				'left': coords[0],
				'top': coords[1]

			}, (Math.random() * 1000 + 1000) | 0, createjs.Ease.linear).call(function(){ animateBall.TWEENJS.call(_this); });
		}
	};

	transformBall.TWEENJS = function(){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);

			createjs.Tween.get(this, {onChange: (function(){fps_val++})}).to({

				transform: "translate(" + (coords[0]) + "px," + (coords[1]) + "px)"

			}, (Math.random() * 1000 + 1000) | 0, createjs.Ease.linear).call(function(){ transformBall.TWEENJS.call(_this); });
		}
	};

	colorBall.TWEENJS = function(){

		if(EXECUTE){

			var _this = this;

			createjs.Tween.get(this, {onChange: (function(){fps_val++})}).to({

				backgroundColor: getNextColor()

			}, (Math.random() * 200 + 200) | 0, createjs.Ease.linear).call(function(){ colorBall.TWEENJS.call(_this); });
		}
	};

	// #############################################################################################################

	animateBall.JUSTANIMATE = function(){

		if(EXECUTE){

			var _this = this;
			var coords = getNextCoords(_this.direction = !_this.direction);

			just.animate({

				targets: _this,
				duration: (Math.random() * 1000 + 1000) | 0,
				web: {
					'left': coords[0],
					'top': coords[1]
				},
				easing:"linear"

			}).on("finish", function() {

				animateBall.JUSTANIMATE.call(_this);

			}).on("update", function() {

				fps_val++;

			}).play();
		}
	};

	transformBall.JUSTANIMATE = function(){

		if(EXECUTE){

			var _this = this;
			var coords = getNextCoords(_this.direction = !_this.direction);

			just.animate({

				targets: _this,
				duration: (Math.random() * 1000 + 1000) | 0,
				web: {
					transform: 'translate(' + coords[0] + 'px,' + coords[1] + 'px)'
				},
				easing:"linear"

			}).on("finish", function() {

				transformBall.JUSTANIMATE.call(_this);

			}).on("update", function() {

				fps_val++;

			}).play();
		}
	};

	colorBall.JUSTANIMATE = function(){

		if(EXECUTE){

			var _this = this;

			just.animate({

				targets: _this,
				duration: (Math.random() * 200 + 200) | 0,
				web: {
					backgroundColor: getNextColor()
				},
				easing:"linear"

			}).on("finish", function() {

				colorBall.JUSTANIMATE.call(_this);

			}).on("update", function() {

				fps_val++;

			}).play();
		}
	};

	// #############################################################################################################

	animateBall.WEBANIMATION = function(){

		if(EXECUTE){

			var _this = this;
			var coords = getNextCoords(_this.direction = !_this.direction);

			if(!this._x){

				this._x = coords[0] + "px";
				this._y = coords[1] + "px";

				coords = getNextCoords(_this.direction = !_this.direction);
			}

			var anim = _this.animate({

				"left": [this._x, this._x = coords[0] + "px"],
				"top": [this._y, this._y = coords[1] + "px"]
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: "linear"
			});

			anim.onchange = function() {

				fps_val++;
			};

			anim.onfinish = function() {

				animateBall.WEBANIMATION.call(_this);
			};
		}
	};

	transformBall.WEBANIMATION = function(){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);

			if(!this._x){

				this._x = coords[0];
				this._y = coords[1];

				coords = getNextCoords(_this.direction = !_this.direction);
			}

			var anim = _this.animate({

				transform: ['translate(' + (this._x) + 'px,' + (this._y) + 'px)', 'translate(' + (this._x = coords[0]) + 'px,' + (this._y = coords[1]) + 'px)']
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: "linear"
			});

			anim.onchange = function() {

				fps_val++;
			};

			anim.onfinish = function() {

				transformBall.WEBANIMATION.call(_this);
			};
		}
	};

	colorBall.WEBANIMATION = function(){

		if(EXECUTE){

			var _this = this;

			if(!this._c){

				this._c = getNextColor();
			}

			var anim = _this.animate({

				"backgroundColor": [this._c, this._c = getNextColor()]
			},{
				duration: (Math.random() * 200 + 200) | 0,
				easing: "linear"
			});

			anim.onchange = function() {

				fps_val++;
			};

			anim.onfinish = function() {

				colorBall.WEBANIMATION.call(_this);
			};
		}
	};

	// #############################################################################################################

	//qx.bom.element.AnimationJs.__getNextValue = function (bC,bB,bz,x){fps_val++; var bA=parseFloat(bC)-parseFloat(bB);return (parseFloat(bB)+bA*qx.bom.AnimationFrame.calculateTiming(bz,x))+this.__getUnit(bC);};

	//console.log(qx.bom.element.AnimationJs);

	// animateBall.QOOXDOO = function(_left, _top){
	//
	// 	if(EXECUTE){
	//
	// 		var _this = this;
	//
	// 		var coords = getNextCoords(_this.direction = !_this.direction);
	// 		/*
	// 		var test = q(_this).animate({
	// 			'duration': (Math.random() * 1000 + 1000) | 0,
	// 			'timing': 'linear',
	// 			//'keep': 100,
	// 			'keyFrames': {
	// 				100: { left: coords[0]+'px', top:  coords[1]+'px' }
	// 			},
	// 			'repeat': 1,
	// 			//'alternate': false,
	// 			'delay': 0,
	// 			'onEnd': function(){ animateBall.QOOXDOO.call(_this); }
	//
	// 		});
	// 		*/
	// 		var animation = {
	//
	// 			duration: (Math.random() * 1000 + 1000) | 0,
	// 			keyFrames : {
	// 				0: { left: _left || _this.style.left, top: _top || _this.style.top },
	// 				100: { left: coords[0]+'px', top:  coords[1]+'px' }
	// 			},
	// 			timing: 'linear'
	// 		};
	//
	// 		//var anime = qx.bom.element.AnimationJs.animate(_this, animation);
	// 		var anime = qx.bom.element.Animation.animate(_this, animation);
	//
	// 		anime.addListener('end', function() {
	//
	// 			animateBall.QOOXDOO.call(_this, coords[0]+'px', coords[1]+'px');
	// 		});
	//
	// 		/*
	// 		anime.addListener('iteration', function() {
	//
	// 			fps_val++;
	// 		});
	//
	// 		anime.on('update', function() {
	//
	// 			fps_val++;
	// 		});
	//
	// 		anime.iteration = function() {
	//
	// 			fps_val++;
	// 		};
	// 		*/
	// 	}
	// };

	// #############################################################################################################

	/*
	animateBall.ANIMATOR = function(){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);

			new Frame({
				'left': coords[0],
				'top': coords[1]
			},{
				duration: (Math.random() * 1000 + 1000) | 0,
				interval: 0,
				transition: function(x){ fps_val++; return x; },
				onComplete: function(){ animateBall.ANIMATOR.call(_this); }
			});
		}
	};
	*/

	// #############################################################################################################

	var balls;
	var fps_timer;
    var test_timer;

	var frames;
	var arr_med;
	var lastUpdate;
	var nextUpdate;
	var curlib;
	var curtest;
	var checkmask;

	var Y;

	YUI().use("anim", function(_Y) {

		Y = _Y;
	});

	function startTest(lib, test){

		if((EXECUTE = !EXECUTE)){

			document.getElementById('btn_start').innerHTML = 'Stop';
			document.getElementsByTagName('table')[0].style.opacity = 0.2;

			if(test_timer){

                test_timer = clearTimeout(test_timer);
			}

            test_timer = setTimeout(function(){

				var i, ball_max = parseInt(domCount.value);

				var curcheckmask = document.getElementById('checkmask').checked;

				domCount.disabled = 'disabled';

				if(!balls || (ball_max !== balls.length) || (curlib !== lib) || (curtest !== test) || (checkmask !== curcheckmask)) {

					if(lib === 'FAT_CANVAS') createBallsCanvas(ball_max, test);
					else createBalls(ball_max, test);
				}

				frames      	= 0;
				arr_med     	= [];
				lastUpdate		= 0;
				nextUpdate  	= 0;
				curlib			= lib;
				curtest			= test;
				fps_val			= 0;

				domFPS.value    = '-';
				domMedian.value = '-';
				domMin.value    = '-';
				domMax.value    = '-';

				start_time = 0;
                lastUpdate = 0;

				//anim_stack 		= {}; // JSANIM

				var lib_ref;

				if(lib === 'YUI'){

					lib_ref = Y;
				}

				for(i = 0; i < ball_max; i++) {

					if(balls[i]) {

						(test === "animate" ?

							animateBall
						:
							test === "transform" ?

								transformBall
							:
								colorBall

						)[lib].call(balls[i], lib_ref);
					}
				}

				checkmask = curcheckmask;

				fps_timer = requestAnimationFrame(updateFPS);
			});
		}
		else {

            if(test_timer) test_timer = clearTimeout(test_timer);
            if(fps_timer) fps_timer = cancelAnimationFrame(fps_timer);

			domCount.disabled = '';

			document.getElementById('btn_start').innerHTML = 'Start';

            test_timer = setTimeout(function(){

				document.getElementsByTagName('table')[0].style.opacity = 1;

			}, 1500);
		}
	};

	function createBalls(ball_max, test){

		balls = new Array(ball_max);

		var fragment = document.createDocumentFragment();
		var curcheckmask = document.getElementById('checkmask').checked;

		for(var i = 0; i < ball_max; i++) {

			var ball = document.createElement("span");
			var color = (Math.random() * 256 | 0) + ", " + (Math.random() * 256 | 0) + ", " + (Math.random() * 256 | 0);

			ball.className = "ball";
			ball.id = "ball_" + i;

			if(test === "color"){

				ball.style.left = (Math.random() * MAX_W) + "px";
				ball.style.top = (Math.random() * MAX_H) + "px";
			}
			else{

				var direction = Math.random() > 0.5;
				var coords = getNextCoords(direction);

				if(test === "transform"){

					ball.style.transform = "translate(" + coords[0] + "px," + coords[1] + "px)";
					ball.direction = direction;
				}
				else{

					ball.style.left = coords[0] + "px";
					ball.style.top = coords[1] + "px";
					ball.direction = direction;
				}
			}

			if(curcheckmask){

				if(i > 0) {

					ball.style.backgroundColor = "rgba(" + color + ", 0.2)";
				}
				else {

					ball.style.backgroundColor = '#fff';
				}
			}
			else {

				ball.style.backgroundColor = "rgb(" + color + ")";
			}

			fragment.appendChild(balls[i] = ball);
		}

		while(container.firstChild) container.removeChild(container.firstChild);
		container.appendChild(fragment);
	}

	function createBallsCanvas(ball_max){

		//var centerX = (MAX_W / 2 - 35 | 0) + "px";
		//var centerY = (MAX_H / 2 - 35 | 0) + "px";

		//jQuery(container).empty();

		balls = new Array(ball_max);

		CanvasLayer.empty();

		var curcheckmask = document.getElementById('checkmask').checked;

		for(var i = 0; i < ball_max; i++) {

			var color;

			if(!curcheckmask) {

				color = '#' + (Math.random() * 256 | 0).toString(16) + (Math.random() * 256 | 0).toString(16) + (Math.random() * 256 | 0).toString(16);
			}
			else if(i > 0){

				color = 'rgba(' + (Math.random() * 256 | 0) + ',' + (Math.random() * 256 | 0) + ',' + (Math.random() * 256 | 0) + ', 0.2)';
			}
			else {

				color = '#fff';
			}

			var direction = Math.random() > 0.5;
			var coords = getNextCoords(direction);

			var ball = FAT_circle(coords[0], coords[1], 6, color);

			//ball.style.opacity = (Math.random() * 100 | 0) / 100;
			//ball.style.boxShadow = "0px 0px 3px 0px " + color;
			ball.direction = direction;
			ball.index = i;


			//observer.observe(ball, { attributes : true, childList: true, characterData: true});

			//fragment.appendChild(balls[i] = ball);
			CanvasLayer.add(balls[i] = ball);
		}

		//window.requestAnimationFrame(function(){

			while(container.firstChild) container.removeChild(container.firstChild);

			//CanvasLayer.canvas.style.display = 'block';
			//container.appendChild(fragment);
		//});
	};

	function median(values) {

		values.sort(/*median_sorter*/);

		var len = arr_med.length;
		var half = (len / 2) >> 0;

		return (

			len % 2 ?

				values[half]
			:
				(values[half] + values[half - 1]) / 2
		)
	}

	function updateFPS(time) {

		if(EXECUTE){

		    fps_timer = requestAnimationFrame(updateFPS);
        }

		frames++;

        start_time || (start_time = time);
        lastUpdate || (lastUpdate = time);

		var elapsed = time - lastUpdate;

		if(elapsed > 1000) {

			var val = ((frames * (1000 / elapsed) * 10 + 0.5) >> 0) / 10;

			arr_med[arr_med.length] = val;

			var median_val = median(arr_med);

			domFPS.value = val;
			domMedian.value = median_val;
			domMin.value = arr_med[0];
			domMax.value = arr_med[arr_med.length-1];
			domStep.value = ((fps_val * (1000 / elapsed)) + 0.5) >> 0;

			lastUpdate = time;
			nextUpdate = frames;
			frames = 0;
			fps_val = 0;
		}
	}

	window.onresize = function(){

		w = document.documentElement.clientWidth || window.innerWidth || 0;
		h = document.documentElement.clientHeight || window.innerHeight || 0;

		MAX_W = w - 12;
		MAX_H = h - 50 - 12;
	};


	document.getElementById("btn_start").onclick = function(event){

		event.preventDefault();
		event.stopImmediatePropagation();

		var anitools = document.getElementById("anitools");
		var testcase = document.getElementById("testcase");

		startTest(

			anitools.options[anitools.selectedIndex].value,
			testcase.options[testcase.selectedIndex].value
		);
	};

	if(navigator.userAgent.test(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/)){

		domCount.selectedIndex = 7;
	}
})(this, Math);
