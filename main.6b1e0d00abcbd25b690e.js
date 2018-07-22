!function(e){function t(t){for(var r,i,u=t[0],l=t[1],s=t[2],c=0,d=[];c<u.length;c++)i=u[c],o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/hexSchoolWeek7_canvasGame";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=l;a.push([374,0]),n()}({106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.YELLOW_GUN_RUNNER="yellowGunRunner"},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GLOBAL_ANGLE=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=f(o),i=f(n(153)),u=n(106),l=n(72),s=n(152);function f(e){return e&&e.__esModule?e:{default:e}}var c=t.GLOBAL_ANGLE=0,d=0,h=function(e,t,n,r,o,a){e.forEach(function(e){t.translate(n,r),t.rotate((e.angle-45)*Math.PI/180),t.beginPath(),t.arc(e.x,e.y,l.BULLET_RADIUS,0,2*Math.PI,!1),t.fill(),t.stroke(),function(e){e.x=e.x+a,e.y=e.y+a}(e),t.setTransform(1,0,0,1,0,0)})},v=function(e,t,n){var r=t/2,o=n/2;return d>l.HOW_MANY_FRAMES_COUNT_OUT_OF_BORDER_BULLETS?e.filter(function(e){return function(e){return!(Math.abs(e.x)>r&&Math.abs(e.y)>o)}(e)}):(d+=1,e)},y=function(e){return function(t){if(87===t.keyCode){var n={type:"normal",angle:c,x:45,y:45};e.bulletsArr=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.bulletsArr),[n])}}},_=null,p=null,b=function(e){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.Component),r(n,[{key:"render",value:function(){var e=this;return a.default.createElement(a.default.Fragment,null,a.default.createElement("canvas",{id:"theBackgroundCanvas",ref:function(t){return e.bgCanvasRef=t}}),a.default.createElement("canvas",{id:"theBattleCanvas",ref:function(t){return e.battleCanvasRef=t}}))}},{key:"componentDidMount",value:function(){var e=this.bgCanvasRef.getContext("2d");this.bgCanvasRef.width=window.innerWidth,this.bgCanvasRef.height=window.innerHeight;var n=this.battleCanvasRef.getContext("2d");this.battleCanvasRef.width=window.innerWidth,this.battleCanvasRef.height=window.innerHeight;var r=window.innerWidth,o=window.innerHeight,a=r/2,f=o/2;_=function(e,n){return function(r){var o=r,a=o.clientX,i=o.clientY,u=a-e,l=i-n,s=180*Math.atan2(l,u)/Math.PI;t.GLOBAL_ANGLE=c=Math.round(s)}}(a,f);var d={bulletsArr:[],bulletSpeed:l.BULLET_SPEED,enemysArr:[],outterRadius:100};p=y(d),this.battleCanvasRef.addEventListener("mousemove",_),window.addEventListener("keydown",p);d.enemysArr.push(new i.default(0,0,1,u.YELLOW_GUN_RUNNER,30),new i.default(0,0,1,u.YELLOW_GUN_RUNNER,60),new i.default(0,0,1,u.YELLOW_GUN_RUNNER,120));var b,E,R,O,w=function(e){return function(){var t,i;t=r,i=o,n.clearRect(0,0,t,i),function(e,t,n,r,o,a){n.lineWidth=a,n.strokeStyle=o,n.translate(e,t),function(e,t,n,r,o){var a=t+n,i=t+n;e.fillStyle=o;for(var u=2*Math.PI/r,l=0;l<r;l+=1){e.beginPath();var s=0+Math.cos(u*l)*a,f=0+Math.sin(u*l)*i;e.arc(s,f,2,0,2*Math.PI,!1),e.fill()}}(n,r,20,30,"#D3D3D3"),n.rotate((c-270)*Math.PI/180),n.beginPath(),n.arc(0,0,r,0,2*Math.PI,!1),n.stroke(),n.beginPath(),n.arc(0,0,r+40,Math.PI/6,Math.PI/1.2,!1),n.stroke(),function(e){e.translate(0,0-r-15),e.lineWidth=a/2,e.beginPath(),e.moveTo(0,0),e.lineTo(10,0),e.lineTo(10,-10),e.lineTo(5,-22),e.lineTo(-5,-22),e.lineTo(-10,-10),e.lineTo(-10,0),e.lineTo(0,0),e.closePath(),e.fillStyle=o,e.fill(),e.stroke()}(n),n.setTransform(1,0,0,1,0,0),n.translate(e,t),n.beginPath(),n.moveTo(0,0),n.lineTo(0,-r),n.stroke();var i=Math.cos(Math.PI/4)*r;n.beginPath(),n.moveTo(0,0),n.lineTo(r,i-2*a),n.stroke();var u=Math.cos(Math.PI/4)*r;n.beginPath(),n.moveTo(0,0),n.lineTo(-r,u-2*a),n.stroke(),n.setTransform(1,0,0,1,0,0)}(a,f,n,l.centerCanonCoreRadius,"#FFFFFF",5),h(e.bulletsArr,n,a,f,l.centerCanonCoreRadius,e.bulletSpeed),function(e,t,n,r){t.forEach(function(t){t.draw(e,n,r)})}(n,e.enemysArr,a,f),e.enemysArr.forEach(function(e){e.update()}),e.enemysArr=(0,s.isTheyCollideAndReturnSecondFilteredArr)(e.bulletsArr,e.enemysArr),e.bulletsArr=v(e.bulletsArr,r,o),requestAnimationFrame(w)}}(d);E=r,R=o,O="#001D2E",(b=e).fillStyle=O,b.fillRect(0,0,E,R),w()}},{key:"componentWillUnmount",value:function(){this.battleCanvasRef.removeEventListener("mousemove",_),window.removeEventListener("keydown",p),this.battleCanvasRef=null,this.bgCanvasRef=null}}]),n}();t.default=b},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTheyCollideAndReturnSecondFilteredArr=void 0;var r=n(72),o=(t.isTheyCollideAndReturnSecondFilteredArr=function(e,t){var n=t;return e.forEach(function(e){n=n.filter(function(t){if(!o(e.x,e.y,r.BULLET_RADIUS,t.x,t.y,t.radius))return t})}),n},function(e,t,n,r,o,a){var i=Math.abs(r-e),u=Math.abs(o-t);return Math.sqrt(i*i+u*u)<=n+a})},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(106),a=n(72);n(107);var i=2*Math.PI/360,u=function(){function e(t,n,r,o,a,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.v=1|r,this.deg=30|a,this.type=o,this.radius=30|i}return r(e,[{key:"draw",value:function(e,t,n){if(this.type===o.YELLOW_GUN_RUNNER){if(!e)throw new Error(" canvas context not setted!! ");!function(e,t,n,r){t.save(),t.translate(n,r),t.beginPath(),t.fillStyle="#F5AF5F",t.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),t.fill(),t.restore()}(this,e,t,n)}}},{key:"update",value:function(){this.type===o.YELLOW_GUN_RUNNER&&(this.x=Math.cos(i*this.deg*this.v)*a.OUTTER_ROUND_RADIUS,this.y=Math.sin(i*this.deg*this.v)*a.OUTTER_ROUND_RADIUS,this.deg+=1,this.deg>=360&&(this.deg=0))}}]),e}();t.default=u},154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(70).combineReducers)({state:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}});t.default=r},168:function(e,t,n){"use strict";var r=f(n(2)),o=f(n(166)),a=n(150),i=n(70),u=n(151),l=f(n(154)),s=f(n(107));function f(e){return e&&e.__esModule?e:{default:e}}var c=(0,i.applyMiddleware)()(i.createStore)(l.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.default.render(r.default.createElement(a.Provider,{store:c},r.default.createElement(u.BrowserRouter,null,r.default.createElement("div",null,r.default.createElement(u.Switch,null,r.default.createElement(u.Route,{path:"/",component:s.default}))))),document.querySelector(".container"))},374:function(e,t,n){n(373),e.exports=n(168)},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.centerCanonCoreRadius=40,t.OUTTER_ROUND_RADIUS=350,t.BULLET_SPEED=5,t.HOW_MANY_FRAMES_COUNT_OUT_OF_BORDER_BULLETS=60,t.BULLET_RADIUS=5}});