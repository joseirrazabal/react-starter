!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.index=t(require("react"),require("prop-types")):e.index=t(e.react,e["prop-types"])}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r=window.webpackJsonp_name_;window.webpackJsonp_name_=function(n,u,i){for(var c,a,f,p=0,s=[];n.length>p;p++)a=n[p],o[a]&&s.push(o[a][0]),o[a]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);for(r&&r(n,u,i);s.length;)s.shift()();if(i)for(p=0;i.length>p;p++)f=t(t.s=i[p]);return f};var n={},o={1:0};return t.e=function(e){function r(){c.onerror=c.onload=null,clearTimeout(a);var t=o[e];0!==t&&(t&&t[1](Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var n=o[e];if(0===n)return new Promise(function(e){e()});if(n)return n[2];var u=new Promise(function(t,r){n=o[e]=[t,r]});n[2]=u;var i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,t.nc&&c.setAttribute("nonce",t.nc),c.src=t.p+""+e+".js";var a=setTimeout(r,12e4);return c.onerror=c.onload=r,i.appendChild(c),u},t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default=function(e){return e&&e.__esModule?e:{default:e}}(n).default,e.exports=t.default},,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;t.length>r;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),f=n(a),p=r(8),s=n(p),l=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("div",{className:this.props.style.nuevo},"texto"))}}]),t}(a.Component);l.propTypes={style:s.default.object},t.default=l,e.exports=t.default},,,,,function(e,t){e.exports=require("prop-types")}])});