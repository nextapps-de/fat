window.onload = function(){

	"use strict";

	var window  = this;
	var document = window.document;
	var body = document.body;

	// #############################################################################################################

	var w = document.documentElement.clientWidth || window.innerWidth || 0;
	var h = document.documentElement.clientHeight || window.innerHeight || 0;

	var MAX_W = w - 12;
	var MAX_H = h - 50 - 12;

	var EXECUTE = false;

	var container   = document.getElementById('container');
	var domFPS 		= document.getElementById('fps');
	var domMedian 	= document.getElementById('median');
	var domMin 		= document.getElementById('min');
	var domMax 		= document.getElementById('max');
	var domStep		= document.getElementById('step');
	var domCount	= document.getElementById('ballcount');

	var MOVES 		= 0;
	var ASYNC		= window.setTimeout;

	const animateBall = {};
	var fps_val = 0;

	// #############################################################################################################

	var getNextCoords = function(direction){

		return (

			direction ?

				[	Math.random() > 0.5 ? 0 : MAX_W,
					Math.random() * MAX_H | 0]
			:
				[	Math.random() * MAX_W | 0,
					Math.random() > 0.5 ? 0 : MAX_H ]
		)
	};

	// #############################################################################################################

	animateBall.FAT = function(){

		if(EXECUTE){

			const coords = getNextCoords(this.direction = !this.direction);

			Fat.animate(this, {

				left: coords[0],
				top: coords[1]
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": animateBall.FAT,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	// #############################################################################################################

	animateBall.FAT_TRANS = function(){

		if(EXECUTE){

			const coords = getNextCoords(this.direction = !this.direction);

			Fat.transform(this, {

				translateX: coords[0],
				translateY: coords[1]
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": animateBall.FAT_TRANS,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	// #############################################################################################################

	animateBall.FAT_CSS3 = function(){

		if(EXECUTE){

			const coords = getNextCoords(this.direction = !this.direction);

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

	// #############################################################################################################

	animateBall.FAT_CSS3_TRANS = function(){

		if(EXECUTE){

			const coords = getNextCoords(this.direction = !this.direction);

			Fat.transition(this, {

				transform: "translateX(" + coords[0] + "px) translateY(" + coords[1] + "px)"
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": animateBall.FAT_CSS3_TRANS,
				"step": function(){

					fps_val++;
				}
			});
		}
	};

	// #############################################################################################################

	animateBall.FAT_NATIVE = function(){

		if(EXECUTE){

			const coords = getNextCoords(this.direction = !this.direction);

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

	// #############################################################################################################

	animateBall.FAT_NATIVE_TRANS = function(){

		if(EXECUTE){

			const coords = getNextCoords(this.direction = !this.direction);

			Fat.native(this, {

				transform: "translateX(" + coords[0] + "px) translateY(" + coords[1] + "px)"
			},{
				"duration": (Math.random() * 1000 + 1000) >> 0,
				"callback": animateBall.FAT_NATIVE_TRANS,
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

			jQuery(this).animate({

				left: [coords[0], 'linear'],
				top:  [coords[1], 'linear']

			}, {

				duration: (Math.random() * 1000 + 1000) | 0,
				step: function(){ fps_val++; },
				complete: animateBall.JQUERY

			});
		}
	};

	// #############################################################################################################

	animateBall.VELOCITY = function(){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);

			jQuery(this).velocity({

				left: [coords[0], 'linear'],
				top:  [coords[1], 'linear']

			}, {

				duration: (Math.random() * 1000 + 1000) | 0,
				progress: function(){ fps_val++; },
				complete: function(){ animateBall.VELOCITY.call(_this) },
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

	// #############################################################################################################

	animateBall.ZEPTO = function(){

		if(EXECUTE){

			var coords = getNextCoords(this.direction = !this.direction);
			var _this = this;

			Zepto(this).animate({

				left: coords[0],
				top:  coords[1]

			}, {

				duration: (Math.random() * 1000 + 1000) | 0,
				easing: "linear",
				complete: function(){ animateBall.ZEPTO.call(_this); } //animateBall.ZEPTO
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

	// #############################################################################################################

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
					top:  coords[1]
				},
				duration: (Math.random() * 1000 + 1000) | 0,
				easing: function(n){ fps_val++; return n; },
				onEnd: function(){ animateBall.DOJO.call(_this); }

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

	// #############################################################################################################

	createjs.CSSPlugin.install();
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

	// #############################################################################################################

	animateBall.WEBANIMATION = function(){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);

			var anim = _this.animate({

				'left': [_this.style.left, coords[0] + "px"],
				'top': [_this.style.top, coords[1] + "px"]
			},{

				duration: (Math.random() * 1000 + 1000) | 0,
				easing:"linear"

			});

			anim.onchange = function() {

				fps_val++;

			};

			anim.onfinish = function() {

				animateBall.WEBANIMATION.call(_this);
			};
		}
	};

	// #############################################################################################################

	//qx.bom.element.AnimationJs.__getNextValue = function (bC,bB,bz,x){fps_val++; var bA=parseFloat(bC)-parseFloat(bB);return (parseFloat(bB)+bA*qx.bom.AnimationFrame.calculateTiming(bz,x))+this.__getUnit(bC);};

	//console.log(qx.bom.element.AnimationJs);

	animateBall.QOOXDOO = function(_left, _top){

		if(EXECUTE){

			var _this = this;

			var coords = getNextCoords(_this.direction = !_this.direction);
			/*
			var test = q(_this).animate({
				'duration': (Math.random() * 1000 + 1000) | 0,
				'timing': 'linear',
				//'keep': 100,
				'keyFrames': {
					100: { left: coords[0]+'px', top:  coords[1]+'px' }
				},
				'repeat': 1,
				//'alternate': false,
				'delay': 0,
				'onEnd': function(){ animateBall.QOOXDOO.call(_this); }

			});
			*/
			var animation = {

				duration: (Math.random() * 1000 + 1000) | 0,
				keyFrames : {
					0: { left: _left || _this.style.left, top: _top || _this.style.top },
					100: { left: coords[0]+'px', top:  coords[1]+'px' }
				},
				timing: 'linear'
			};

			//var anime = qx.bom.element.AnimationJs.animate(_this, animation);
			var anime = qx.bom.element.Animation.animate(_this, animation);

			anime.addListener('end', function() {

				animateBall.QOOXDOO.call(_this, coords[0]+'px', coords[1]+'px');
			});

			/*
			anime.addListener('iteration', function() {

				fps_val++;
			});

			anime.on('update', function() {

				fps_val++;
			});

			anime.iteration = function() {

				fps_val++;
			};
			*/
		}
	};

	// #############################################################################################################

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

	// #############################################################################################################

	var balls;
	var fps_timer;

	var frames;
	var arr_med;
	var startTime;
	var lastUpdate;
	var nextUpdate;
	var curlib;
	var checkmask;

	var Y;

	YUI().use("anim", function(_Y) {

		Y = _Y;
	});

	function startTest(lib){

		if(EXECUTE = !EXECUTE){

			/*
		  (function() {
			  console.timeline();
			  console.profile();
			  setTimeout(function() {
				  console.timelineEnd();
				  console.profileEnd();
				  EXECUTE = false;
			  }, 2000);
			})();
			*/

			document.getElementById('btn_start').innerHTML = 'Stop';
			document.getElementsByTagName('table')[0].style.opacity = 0.2;

			if(fps_timer){

				window.clearTimeout(fps_timer);
			}

			window.setTimeout(function(){

				const now = Date.now();
				var i, ball_max = parseInt(domCount.value);

				var curcheckmask = document.getElementById('checkmask').checked;

				domCount.disabled = 'disabled';

				if(!balls || ball_max !== balls.length || curlib !== lib || checkmask !== curcheckmask) {

					if(lib === 'FAT_CANVAS') createBallsCanvas(ball_max);
					else if(lib === 'FAT_TRANS') createBallsTransform(ball_max);
					else if(lib === 'FAT_CSS3_TRANS') createBallsTransform(ball_max);
					else if(lib === 'FAT_NATIVE_TRANS') createBallsTransform(ball_max);
					else createBalls(ball_max);
				}

				frames      	= 0;
				arr_med     	= [];
				lastUpdate		= 0;
				nextUpdate  	= 0;
				curlib			= lib;
				fps_val			= 0;

				domFPS.value    = '-';
				domMedian.value = '-';
				domMin.value    = '-';
				domMax.value    = '-';

				start_time = 0;

				//anim_stack 		= {}; // JSANIM

				var lib_ref;

				if(lib === 'YUI'){

					lib_ref = Y;
				}

				for(i = 0; i < ball_max; i++) {

					if(balls[i]) {

						animateBall[lib].call(balls[i], lib_ref);
					}
				}

				checkmask = curcheckmask;
				startTime = lastUpdate = now;

				fps_timer = requestAnimationFrame(updateFPS);

				//window.setTimeout(startTest, 10000);

			}, 400);
		}
		else {

			window.cancelAnimationFrame(fps_timer);

			domCount.disabled = '';

			document.getElementById('btn_start').innerHTML = 'Start';

			fps_timer = window.setTimeout(function(){

				document.getElementsByTagName('table')[0].style.opacity = 1;

			}, 1500);
		}
	};

	function createBalls(ball_max){

		//var centerX = (MAX_W / 2 - 35 | 0) + "px";
		//var centerY = (MAX_H / 2 - 35 | 0) + "px";

		//jQuery(container).empty();

		balls = new Array(ball_max);

		var fragment = document.createDocumentFragment();
		var curcheckmask = document.getElementById('checkmask').checked;

		for(var i = 0; i < ball_max; i++) {

			var ball = document.createElement("span");
			var color = "rgb(" + (Math.random() * 255 | 0) + ", " + (Math.random() * 255 | 0) + ", " + (Math.random() * 255 | 0) + ")";
			var direction = Math.random() > 0.5;
			var coords = getNextCoords(direction);

			ball.className = "ball";
			ball.id = "ball_" + i;
			ball.style.left = coords[0] + "px";
			ball.style.top = coords[1] + "px";

			if(curcheckmask && i > 0) {

				ball.style.opacity = 0.2;
				ball.style.backgroundColor = color;
			}
			else if(curcheckmask){

				ball.style.backgroundColor = '#fff';
			}
			else{

				ball.style.backgroundColor = color;
			}
			//ball.style.opacity = (Math.random() * 100 | 0) / 100;
			//ball.style.boxShadow = "0px 0px 3px 0px " + color;
			ball.direction = direction;

			//observer.observe(ball, { attributes : true, childList: true, characterData: true});

			fragment.appendChild(balls[i] = ball);
		}

		//window.requestAnimationFrame(function(){

		/*
			CanvasLayer.canvas.style.display = 'none';
			CanvasLayer.empty();
			CanvasLayer.canvas.getContext('2d').clearRect(0, 0, CanvasLayer.width, CanvasLayer.height);
			*/

			while(container.firstChild) container.removeChild(container.firstChild);
			container.appendChild(fragment);
		//});
	};

	function createBallsTransform(ball_max){

		//var centerX = (MAX_W / 2 - 35 | 0) + "px";
		//var centerY = (MAX_H / 2 - 35 | 0) + "px";

		//jQuery(container).empty();

		balls = new Array(ball_max);

		var fragment = document.createDocumentFragment();
		var curcheckmask = document.getElementById('checkmask').checked;

		for(var i = 0; i < ball_max; i++) {

			var ball = document.createElement("span");
			var color = "rgb(" + (Math.random() * 255 | 0) + ", " + (Math.random() * 255 | 0) + ", " + (Math.random() * 255 | 0) + ")";
			var direction = Math.random() > 0.5;
			var coords = getNextCoords(direction);

			ball.className = "ball";
			ball.id = "ball_" + i;
			ball.style.transform = "translateX(" + coords[0] + "px) translateY(" + coords[1] + "px)";

			if(curcheckmask && i > 0) {

				ball.style.opacity = 0.2;
				ball.style.backgroundColor = color;
			}
			else if(curcheckmask){

				ball.style.backgroundColor = '#fff';
			}
			else{

				ball.style.backgroundColor = color;
			}
			//ball.style.opacity = (Math.random() * 100 | 0) / 100;
			//ball.style.boxShadow = "0px 0px 3px 0px " + color;
			ball.direction = direction;

			//observer.observe(ball, { attributes : true, childList: true, characterData: true});

			fragment.appendChild(balls[i] = ball);
		}

		//window.requestAnimationFrame(function(){

		/*
			CanvasLayer.canvas.style.display = 'none';
			CanvasLayer.empty();
			CanvasLayer.canvas.getContext('2d').clearRect(0, 0, CanvasLayer.width, CanvasLayer.height);
			*/

		while(container.firstChild) container.removeChild(container.firstChild);
		container.appendChild(fragment);
		//});
	};

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

				color = '#' + (Math.random() * 255 | 0).toString(16) + (Math.random() * 255 | 0).toString(16) + (Math.random() * 255 | 0).toString(16);
			}
			else if(i > 0){

				color = 'rgba(' + (Math.random() * 255 | 0) + ',' + (Math.random() * 255 | 0) + ',' + (Math.random() * 255 | 0) + ', 0.2)';
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
		var half = len / 2 | 0;

		return (

			len % 2 ?

				values[half]
			:
				(values[half - 1] + values[half]) / 2
		)
	}

	var start_time = 0;

	function updateFPS() {

		if(EXECUTE) fps_timer = requestAnimationFrame(updateFPS);

		frames++;

		const now = Date.now();
		var elapsed = now - lastUpdate;

		start_time || (start_time = now);

		if(elapsed > 1000) {

			var val = ((frames / elapsed * 10000) >> 0) / 10;

			arr_med[arr_med.length] = val;

			var median_val = median(arr_med);

			domFPS.value    = val;
			domMedian.value = median_val;
			domMin.value    = arr_med[0];
			domMax.value    = arr_med[arr_med.length-1];
			domStep.value   = (fps_val / (now - start_time) * 1000) >> 0;

			lastUpdate		= now;
			nextUpdate 	    = frames;
			frames			= 0;
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

		const select = document.getElementById("anitools");

		startTest(select.options[select.selectedIndex].value);
	};

	const user_agent = navigator.userAgent;

	if(user_agent.match(/Android/i)
	|| user_agent.match(/webOS/i)
	|| user_agent.match(/iPhone/i)
	|| user_agent.match(/iPad/i)
	|| user_agent.match(/iPod/i)
	|| user_agent.match(/BlackBerry/i)
	|| user_agent.match(/Windows Phone/i)
	){
		document.getElementById("ballcount").selectedIndex = 7;
	}
};
