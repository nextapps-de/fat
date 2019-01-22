<br>
<img src="https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/docs/fat_logo_dark.svg">
<h1></h1>
<a target="_blank" href="https://github.com/nextapps-de/fat/issues"><img src="https://img.shields.io/github/issues/nextapps-de/fat.svg"></a>
<a target="_blank" href="https://github.com/nextapps-de/fat/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/xone.svg"></a>

### Web's fastest and most lightweight animation tool.

When it comes to raw animation speed <a href="#compare">FAT outperforms every single web animation library out there</a> and also provides flexible animation capabilities like scenes, sequences, transforms, coloring, controlling and easing. 

<a href="#installation">Installation Guide</a> &ensp;&bull;&ensp; <a href="#api">API Reference</a> &ensp;&bull;&ensp; <a href="test/">Examples</a> &ensp;&bull;&ensp; <a href="#builds">Custom Builds</a> &ensp;&bull;&ensp; <a href="#compare">Benchmark Ranking</a>

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
        <td>fat.compact.js</td>
        <td><a href="https://github.com/nextapps-de/fat/raw/master/fat.compact.js" target="_blank">Download</a></td>
        <td><a href="https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/fat.compact.js" target="_blank">https://cdn.jsdelivr.net/gh/nextapps-de/fat@master/fat.compact.js</a></td>
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
        <td>fat.min.js</td>
        <td>fat.compact.js</td>
        <td>fat.light.js</td>
    </tr>
    <tr>
        <td>
            <a href="#fat.animate">Animation</a>
        </td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#scenes">Scenes (Groups)</a>
        </td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#easing">Easing Collection (Custom Bezier)</a>
        </td>
        <td>x</td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#controls">Control (Timeline)</a>
        </td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#sequences">Sequences</a>
        </td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#keyframes">Keyframes</a>
        </td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#presets">Presets (Effects)</a>
        </td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#transform">Transforms (2D/3D)</a>
        </td>
        <td>x</td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#filter">Filter</a>
        </td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#colors">Colors</a>
        </td>
        <td>x</td>
        <td>x</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#custom">Custom Properties/Renderer</a>
        </td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#relative">Relative Values</a>
        </td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#scroll">Scroll</a>
        </td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#paint">Paint</a>
        </td>
        <td>x</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr></tr>
    <tr>
        <td>
            <a href="#strict">Concurrency (Strict Mode)</a>
        </td>
        <td>x</td>
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
        <td>JS</td>
    </tr>
    <tr>
        <td>File Size (gzip)</td>
        <td>6.7 kb</td>
        <td>4.5 kb</td>
        <td>1.9 kb</td>
    </tr>
</table>

> The flags _<a href="#debug">DEBUG</a>_ and _<a href="#profile">PROFILER</a>_ are also available in _fat.js_ for non-production use.

> It is also very simple to make a <a href="#builds">Custom Build</a>

<a name="compare" id="compare"></a>
## Benchmark Ranking 

Library Comparison: <a href="https://nextapps-de.github.io/fat/" target="_blank">Benchmark "Bouncing Balls"</a>

__"Animate" (2000 Bouncing Balls)__

<table>
    <tr></tr>
    <tr>
        <td align="left">Rank</td>
        <td align="left">Library Name</td>
        <td align="left">Library Version</td>
        <td align="left">Library Size</td>
        <td align="left">Memory Heap <a href="#notes">*</a></td>
        <td align="left">Memory Allocation <a href="#notes">**</a></td>
        <td align="left">Updates per second</td>
        <td align="left">Frames per second</td>
    </tr>
    <tr>
        <td>1</td>
        <td>FAT</td>
        <td>0.6.6</td>
        <td>1.9 kb</td>
        <td>0.85 Mb</td>
        <td>0.15 Mb</td>
        <td><b>103954</b></td>
        <td><b>51.5</b></td>
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
        <td><b>7206</b></td>
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

__"Transforms" (2000 Bouncing Balls)__

<table>
    <tr></tr>
    <tr>
        <td align="left">Rank</td>
        <td align="left">Library Name</td>
        <td align="left">Library Version</td>
        <td align="left">Updates per second</td>
        <td align="left">Frames per second</td>
    </tr>
    <tr>
        <td>1</td>
        <td>FAT</td>
        <td>0.6.6</td>
        <td><b>91960</b></td>
        <td><b>46.1</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>2</td>
        <td>TweenJS</td>
        <td>1.0.2</td>
        <td><b>67931</b></td>
        <td><b>33</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>3</td>
        <td>GSAP</td>
        <td>2.0.2</td>
        <td><b>50337</b></td>
        <td><b>26</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>4</td>
        <td>AnimeJS</td>
        <td>2.2.0</td>
        <td><b>41040</b></td>
        <td><b>21.6</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>5</td>
        <td>HTML5 (WAAPI)</td>
        <td>-</td>
        <td>-</td>
        <td><b>16</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>6</td>
        <td>CSS3 (Transition)</td>
        <td>-</td>
        <td>-</td>
        <td><b>15.5</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>7</td>
        <td>Zepto</td>
        <td>1.2.0</td>
        <td>-</td>
        <td><b>12.4</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>8</td>
        <td>Morpheus</td>
        <td>0.7.2</td>
        <td><b>6665</b></td>
        <td><b>3.3</b></td>
    </tr> 
    <tr></tr>
    <tr>
        <td>9</td>
        <td>bajs</td>
        <td>1.0</td>
        <td><b>-</b></td>
        <td><b>1</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>10</td>
        <td>JustAnimate</td>
        <td>2.5.1</td>
        <td><b>1218</b></td>
        <td><b>0.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>11</td>
        <td>jQuery</td>
        <td>3.3.1</td>
        <td><b>309</b></td>
        <td><b>0.01</b></td>
    </tr>
</table>

__"Colors" (2000 Flashing Balls)__

<table>
    <tr></tr>
    <tr>
        <td align="left">Rank</td>
        <td align="left">Library Name</td>
        <td align="left">Library Version</td>
        <td align="left">Updates per second</td>
        <td align="left">Frames per second</td>
    </tr>
    <tr>
        <td>1</td>
        <td>FAT</td>
        <td>0.6.6</td>
        <td><b>113950</b></td>
        <td><b>57</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>2</td>
        <td>GSAP</td>
        <td>2.0.2</td>
        <td><b>89665</b></td>
        <td><b>42.65</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>3</td>
        <td>TweenJS</td>
        <td>1.0.2</td>
        <td><b>89499</b></td>
        <td><b>42</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>4</td>
        <td>Velocity</td>
        <td>2.0.5</td>
        <td><b>59617</b></td>
        <td><b>31.25</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>5</td>
        <td>HTML5 (WAAPI)</td>
        <td>-</td>
        <td>-</td>
        <td><b>26.5</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>6</td>
        <td>Anim.js</td>
        <td>-</td>
        <td>-</td>
        <td><b>23</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>7</td>
        <td>CSS3 (Transition)</td>
        <td>-</td>
        <td>-</td>
        <td><b>20.6</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>8</td>
        <td>YUI</td>
        <td>3.18.1</td>
        <td><b>84287</b></td>
        <td><b>14.7</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>9</td>
        <td>MooTools</td>
        <td>1.6.0</td>
        <td><b>8123</b></td>
        <td><b>13.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>10</td>
        <td>Dojo</td>
        <td>1.14.2</td>
        <td><b>33004</b></td>
        <td><b>11.1</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>11</td>
        <td>AnimeJS</td>
        <td>2.2.0</td>
        <td><b>12483</b></td>
        <td><b>6.3</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>12</td>
        <td>jQuery</td>
        <td>3.3.1</td>
        <td><b>7002</b></td>
        <td><b>4</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>13</td>
        <td>Morpheus</td>
        <td>0.7.2</td>
        <td><b>3902</b></td>
        <td><b>3.2</b></td>
    </tr> 
    <tr></tr>
    <tr>
        <td>14</td>
        <td>Zepto</td>
        <td>1.2.0</td>
        <td>-</td>
        <td><b>2</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>15</td>
        <td>JustAnimate</td>
        <td>2.5.1</td>
        <td><b>4283</b></td>
        <td><b>1</b></td>
    </tr>
    <tr></tr>
    <tr>
        <td>16</td>
        <td>bajs</td>
        <td>1.0</td>
        <td><b>-</b></td>
        <td><b>0.7</b></td>
    </tr>
</table>

<a name="notes" id="notes"></a>
_Browser: Chrome (Desktop), Test Duration: 30 sec (median value)_<br>
_* Memory Heap: The size of memory the animations requires to execute_<br>
_** Memory Allocation: The amount of memory which was allocated during animation runtime_

Library Comparison: <a href="https://nextapps-de.github.io/fat/" target="_blank">Benchmark "Bouncing Balls"</a>

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

> The namespace "Fat" is also the default scene (global scene).

Global methods / Scene methods:
- <a href="#fat.animate">Fat.__animate__(selector | elements, styles | preset, options, callback)</a>
- <a href="#transform">Fat.__transform__(selector | elements, styles, options, callback)</a>
- <a href="#filter">Fat.__filter__(selector | elements, styles, options, callback)</a>
- <a href="#fat.transition">Fat.__transition__(selector | elements, styles, options, callback)</a>
- <a href="#fat.native">Fat.__native__(selector | elements, styles, options, callback)</a>
- <a href="#fat.destroy">Fat.__destroy__()</a>

Control methods:
- <a href="#fat.set">Scene.__set__(selector | elements, styles, force?)</a>
- <a href="#fat.set">Scene.__set__(selector | elements, style, value, force?)</a>
- <a href="#scene.remove">Scene.__remove__(selector | elements, styles)</a>
- <a href="#scene.pause">Scene.__pause__(boolean: toggle)</a>
- <a href="#scene.reverse">Scene.__reverse__(boolean: toggle)</a>
- <a href="#scene.start">Scene.__start__(boolean: toggle)</a>
- <a href="#scene.finish">Scene.__finish__()</a>
- <a href="#scene.reset">Scene.__reset__()</a>
- <a href="#scene.loop">Scene.__loop__(int: count)</a>
- <a href="#scene.shift">Scene.__shift__(int: ms)</a>
- <a href="#scene.seek">Scene.__seek__(float: position)</a>
- <a href="#scene.speed">Scene.__speed__(float: ratio)</a>

<a name="options"></a>
## Scene Options

<table>
    <tr></tr>
    <tr>
        <td align="left">Option</td>
        <td align="left">Type</td>
        <td align="left">Default</td>
        <td align="left">Description</td>
    </tr>
    <tr>
        <td align="left"><b>start</b></td>
        <td align="left"><i>Boolean</i></td>
        <td align="left">true</td>
        <td align="left">Enable/Disable autoplay when an animation call was performed</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>fps</b></td>
        <td align="left"><i>Number</i></td>
        <td align="left">60</td>
        <td align="left">Frames per second</td>
    </tr>
</table>

<a name="options"></a>
## Animation Options

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
        <td align="left"><i>String | Function</i></td>
        <td align="left">"linear"</td>
        <td align="left">Choose a <a href="#easing">pre-defined easing</a> method or pass a <a href="#easing">custom easing function</a>.</td>
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
        <td align="left">Function to be called when the animation is finished.</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>step</b></td>
        <td align="left"><i>Function(progress, value)</i></td>
        <td align="left">null</td>
        <td align="left">Function to be called on each tick (progress: the current state of progress between 0 and 1, value: the current value including the unit, helpful when using <a href="#custom">custom properties</a>).</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>loop</b></td>
        <td align="left"><i>Number</i></td>
        <td align="left">0</td>
        <td align="left">Loop count of <a href="#sequences">sequences</a> or <a href="#keyframes">keyframes</a>. Set to <i>-1</i> for inifinite loops.</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>init</b></td>
        <td align="left"><i>Boolean</i></td>
        <td align="left">false</td>
        <td align="left">Forces getting computed styles when starting next animation loop. Just important when styles changes within the animation callback right before starting a new animation on the same style property (animation loop).</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>force</b></td>
        <td align="left"><i>Boolean</i></td>
        <td align="left">false</td>
        <td align="left">Forces style changes (equal to css keyword "!important").</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>strict</b></td>
        <td align="left"><i>Boolean</i></td>
        <td align="left">false</td>
        <td align="left">Do not override and keep different animations acts on same object's style properties.</td>
    </tr>
    <tr></tr>
    <tr>
        <td align="left"><b>engine</b></td>
        <td align="left"><i>String</i></td>
        <td align="left">"js"</td>
        <td align="left">Choose one of 3 render engines: "<i>js</i>", "<i>css</i>", "<i>native</i>".</td>
    </tr>
</table>

## Basic Usage
<a name="fat.animate"></a>
> Fat.__animate__(selector[] | elements[], styles[]{}, options{}, callback)

```js
Fat.animate("#mydiv", { left: "100px" },{ /* options */ });
```

> Pass in an element, an array of elements or a dom query selector.

```js
Fat.animate("#mydiv", { 
    left: "100px", 
    top: "100px"
},{ 
    delay: 1000,
    duration: 2000,
    ease: "easeInOut",
    callback: function(){ 
        // "this" refers to #mydiv
        console.log(this.style.left);
    }
});
```

> See all available <a href="#options">options</a> above.

Pass in custom options for each style property:

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

> Passing a unit parameter is slightly faster.

"From-To-Unit" Shortcut `property: [from, to, unit]`:
```js
Fat.animate("#mydiv", {
    left: [0, 100, "%"], // from 0%  to 100%
    top: [0, "100%"],
});
```

Alternatively pass the callback function as the last parameter:
```js
Fat.animate("#mydiv", { 
    left: "100px", 
    top: "100px" 
},{ 
    delay: 2000,
    duration: 2000,
    ease: "easeInOut"

}, function(){
    
    // done
});
```

```js
Fat.animate("#mydiv", { top: "100px" }, function(){
    // done
});
```

```js
Fat.animate("#mydiv", "slideInTop", function(){
    // done
});
```

Delay an animation until the target element comes into view (e.g. by scrolling):

```js
Fat.animate("#mydiv", { top: "100px" }, { delay: "view" });
```

<a name="relative"></a>
## Relative Values:

Calculate values depending on the current state:
```js
// current left + 100px
Fat.animate("#mydiv", { left: "+=100px" });
```
```js
// double of current top
Fat.animate("#mydiv", { top: "*=2" });
```
```js
// current left - 100px
Fat.animate("#mydiv", { left: "-=100px", });
```
```js
// half of current top
Fat.animate("#mydiv", { top: "/=2" });
```

Toggle values depending on the current state:
```js
// toggle current left (100% or 0%)
Fat.animate("#mydiv", { left: "!=100%" });
```

<a name="transform"></a>
## Transform

Separate notation provides the best performance:
```js
Fat.animate("#mydiv", { 
    translateX: "100px",
    translateY: "100px"
});
```

same as:
```js
Fat.transform("#mydiv", { ... });
```

alternatively:
```js
Fat.animate("#mydiv", { 
    "transform": "translate(100px, 100px)"
});
```

same as:
```js
Fat.transform("#mydiv", "translate(100px, 100px)");
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

Separate notation provides the best performance:
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

Separate notation provides the best performance:
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
Fat.filter("#mydiv", { ... });
```

alternatively:

```js
Fat.animate("#mydiv", { 
    "filter": "brightness(0.5) contrast(0.5) hue(180deg)"
});
```

same as:
```js
Fat.filter("#mydiv", "brightness(0.5) contrast(0.5) hue(180deg)");
```


<a name="easing"></a>
## Easing
<a name="easing-builtin"></a>
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

Shorthand array notation for a bezier is recommended:
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

<a name="custom"></a>
## Custom Property / Renderer
> Fat.__animate__(custom_object[]{}, custom_property[]{}, options{})

> __Note:__ You can't use more than one custom property per animation on a HTML element. Instead when animating custom object properties there are no limits.

Just add a property with the name "custom":
```js
Fat.animate("#mydiv", { 
    custom: "50%" 
},{  
    ease: "cubicInOut", 
    step: function(progress, current){
        this.style.left = current;
    }
});
```

Handle unit separately:
```js
Fat.animate("#mydiv", { 
    custom: 50 
},{ 
    ease: "cubicInOut", 
    step: function(progress, current){
        this.style.left = current + "%";
    }
});
```

Pass in custom object/function as first parameter instead of an element:
```js
Fat.animate({ 
    obj: document.getElementById("mydiv") 
},{ 
    custom: 50
 },{
    ease: "cubicInOut",
    step: function(progress, current){
        // "this" refers to the custom object
        this.obj.style.left = current + "%";
    }
});
```

You can also use <a href="#sequences">sequences</a>:
```js
... [custom: 50, custom: 0, custom: 100, custom: 0]
```

This way it is possible to pass custom data, logic and renderer through each animation job, e.g.:
```js
var handler = {
    unit: "%",
    obj: document.getElementById("mydiv"),
    set: function(property, value){ 
        this.obj.style[property] = value + this.unit;
    }
};

Fat.animate(handler, { custom: 50 },{
    ease: "cubicInOut",
    step: function(progress, current){
        // "this" refers to handler
        this.set("left", current);
    }
});
```

You can also use array of objects/handlers:
```js
Fat.animate([handler1, handler2, handler3], ...
```

If you don't need the from/to transition values at all, another scenario could be:
```js
function cubicInOut(x) {
    return ((x *= 2) <= 1 ? x*x*x : (x -= 2) *x*x + 2) / 2;
}

Fat.animate({ ease: cubicInOut },{ custom: true },{
    step: function(progress){
        var current = this.ease(progress);
        // console.log(current);
    }
});
```

alternatively:
```js
Fat.animate({},{ custom: true },{ step: function(progress){
    var current = cubicInOut(progress);
    // console.log(current);
}});
```

or:
```js
Fat.animate({},{ custom: 1 },{
    ease: cubicInOut, 
    step: function(progress, current){
        // console.log(current);
    }
});
```

__Tween custom object properties:__
```js
function draw(){
    this.obj.style[this.property] = this.value;
}

var custom = {
    value: 0,
    property: "left",
    obj: document.getElementById("#mydiv")
};

Fat.animate(custom, { value: "50%" },{
    duration: 2000,
    ease: "cubicInOut",
    step: draw
});
```

<a name="sequences"></a>
## Sequences

```js
Fat.animate("#mydiv", [
    { left: "100%" },   // 1st animation, 2000ms
    { top: "100%" },    // 2nd animation, 2000ms
    { left: 0 },        // 3rd animation, 2000ms
    { top: 0 }          // 4th animation, 2000ms
],{
    callback: function(){ alert("Next Loop") },
    delay: 2000,
    loop: -1 // infinite
});
```

Use custom options per style property:

```js
Fat.animate("#mydiv", [{   
    left: { // 1st animation
        from: 0,
        to: 100,
        unit: "%",
        duration: 2000
    }
},{   
    top: { // 2nd animation
        to: "100%",
        duration: 2000,
        ease: "easeInOut",
        delay: 0
    }
},  
...
```

<a name="keyframes"></a>
## Keyframes

```js
Fat.animate("#mydiv", {
    "25%":  { left: "100%" },   //  0 ->  25%, 500ms
    "50%":  { top: "100%" },    // 25 ->  50%, 500ms
    "75%":  { left: 0 },        // 50 ->  75%, 500ms
    "100%": { top: 0 }          // 75 -> 100%, 500ms
},{
    callback: function(){ alert("Next Loop") },
    delay: 2000,
    loop: -1 // infinite
});
```

Use custom options per style property:

```js
Fat.animate("#mydiv", {
    "0%": {   
        left: {
            to: "100%",
            ease: "easeIn"
        }
    }, 
    "100%": {   
        top: {
            to: "0%",
            ease: "easeOut"
        }
    }
},   
...
```

<!--
You can also combine Sequences and Keyframes as well as custom options per style property:

```js
Fat.animate("#mydiv", [{
    "0%": {   
        left: 0,
        top: 0
    }, 
    "100%": {   
        left: "100%",
        top: "100%"
    }
},{
    "0%": {   
        left: { 
            to: 0, 
            ease: "easeIn"
        },
        top: { 
            to: 0, 
            ease: "easeIn"
        }
    }, 
    "100%": {   
        left: { 
            to: "100%",
            ease: "easeOut"
        },
        top: { 
            to: "100%", 
            ease: "easeOut"
        }
    }
}],   
...
```
-->

<a name="presets"></a>
## Presets (Effects)

```js
Fat.animate("#mydiv", "fadeOut");
```

Combine multiple presets (ordered):

```js
Fat.animate("#mydiv", "fadeOut zoomOut rollOutRight");
```

Also usable with <a href="#sequences">sequences</a>:

```js
Fat.animate("#mydiv", ["slideInTop", "zoomIn"]);
```

Define custom preset:
```js
Fat.preset["fade-out-down"] = { 
    opacity: 0, 
    translateY: "100%"
};
```

Use custom preset:
```js
Fat.animate("#mydiv", "fade-out-down");
```

__Builtin Presets:__
- fadeIn, fadeOut, fadeToggle
- slideInLeft, slideOutLeft, slideToggleLeft
- slideInRight, slideOutRight, slideToggleRight
- slideInTop, slideOutTop, slideToggleTop
- slideInBottom, slideOutBottom, slideToggleBottom
- zoomIn, zoomOut, zoomToggle
- rollOutRight (clockwise), rollInRight, rollToggleRight
- rollOutLeft (opposite), rollInLeft, rollToggleLeft
- blurIn, blurOut, blurToggle
- scrollUp, scrollDown, scrollLeft, scrollRight

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

<!--
Re-initialize styles before next update:
<a name="fat.init"></a>
```js
scene.init();
```
-->

__Useful Example__

Considering the following example:
```js
var scene_1 = Fat.animate(element_1, { left: "100%" });
var scene_2 = Fat.animate(element_2, { left: "100%" });
var scene_3 = Fat.animate(element_3, { left: "100%" });

// this will also destroy scene_2 and scene_3:

scene_1.destroy();
```

All variables points to the same global scene on which is _"Fat"_ basically based on.

This is the correct workaround:
```js
var scene_1 = Fat.create().animate(element_1, { left: "100%" });
var scene_2 = Fat.create().animate(element_2, { left: "100%" });
var scene_3 = Fat.create().animate(element_3, { left: "100%" });

// this will just destroy scene_1:

scene_1.destroy();
```

> Do not massively create new scenes and also do not create them by default. A large amount of parallel scenes results in a performance drawback.

<a name="controls"></a>
## Controls

> _Fat_ internally points to default global scene, so you can use all scene methods on _Fat_ accordingly.

Update single style:
<a name="fat.set"></a>
```js
scene.set("#mydiv", "left", "0%");
```

Update multiple styles:
```js
scene.set("#mydiv", { top: 0, left: 0 });
```

Remove all animations from an object:
<a name="fat.remove"></a>
```js
scene.remove("#mydiv");
```

Remove a specific animation from an object:
```js
scene.remove("#mydiv", "left");
```

Remove a list of specific animations from an object:
```js
scene.remove("#mydiv", ["top", "left"]);
```

Pause a scene:
<a name="scene.pause"></a>
```js
scene.pause();
```

alternatively:
<a name="scene.start"></a>
```js
scene.start(false);
```

Play a scene:
```js
scene.start();
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

Reset playback state and jump back to the start:
<a name="scene.reset"></a>
```js
scene.reset();
```

Finish and also execute callback:

```js
scene.finish();
```

Set playback speed:
<a name="scene.speed"></a>
```js
scene.speed(0.5); // half
scene.speed(1);   // normal
scene.speed(2);   // double
scene.speed(-2);  // double (reversed direction)
```

Seek a scene to a specific position:
<a name="scene.seek"></a>
```js
scene.seek(0);   // start
scene.seek(0.5); // middle
scene.seek(1);   // end
```

Shift a scene relative to the current position (by milliseconds):
<a name="scene.shift"></a>
```js
scene.shift(2000); // current + 2000 ms
scene.shift(-500); // current - 500 ms
```

__Looping Sequences & Reversed Direction__

When looping sequences and also have reversed animation direction (e.g. by setting speed < 0) you have to pass a from-to declaration pair for each style, otherwise the from-value gets lost when looping back from reversed direction.
```js
var scene = Fat.animate(element, [{
    left: { from: "0%", to: "50%" }
},{
    left: { from: "50%", to: "0%" }
}],{
    loop: -1
});

scene.reverse();
```

alternatively use from-to-unit shorthand:

```js
var scene = Fat.animate(element, [{
    left: [0, 50, "%"]
},{
    left: [50, 0, "%"]
}],{
    loop: -1
});

scene.reverse();
```

alternatively use relative toggle:

```js
var scene = Fat.animate(element, [{
    left: "!=50%"
},{
    left: "!=0%"
}],{
    loop: -1
});

scene.reverse();
```

<a name="scroll"></a>
## Scroll

<!--
> Use `document` to scroll the body of the page or pass a custom element or a selector.
-->

Scroll document/element to a specific position (vertically):
```js
Fat.animate(element, { scrollTop: 500 });
```

Scroll horizontally:
```js
Fat.animate(element, { scrollLeft: 500 });
```

Scroll in both directions `scroll: [x, y]`:
```js
Fat.animate(element, { scroll: [500, 500] });
```

Use relative values:
```js
Fat.animate(element, { scroll: "+=50" });
```

<!--
Scroll to an element:
```js
Fat.animate(document, { scroll: "#mydiv" });
```

Scroll to an element and apply an offset:
```js
Fat.animate(document, { scroll: "#mydiv", offset: 50 });
```
-->

<!--
__Control animations via scroll__:

> This features requires `SUPPORT_CONTROL=true`

```js
Fat.animate(element, { top: 500 }, { scroll: "#mydiv" });
```
-->

<a name="paint"></a>
## Paint

Schedule a task to perform during next animation frame:

```js
Fat.paint(function(time){

    console.log("Now: " + time);
});
```

Schedule a task with a delay and keep the paint id:

```js
var id = Fat.paint(function(time){

    console.log("Now: " + time);
    
}, 2000);
```

Remove the above scheduled task from the queue:

```js
Fat.cancel(id);
```

Loop a task with every animation frame:

```js
Fat.paint(function(time){

    console.log("Now: " + time);
    return true;
});
```

> Just return _true_ to keep the loop alive. Return _false_ or return nothing to break the loop.

<a name="init"></a>
## Init (Options)

Considering the following example:
```js
Fat.animate(element, { top: "100%" }, function(){
    
    this.style.top = 0; // this style change will be shadowed
    
    Fat.animate(this, { top: "100%" });
});
```

This is called animation loop, the callback creates a new animation on the __same__ objects style property. Technically the callback executes during the last frame of the first animation. So there is still running an animation on this property and will be inherited by the next animation loop.

> During the callback, external changes on the __same__ style property which is going to be animated will be shadowed by the animation loop inheritance.

When the style change did not happened externally (e.g. by a different tool) use _set_ method to get best performance:
```js
Fat.animate(element, { top: "100%" }, function(){
    
    Fat.set(this, "top", 0).animate(this, { top: "100%" });
});
```

Otherwise, to solve this situation you have to add the _init_ option:
```js
Fat.animate(element, { top: "100%" }, function(){
    
    this.style.top = 0; // external change somewhere happens
    
    Fat.animate(this, { top: "100%" }, { init: true });
});
```

Again, this issue only occurs when using animation loops mixed with manual style changes on the __same__ style property during the callback right before the new animation loop is called.

<a name="strict"></a>
## Strict (Options)

Considering the following example:
```js
Fat.animate("#mydiv", { top: "100%" }, { duration: 2000 }, function(){
    console.log("long");
});

// next animation will override the above one:

Fat.animate("#mydiv", { top: "100%" }, { duration: 400 }, function(){
    console.log("short");
});
```

When you perform different animations on the same object style properties to run in parallel there is a concurrency issue. By default a dupe animation inherits the old one, so the old animation is not existing anymore. Accordingly to the example from above the console just logs "short".

To force duped animations you have to add the _strict_ option:
```js
// this animation cannot be overridden:

Fat.animate("#mydiv", { top: "100%" }, { duration: 2000, strict: true }, function(){
    console.log("long");
});

Fat.animate("#mydiv", { top: "100%" }, { duration: 400 }, function(){
    console.log("short");
});
```

Now the console logs "short" after 400ms and "long" after 2000ms. Although same properties cannot have two different values, so always the most early started animation gets prioritized actually.

<a name="force"></a>
## Force (Options)

Considering the following example:
```css
#mydiv{ top: 0px !important }
```
```js
Fat.animate("#mydiv", { top: "100%" });
```

The css style declaration from above has the keyword _!important_ and is preventing normal style changes.

To solve this you have to add the _force_ option:

```js
Fat.animate("#mydiv", { top: "100%" }, { force: true });
```

<a name="engine"></a>
## Render Engines

> These is an experimental feature. All engines are stand-alone, you can make a custom build just with your favorite pick.

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

<a name="debug"></a>
## Debug

> Do not use DEBUG in production builds.

If you get issues, you can temporary set the _DEBUG_ flag to _true_ on top of _fat.js_:

```js
DEBUG = true;
```

This enables console logging of several processes. Just open the browsers console to make this information visible.

<a name="profile"></a>
## Profiler Stats

> Do not use PROFILER in production builds.

To collect some performance statistics of your scenes you need to temporary set the _PROFILER_ flag to _true_ on top of _fat.js_:

```js
PROFILER = true;
```

This enables profiling of several processes.

An array of all profiles is available on:

```js
window.stats;
```

You can also just open the browsers console and enter this line to get stats.

> The index of the array corresponds to the _scene.id_.

Get stats from a specific scene:

```js
scene.stats;
```

The returning stats payload is divided into several categories. Each of these category provides its own statistic values.

__Profiler Stats Properties__
<table>
    <tr></tr>
    <tr>
        <td>Property</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>time</td>
        <td>The sum of time (ms) the process takes (lower is better)</td>
    </tr>
    <tr></tr>
    <tr>
        <td>count</td>
        <td>How often the process was called</td>
    </tr>
    <tr></tr>
    <tr>
        <td>ops</td>
        <td>Average operations per seconds (higher is better)</td>
    </tr>
    <tr></tr>
    <tr>
        <td>nano</td>
        <td>Average cost (ns) per operation/call (lower is better)</td>
    </tr>
</table>

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

Compact Build:
```bash
npm run build-compact
```

Custom Build:
```bash
npm run build-custom SUPPORT_EASE_IN_CUBIC=true SUPPORT_CONTROL=true
```

> On custom builds each build flag will be set to _false_ by default.

Alternatively (Custom Build):
```bash
node compile support_control=true
```

> The custom build will be saved to fat.custom.xxxxx.js (the "xxxxx" is a hash based on the used build flags).

__Supported Build Flags__

<table>
    <tr></tr>
    <tr>
        <td align="left">Flag</td>
        <td align="left">Values</td>
    </tr>
    <tr>
        <td><a href="#colors">SUPPORT_COLOR</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#controls">SUPPORT_CONTROL</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#sequences">SUPPORT_SEQUENCE</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#transform">SUPPORT_TRANSFORM</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#filter">SUPPORT_FILTER</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#scroll">SUPPORT_SCROLL</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#paint">SUPPORT_PAINT</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#relative">SUPPORT_RELATIVE</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#strict">SUPPORT_CONCURRENCY</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#easing">SUPPORT_EASING</a></td>
        <td>true, false</td>
    </tr>
        <tr></tr>
        <tr>
        <td><a href="#presets">SUPPORT_PRESET</a></td>
        <td>true, false</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#engine">SUPPORT_ENGINE</a></td>
        <td><i>string:</i> "all", "js", "css", "native" / "waapi"</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#animate">SUPPORT_ANIMATE</a></td>
        <td>true, false (overrides SUPPORT_ENGINE)</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#transition">SUPPORT_TRANSITION</a></td>
        <td>true, false (overrides SUPPORT_ENGINE)</td>
    </tr>
    <tr></tr>
    <tr>
        <td><a href="#native">SUPPORT_NATIVE</a></td>
        <td>true, false (overrides SUPPORT_ENGINE)</td>
    </tr>
    <tr>
        <td><br><b>Language-Out Flags</b></td>
        <td></td>
    </tr>
    <tr>
        <td>LANGUAGE_OUT<br><br><br><br><br><br><br><br></td>
        <td>ECMASCRIPT3<br>ECMASCRIPT5<br>ECMASCRIPT5_STRICT<br>ECMASCRIPT6<br>ECMASCRIPT6_STRICT<br>ECMASCRIPT_2015<br>ECMASCRIPT_2017<br>STABLE</td>
    </tr>
</table>

---

Copyright 2019 Nextapps GmbH<br>
Released under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache 2.0 License</a><br>
