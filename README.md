<br>
<img src="https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/docs/fat_logo_dark.svg">
<h1></h1>
<a target="_blank" href="https://github.com/nextapps-de/fat/issues"><img src="https://img.shields.io/github/issues/nextapps-de/fat.svg"></a>
<a target="_blank" href="https://github.com/nextapps-de/fat/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/xone.svg"></a>

### Web's fastest and most lightweight animation tool.

When it comes to raw animation speed <a href="#compare">FAT outperforms every single web animation library out there</a> and also provides flexible animation capabilities like scenes, sequences, controlling and easing. 

<a href="#installation">Installation Guide</a> &ensp;&bull;&ensp; <a href="#api">API Reference</a> &ensp;&bull;&ensp; <a href="#builds">Custom Builds</a> &ensp;&bull;&ensp; <a href="#compare">Benchmark Ranking</a>

Get Latest (Stable Release):

<table>
    <tr></tr>
    <tr>
        <td>Build</td>
        <td>File</td>
        <td>CDN</td>
    </tr>
    <tr>
        <td>fat.min.js</td>
        <td><a href="https://github.com/nextapps-de/fat/raw/master/fat.min.js" target="_blank">Download</a></td>
        <td><a href="https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/fat.min.js" target="_blank">https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/fat.min.js</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>fat.light.js</td>
        <td><a href="https://github.com/nextapps-de/fat/raw/master/fat.light.js" target="_blank">Download</a></td>
        <td><a href="https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/fat.light.js" target="_blank">https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/fat.light.js</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>fat.custom.js</td>
        <td><a href="#builds">Custom Build</a></td>
        <td></td>
    </tr>
</table>

All Features:

<table>
    <tr></tr>
    <tr>
        <td>Feature</td>
        <td>fat.js / fat.min.js</td>
        <td>fat.light.js</td>
    </tr>
    <tr>
        <td>
            <a href="#scenes">Scenes (Groups)</a><br>
        </td>
        <td>x</td>
        <td>x</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#easing">Easing Collection</a><br>
        </td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#controls">Controlling</a><br>
        </td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#sequences">Sequences</a><br>
        </td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#transform">Transforms (2D/3D)</a><br>
        </td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#filter">Filter</a><br>
        </td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#colors">Colors</a><br>
        </td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#canvas">Canvas (2D)</a><br>
        </td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#svg">SVG</a><br>
        </td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#engine">Render Engines</a>
        </td>
        <td>JS, CSS3, WAAPI</td>
        <td>JS</td>
    </tr>
    <tr>
        <td>File Size (gzip)</td>
        <td>5.3 kb</td>
        <td>2.1 kb</td>
    </tr>
</table>

> It is also very simple to make a <a href="#builds">Custom Build</a>

<a name="compare" id="compare"></a>
#### Benchmark Ranking (2000 Bouncing Balls)

<table>
    <tr></tr>
    <tr>
        <td align="left">Rank</td>
        <td align="left">Library Name</td>
        <td align="left">Library Version</td>
        <td align="left">Library Size</td>
        <td align="left">Memory Heap</td>
        <td align="left">Memory Allocation</td>
        <td align="left">Updates per second</td>
        <td align="left">Frames per second</td>
    </tr>
    <tr style="color:#900">
        <td>1</td>
        <td>FAT</td>
        <td>0.5.0</td>
        <td>2.1 kb</td>
        <td>0.85 Mb</td>
        <td>0.15 Mb</td>
        <td><b>101075</b></td>
        <td><b>51.2</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>2</td>
        <td>GSAP</td>
        <td>2.0.2</td>
        <td>25.8 kb</td>
        <td>28.32 Mb</td>
        <td>8.1 Mb</td>
        <td><b>87249</b></td>
        <td><b>43.1</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>3</td>
        <td>TweenJS</td>
        <td>1.0.2</td>
        <td>8.3 kb</td>
        <td>3.16 Mb</td>
        <td>3.1 Mb</td>
        <td><b>69647</b></td>
        <td><b>34.4</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>4</td>
        <td>HTML5 (WAAPI)</td>
        <td>-</td>
        <td>-</td>
        <td>0.91 Mb</td>
        <td>0.75 Mb</td>
        <td>-</td>
        <td><b>32.2</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>5</td>
        <td>TinyAnimate</td>
        <td>0.4.0</td>
        <td>1.5 kb</td>
        <td>1.93 Mb</td>
        <td>1.98 Mb</td>
        <td><b>28801</b></td>
        <td><b>29</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>6</td>
        <td>MooTools</td>
        <td>1.6.0</td>
        <td>31.2 kb</td>
        <td>3.14 Mb</td>
        <td>3.42 Mb</td>
        <td><b>26919</b></td>
        <td><b>25.2</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>7</td>
        <td>CSS3 (Transition)</td>
        <td>-</td>
        <td>-</td>
        <td>0 Mb</td>
        <td>0 Mb</td>
        <td>-</td>
        <td><b>22.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>8</td>
        <td>Velocity</td>
        <td>2.0.5</td>
        <td>16.6 kb</td>
        <td>8.33 Mb</td>
        <td>7.98 Mb</td>
        <td><b>16820</b></td>
        <td><b>6.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>9</td>
        <td>AnimeJS</td>
        <td>2.2.0</td>
        <td>5.9 kb</td>
        <td>7.14 Mb</td>
        <td>8.2 Mb</td>
        <td><b>9877</b></td>
        <td><b>2.8</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>10</td>
        <td>Anim.js</td>
        <td>-</td>
        <td>1.9 kb</td>
        <td>7.08 Mb</td>
        <td>9.49 Mb</td>
        <td><b>6994</b></td>
        <td><b>2.8</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>11</td>
        <td>Dojo</td>
        <td>1.14.2</td>
        <td>53.0 kb</td>
        <td>9.1 Mb</td>
        <td>6.5 Mb</td>
        <td><b>10607</b></td>
        <td><b>2.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>12</td>
        <td>Morpheus</td>
        <td>0.7.2</td>
        <td>2.7 kb</td>
        <td>4 Mb</td>
        <td>2.97 Mb</td>
        <td><b>8543</b></td>
        <td><b>2.1</b></td>
    </tr> 
    <tr></tr>
    <tr>
        <td>13</td>
        <td>jQuery</td>
        <td>3.3.1</td>
        <td>30.0 kb</td>
        <td>25.14 Mb</td>
        <td>25.16 Mb</td>
        <td><b>14413</b></td>
        <td><b>1.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>14</td>
        <td>bajs</td>
        <td>1.0</td>
        <td>1.2 kb</td>
        <td>1.25 Mb</td>
        <td>0.91 Mb</td>
        <td><b>-</b></td>
        <td><b>0.8</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>15</td>
        <td>JustAnimate</td>
        <td>2.5.1</td>
        <td>7.3 kb</td>
        <td>109.5 Mb</td>
        <td>61.18 Mb</td>
        <td><b>5087</b></td>
        <td><b>0.6</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>16</td>
        <td>YUI</td>
        <td>3.18.1</td>
        <td>24.4 kb</td>
        <td>159.59 Mb</td>
        <td>88.35 Mb</td>
        <td><b>2182</b></td>
        <td><b>0.5</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>17</td>
        <td>Zepto</td>
        <td>1.2.0</td>
        <td>11.0 kb</td>
        <td>40.14 Mb</td>
        <td>18.49 Mb</td>
        <td>-</td>
        <td><b>0.3</b></td>
    </tr>
</table>

_Plattform: Windows 10, Browser: Chrome (Desktop), Runtime: 10 seconds, Resolution: 3440 x 1440_

Library Comparison:
- <a href="https://nextapps-de.github.io/fat/" target="_blank">Benchmark "Bouncing Balls"</a>
- Benchmark "Transform" (coming soon)
- Benchmark "Coloring" (coming soon)

<a name="installation"></a>
## Installation

##### HTML / Javascript

```html
<html>
<head>
    <script src="fat.min.js"></script>
</head>
...
```
> __Note:__ Use _fat.min.js_ for production and _fat.js_ for development.

Use latest stable release from CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/fat.min.js"></script>
```

Use a specific version from CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/nextapps-de/fat@0.3.0/fat.min.js"></script>
```

__Common JS__

In your code include as follows:

```javascript
var Fat = require("Fat");
```

__AMD__

```javascript
var Fat = require("./fat.min.js");
```

<a name="api"></a>
## API Overview

Global methods / Scene methods:
- <a href="#fat.animate">Fat.__animate__(selector[] | elements[], styles[]{}, options{})</a>
- <a href="#transform">Fat.__transform__(selector[] | elements[], styles[]{}, options{})</a>
- <a href="#filter">Fat.__filter__(selector[] | elements[], styles[]{}, options{})</a>
- <a href="#fat.transition">Fat.__transition__(selector[] | elements[], styles[]{}, options{})</a>
- <a href="#fat.native">Fat.__native__(selector[] | elements[], styles[]{}, options{})</a>
- <a href="#fat.update">Fat.__update__(selector[] | elements[], styles[]{}, options{})</a>
- <a href="#fat.init">Fat.__init__()</a>
- <a href="#fat.destroy">Fat.__destroy__()</a>

Controller methods:
- <a href="#scene.pause">Scene.__pause__(toggle)</a>
- <a href="#scene.reverse">Scene.__reverse__(toggle)</a>
- <a href="#scene.loop">Scene.__loop__(int)</a>
- <a href="#scene.seek">Scene.__seek__(float)</a>
- <a href="#scene.speed">Scene.__speed__(float)</a>
- <a href="#scene.start">Scene.__start__(toggle)</a>
- <a href="#scene.reset">Scene.__reset__()</a>
- <a href="#scene.finish">Scene.__finish__(boolean)</a>

<a name="options"></a>
## Options

<table>
    <tr></tr>
    <tr>
        <td align="left">Option</td>
        <td align="left">Type</td>
        <td align="left">Default</td>
        <td align="left">Description</td>
    </tr>
    <tr>
        <td align="left"><b>duration</b></td>
        <td align="left"><i>Number</i></td>
        <td align="left">400</td>
        <td align="left">Duration of the animation (ms).</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>ease</b></td>
        <td align="left"><i>String</i></td>
        <td align="left">"linear"</td>
        <td align="left">Choose built-in easing.</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>delay</b></td>
        <td align="left"><i>Number</i></td>
        <td align="left">0</td>
        <td align="left">Delay of the animation (ms).</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>callback</b></td>
        <td align="left"><i>Function</i></td>
        <td align="left">null</td>
        <td align="left">Callback function to be called when the animation is finished.</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>step</b></td>
        <td align="left"><i>Function(current)</i></td>
        <td align="left">null</td>
        <td align="left">Step function to be called on each tick.</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>init</b></td>
        <td align="left"><i>Boolean</i></td>
        <td align="left">false</td>
        <td align="left">Forces getting computed styles.</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>force</b></td>
        <td align="left"><i>Boolean</i></td>
        <td align="left">false</td>
        <td align="left">Forces style changes (like css "!important").</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>strict</b></td>
        <td align="left"><i>Boolean</i></td>
        <td align="left">false</td>
        <td align="left">Do not override and keep different animations on same object's properties.</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>engine</b></td>
        <td align="left"><i>String</i></td>
        <td align="left">"js"</td>
        <td align="left">Choose one of 3 render engines: "js", "css", "native".</td>
    </tr>
</table>

## Basic Usage
<a name="fat.animate"></a>
> Fat.__animate__(selector[] | elements[], styles[]{}, options{})

```js
Fat.animate("#mydiv", { left: "100px" },{ /* options */ });
```

```js
Fat.animate("#mydiv", { 
    left: "100px",
    top: "100px"
},{ 
    delay: 1000,
    duration: 2000,
    ease: "easeInOut",
    callback: function(){ 
        // done
        console.log(this.style.left);
    }
});
```

> See all available <a href="#options">options</a> above

Pass in custom options for each property:

```js
Fat.animate("#mydiv", { 
    left: {
        from: 0,
        to: 100,
        unit: "%",
        duration: 2000,
        ease: "linear"
    },
    top: {
        from: 0,
        to: "100%",
        duration: 2000,
        ease: "quadIn",
        delay: 2000
    }
});
```

Use relative values:

```js
Fat.animate("#mydiv", { 
    left: "+=100px",
    top: "*=2"
});
```

<a name="transform"></a>
## Transform

```js
Fat.animate("#mydiv", { 
    translateX: "100px",
    translateY: "100px"
});
```

same as:

```js
Fat.transform("#mydiv", ...
```

same as (has lower performance):

```js
Fat.animate("#mydiv", { 
    "transform": "translate(100px, 100px)"
});
```

<a name="colors"></a>
## Colors

```js
Fat.animate("#mydiv", { 
    color: "#f00",
    backgroundColor: "rgba(0, 255, 0, 1)",
    borderColor: "hsla(0, 100%, 100%, 1)"
});
```

Animate color channels directly (also improves performance):

```js
Fat.animate("#mydiv", { 
    colorR: 0,
    colorG: 0,
    colorB: 0,
    colorA: 0,
    backgroundColorA: "100%",
    borderColorB: 255
});
```

<a name="filter"></a>
## Filter

```js
Fat.animate("#mydiv", { 
    brightness: 0.5,
    contrast: 0.5,
    hue: "180deg"
});
```

> You can use the shorthand `hue` as `hue-rotate`

same as:

```js
Fat.filter("#mydiv", ...
```

same as (has lower performance):

```js
Fat.animate("#mydiv", { 
    "filter": "brightness(0.5) contrast(0.5) hue(180deg)"
});
```

<a name="easing"></a>
## Easing

Built-in easing:

- linear
- easeIn, easeOut, easeInOut (refers to: quadIn, quadOut, quadInOut)
- cubicIn, cubicOut, cubicInOut
- quartIn, quartOut, quartInOut
- quintIn, quintOut, quintInOut
- sineIn, sineOut, sineInOut
- expoIn, expoOut, expoInOut
- circIn, circOut, circInOut
- backIn, backOut, backInOut
- snap

__Static (Pre-Cached) vs. Dynamic Easing__

There are two ways to define easing functions. When your easing is a static curve (like easeIn, backInOut, elastic, etc.) you should define the easing via `Fat.ease["myEasing"] = fn()` and simply pass the name as string within the `Fat.animate` options. This will prefetch all the calculations, so you are free to use really heavy easing definitions without any performance drawbacks.

When you want to use dynamic easing, which depends on runtime calculations, you should pass the easing function directly to the `Fat.animate` options. In this case the easing calculation will not prefetch. This allows you to control easing programmatically and adding logic during runtime.

Define custom static easing function (1-parameter style):

```js
Fat.ease["linear"] = function(x){
    
    return x;
};
```

> __x__: current progress (0.0 - 1.0)

Define custom static easing function (4-parameter style):

```js
Fat.ease["linear"] = function(t, b, c, d){
    
    return b + (c - b) * (t / d);
};
```

> __t__: current time, __b__: from value, __c__: to value, __d__: duration

Apply the custom static easing:

```js
Fat.animate("#mydiv", { left: "100px" },{ ease: "linear" });
```

Use cubic bezier:
```js
Fat.animate("#mydiv", { left: "100px" },{ ease: "cubic(0, 1, 0, 1)" });
```

Array notation for a bezier is recommended:
```js
... ,{ ease: [0, 1, 0, 1] });
```

Define custom __dynamic easing__ function (1-parameter style):
```js
Fat.animate("#mydiv", { left: "100px" },{ ease: function(x){
    
    // doing some crazy calculations depends on runtime
    return x;
}});
```

Define custom __dynamic easing__ function (4-parameter style):
```js
Fat.animate("#mydiv", { left: "100px" },{ ease: function(t, b, c, d){
    
    // doing some crazy calculations depends on runtime
    return x;
}});
```

<a name="sequences"></a>
## Sequences (Keyframes)

```js
Fat.animate("#mydiv", [
    { left: "100%" },   // start
    { top: "100%" },    // 2nd animation
    { left: 0 },        // 3rd animation
    { top: 0 }          // end
],{
    callback: function(){ alert("finished, call next loop") },
    loop: -1 // infinite
});
```

<a name="scenes"></a>
## Scenes (Groups)

Get the global scene (default):
```js
var scene = Fat.animate(element, { left: "100%" });
```

Create a new scene:
```js
var scene = Fat.create();
```

Add animations to a scene:
```js
scene.animate(element, { left: "100%" });
```

Destroy scene:
<a name="fat.destroy"></a>
```js
scene.destroy();
```

Re-initialize styles before next update:
<a name="fat.init"></a>
```js
scene.init();
```

<a name="controls"></a>
## Controls

Update current animation styles:
<a name="fat.update"></a>
```js
scene.update("#mydiv", { left: "0%" });
```

Pause a scene:
<a name="scene.pause"></a>
```js
scene.pause();
```

alternatively:
<a name="scene.play"></a>
```js
scene.play(false);
```

Play a scene:
```js
scene.play();
```

alternatively:
```js
scene.pause(false);
```

Revert playback (toggle):
<a name="scene.reverse"></a>
```js
scene.reverse();
```

alternatively set direction:
```js
scene.reverse(false);
```

Stop animation and jump back to the start:
<a name="scene.reset"></a>
```js
scene.reset();
```

Stop animation and jump to the end:
<a name="scene.finish"></a>
```js
scene.finish();
```

Finish and also execute callback:

```js
scene.finish(true);
```

Set playback speed:
<a name="scene.speed"></a>
```js
scene.speed(0.5); // half
scene.speed(1);   // normal
scene.speed(2);   // double
```

Seek a scene to a specific position:
<a name="scene.seek"></a>
```js
scene.seek(0);   // start
scene.seek(0.5); // half
scene.seek(1);   // end
```

<a name="engine"></a>
## Render Engines

<table>
    <tr></tr>
    <tr>
        <td>Engine</td>
        <td>js</td>
        <td>css</td>
        <td>native</td>
    </tr>
    <tr>
        <td>Renderer</td>
        <td>Javascript (Default)</td>
        <td>CSS Transition</td>
        <td>Web Animation API</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Support Control</td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Support SVG</td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Support Scenes</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
    </tr>
    <tr>
        <td>File Size (gzip)</td>
        <td>7.2 kb</td>
        <td>0.8 kb</td>
        <td>0.5 kb</td>
    </tr>
</table>

Use CSS Transitions:
<a name="fat.transition"></a>

```js
Fat.transition("#mydiv", { 
    left: "100px",
    top: "100px"
},{ 
    delay: 1000,
    duration: 2000,
    ease: "easeInOut",
    callback: function(){ 
        // done
        console.log(this.style.left);
    }
});
```

Use Web Animation API:
<a name="fat.native"></a>

```js
Fat.native("#mydiv", { 
    left: "100px",
    top: "100px"
},{ 
    delay: 1000,
    duration: 2000,
    ease: "easeInOut",
    callback: function(){ 
        // done
        console.log(this.style.left);
    }
});
```

<a name="builds"></a>
## Custom Builds

> You need Node.js including Node Package Manager (NPM)

Install Dependencies:
```bash
npm install
```

Full Build:
```bash
npm run build
```

Light Build:
```bash
npm run build-light
```

Custom Build:
```bash
npm run build-custom SUPPORT_EASE_IN_CUBIC=true SUPPORT_CONTROL=true
```

Supported flags (boolean):

- DEBUG
- SUPPORT_COLOR
- SUPPORT_CONTROL
- SUPPORT_SEQUENCES
- SUPPORT_TRANSFORM
- SUPPORT_FILTER
- SUPPORT_ANIMATE
- SUPPORT_TRANSITION
- SUPPORT_NATIVE
- SUPPORT_ENGINE (_string:_ "all", "js", "css", "native")
- SUPPORT_EASING (includes all easing built-ins)

Alternatively you can also use this style:
```bash
node compile SUPPORT_CONTROL=true
```

The custom build will be saved to fat.custom.js

---

Copyright 2019 Nextapps GmbH<br>
Released under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache 2.0 License</a><br>
