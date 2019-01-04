<img src="docs/fat_logo_dark.svg">
<h1></h1>
<a target="_blank" href="https://github.com/nextapps-de/fat/issues"><img src="https://img.shields.io/github/issues/nextapps-de/fat.svg"></a>
<a target="_blank" href="https://github.com/nextapps-de/fat/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/xone.svg"></a>

### World's fastest and most lightweight web animation tool.

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
        <td><a href="https://cdn.jsdelivr.net/gh/nextapps-de/fat/fat.min.js" target="_blank">https://cdn.jsdelivr.net/gh/nextapps-de/fat/fat.min.js</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>fat.light.js</td>
        <td><a href="https://github.com/nextapps-de/fat/raw/master/fat.light.js" target="_blank">Download</a></td>
        <td><a href="https://cdn.jsdelivr.net/gh/nextapps-de/fat/fat.light.js" target="_blank">https://cdn.jsdelivr.net/gh/nextapps-de/fat/fat.light.js</a></td>
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
        <td>Current State</td>
    </tr>
    <tr>
        <td>
            <a href="#scene">Scenes (Groups)</a><br>
        </td>
        <td>x</td>
        <td>x</td>
        <td>stable</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#easing">Easing Collection</a><br>
        </td>
        <td>x</td>
        <td>-</td>
        <td>stable</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#control">Controlling</a><br>
        </td>
        <td>x</td>
        <td>-</td>
        <td>beta</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#sequence">Sequences</a><br>
        </td>
        <td>x</td>
        <td>-</td>
        <td>stable</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#transform">Transforms (2D/3D)</a><br>
        </td>
        <td>x</td>
        <td>-</td>
        <td>stable</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#color">Colors</a><br>
        </td>
        <td>x</td>
        <td>-</td>
        <td>alpha</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#color">Canvas (2D)</a><br>
        </td>
        <td>-</td>
        <td>-</td>
        <td>work in progress</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#svg">SVG</a><br>
        </td>
        <td>-</td>
        <td>-</td>
        <td>work in progress</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#engine">Render Engines</a>
        </td>
        <td>JS, CSS3, WAAPI</td>
        <td>JS</td>
        <td>stable</td>
    </tr>
    <tr>
        <td>File Size (gzip)</td>
        <td>8.1 kb</td>
        <td>2.0 kb</td>
        <td></td>
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
        <td align="left">Library Size (gzip)</td>
        <td align="left">Updates per second</td>
        <td align="left">Frames per second</td>
    </tr>
    <tr style="color:#900">
        <td>1</td>
        <td>FAT</td>
        <td>0.1.0</td>
        <td>2.0 kb</td>
        <td><b>97371</b></td>
        <td><b>50.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>2</td>
        <td>GSAP</td>
        <td>2.0.2</td>
        <td>25.8 kb</td>
        <td><b>83866</b></td>
        <td><b>41.1</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>3</td>
        <td>TweenJS</td>
        <td>1.0.2</td>
        <td>8.3 kb</td>
        <td><b>70145</b></td>
        <td><b>34.6</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>4</td>
        <td>HTML5 (WAAPI)</td>
        <td>-</td>
        <td>-</td>
        <td><i>- not supported -</i></td>
        <td><b>32.7</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>5</td>
        <td>MooTools</td>
        <td>1.6.0</td>
        <td>31.2 kb</td>
        <td><b>26919</b></td>
        <td><b>25.2</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>6</td>
        <td>CSS3 (Transition)</td>
        <td>-</td>
        <td>-</td>
        <td><i>- not supported -</i></td>
        <td><b>22.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>7</td>
        <td>Velocity</td>
        <td>2.0.5</td>
        <td>16.6 kb</td>
        <td><b>16820</b></td>
        <td><b>6.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>8</td>
        <td>AnimeJS</td>
        <td>2.2.0</td>
        <td>5.9 kb</td>
        <td><b>9877</b></td>
        <td><b>2.8</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>9</td>
        <td>Dojo</td>
        <td>1.14.2</td>
        <td>53.0 kb</td>
        <td><b>10607</b></td>
        <td><b>2.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>10</td>
        <td>jQuery</td>
        <td>3.3.1</td>
        <td>30.0 kb</td>
        <td><b>14413</b></td>
        <td><b>1.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>11</td>
        <td>JustAnimate</td>
        <td>2.5.1</td>
        <td>7.3 kb</td>
        <td><b>5087</b></td>
        <td><b>0.6</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>12</td>
        <td>YUI</td>
        <td>3.18.1</td>
        <td>24.4 kb</td>
        <td><b>2182</b></td>
        <td><b>0.5</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>13</td>
        <td>Zepto</td>
        <td>1.2.0</td>
        <td>11.0 kb</td>
        <td><i>- not supported -</i></td>
        <td><b>0.3</b></td>
    </tr>
</table>

Library Comparison:
- <a href="https://nextapps-de.github.io/fat/" target="_blank">Benchmark "Bouncing Balls"</a>
- Benchmark "Starfield" (coming soon)

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
<script src="https://cdn.jsdelivr.net/gh/nextapps-de/fat/fat.min.js"></script>
```

Use a specific version from CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/nextapps-de/fat@v0.1.0/fat.min.js"></script>
```

Use latest nightly build from CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/nextapps-de/fat@latest/fat.min.js"></script>
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
- <a href="#fat.animate">Fat.__animate__(elements[], styles{}, options{})</a>
- <a href="#fat.transform">Fat.__transform__(elements[], styles{}, options{})</a>
- <a href="#fat.transition">Fat.__transition__(elements[], styles{}, options{})</a>
- <a href="#fat.native">Fat.__native__(elements[], styles{}, options{})</a>
- <a href="#fat.update">Fat.__update__(elements[], styles{}, options{})</a>
- <a href="#fat.init">Fat.__init__()</a>
- <a href="#fat.destroy">Fat.__destroy__()</a>

Controller methods:
- <a href="#scene.pause">Scene.__pause__()</a>
- <a href="#scene.reverse">Scene.__reverse__()</a>
- <a href="#scene.loop">Scene.__loop__(value)</a>
- <a href="#scene.seek">Scene.__seek__(value)</a>
- <a href="#scene.speed">Scene.__speed__(value)</a>
- <a href="#scene.start">Scene.__start__()</a>
- <a href="#scene.stop">Scene.__stop__()</a>
- <a href="#scene.reset">Scene.__reset__()</a>
- <a href="#scene.finish">Scene.__finish__()</a>

<a name="fat.options"></a>
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
        <td align="left"><b>engine</b></td>
        <td align="left"><i>String</i></td>
        <td align="left">"js"</td>
        <td align="left">Choose one of 3 render engines: "js", "css", "native".</td>
    </tr>
</table>

<a name="fat.easing"></a>
## Easing

- linear
- easeIn, easeOut, easeInOut
- quadIn, quadOut, quadInOut
- cubicIn, cubicOut, cubicInOut
- quartIn, quartOut, quartInOut
- quintIn, quintOut, quintInOut
- sineIn, sineOut, sineInOut
- expoIn, expoOut, expoInOut
- circIn, circOut, circInOut
- elasticIn, elasticOut, elasticInOut
- backIn, backOut, backInOut
- bounceIn, bounceOut, bounceInOut
- bezier

## Usage
<a name="flexsearch.create"></a>
#### Create a new scene

> Fat.__create()__

```js
var scene = new Fat();
```

alternatively you can also use:

```js
var scene = Fat.create();
```

<a name="index.add"></a>
#### Add animations to a scene

> Scene.__animate__(element, {_STYLE: VALUE_})

```js
scene.animate(element, {left: "100%"});
```

<a name="scene.update"></a>
#### Update scene styles

> scene.__update__(element, {_STYLE: VALUE_})

```js
scene.update(element, {left: "0%"});
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
        <td>x</td>
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

<a name="builds"></a>
## Custom Builds

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

- SUPPORT_DEBUG
- SUPPORT_COLOR
- SUPPORT_CONTROL
- SUPPORT_SEQUENCES
- SUPPORT_TRANSFORM
- SUPPORT_ANIMATE
- SUPPORT_TRANSITION
- SUPPORT_NATIVE
- SUPPORT_ENGINE (_string:_ "all", "js", "css", "native")
- SUPPORT_EASING (includes all easing built-ins from below)

Supported easing flags (boolean):

- SUPPORT_EASE_IN
- SUPPORT_EASE_OUT
- SUPPORT_EASE_IN_OUT
- SUPPORT_EASE_QUAD_IN
- SUPPORT_EASE_QUAD_OUT
- SUPPORT_EASE_QUAD_IN_OUT
- SUPPORT_EASE_CUBIC_IN
- SUPPORT_EASE_CUBIC_OUT
- SUPPORT_EASE_CUBIC_IN_OUT
- SUPPORT_EASE_QUART_IN
- SUPPORT_EASE_QUART_OUT
- SUPPORT_EASE_QUART_IN_OUT
- SUPPORT_EASE_QUINT_IN
- SUPPORT_EASE_QUINT_OUT
- SUPPORT_EASE_QUINT_IN_OUT
- SUPPORT_EASE_SINE_IN
- SUPPORT_EASE_SINE_OUT
- SUPPORT_EASE_SINE_IN_OUT
- SUPPORT_EASE_EXPO_IN
- SUPPORT_EASE_EXPO_OUT
- SUPPORT_EASE_EXPO_IN_OUT
- SUPPORT_EASE_CIRC_IN
- SUPPORT_EASE_CIRC_OUT
- SUPPORT_EASE_CIRC_IN_OUT
- SUPPORT_EASE_ELASTIC_IN
- SUPPORT_EASE_ELASTIC_OUT
- SUPPORT_EASE_ELASTIC_IN_OUT
- SUPPORT_EASE_BACK_IN
- SUPPORT_EASE_BACK_OUT
- SUPPORT_EASE_BACK_IN_OUT
- SUPPORT_EASE_BOUNCE_IN
- SUPPORT_EASE_BOUNCE_OUT
- SUPPORT_EASE_BOUNCE_IN_OUT
- SUPPORT_EASE_BEZIER

Alternatively you can also use this style:
```bash
node compile SUPPORT_CONTROL=true
```

The custom build will be saved to fat.custom.js

---

Copyright 2019 Nextapps GmbH<br>
Released under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache 2.0 License</a><br>
