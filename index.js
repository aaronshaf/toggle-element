!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(5),i=o(r);customElements.define("shaf-toggle",i.default)},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,a,s=[];for(a=arguments.length;a-- >2;)F.push(arguments[a]);for(n&&n.children&&(F.length||F.push(n.children),delete n.children);F.length;)if((r=F.pop())instanceof Array)for(a=r.length;a--;)F.push(r[a]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?s[s.length-1]+=r:(s.push(r),o=i));var l=new t(e,n||void 0,s);return A.vnode&&A.vnode(l),l}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function a(e){return"function"==typeof e}function s(e){return"string"==typeof e}function l(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function u(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,a={},l=a,c=s(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,u=0;u<o.length-1;u++)l=l[o[u]]||(l[o[u]]=!u&&e.state[o[u]]||{});l[o[u]]=c,e.setState(a)}}function d(e){!e._dirty&&(e._dirty=!0)&&1==Q.push(e)&&(A.debounceRendering||V)(f)}function f(){var e,t=Q;for(Q=[];e=t.pop();)e._dirty&&T(e)}function p(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(v(e),t||G)}function m(e,t){return s(t)?e instanceof Text:s(t.nodeName)?g(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||p(t):void 0}function g(e,t){return e.normalizedNodeName===t||H(e.nodeName)===H(t)}function v(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function x(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=l(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||s(o)||s(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!s(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||J[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html);else if("o"==t[0]&&"n"==t[1]){var c=e._listeners||(e._listeners={});t=H(t.substring(2)),o?c[t]||e.addEventListener(t,k,!!K[t]):c[t]&&e.removeEventListener(t,k,!!K[t]),c[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)y(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var u=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",H(u[1])):e.removeAttribute(t):"object"==typeof o||a(o)||(u?e.setAttributeNS("http://www.w3.org/1999/xlink",H(u[1]),o):e.setAttribute(t,o))}else e.className=o||""}function y(e,t,n){try{e[t]=n}catch(e){}}function k(e){return this._listeners[e.type](A.event&&A.event(e)||e)}function _(e){if(b(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||H(e.nodeName);(X[t]||(X[t]=[])).push(e)}}function w(e,t){var n=H(e),o=X[n]&&X[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function C(){for(var e;e=Y.pop();)A.afterMount&&A.afterMount(e),e.componentDidMount&&e.componentDidMount()}function N(e,t,n,o,r,i){Z++||($=r instanceof SVGElement);var a=E(e,t,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--Z||i||C(),a}function E(e,t,n,o){for(var r=t&&t.attributes;p(t);)t=h(t,n);if(null==t&&(t=""),s(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue!=t&&(e.nodeValue=t),e;O(e)}return document.createTextNode(t)}if(a(t.nodeName))return B(e,t,n,o);var i=e,l=t.nodeName,c=$,u=t.children;if(s(l)||(l=String(l)),$="svg"===l||"foreignObject"!==l&&$,e){if(!g(e,l)){for(i=w(l,$);e.firstChild;)i.appendChild(e.firstChild);O(e)}}else i=w(l,$);u&&1===u.length&&"string"==typeof u[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=u[0]&&(i.firstChild.nodeValue=u[0]):(u&&u.length||i.firstChild)&&S(i,u,n,o);var d=i[q];if(!d){i[q]=d={};for(var f=i.attributes,m=f.length;m--;)d[f[m].name]=f[m].value}return P(i,t.attributes,d),r&&"function"==typeof r.ref&&(d.ref=r.ref)(i),$=c,i}function S(e,t,n,o){var r,i,s,l,c=e.childNodes,u=[],d={},f=0,p=0,h=c.length,g=0,v=t&&t.length;if(h)for(var b=0;b<h;b++){var x=c[b],y=v?(i=x._component)?i.__key:(i=x[q])?i.key:null:null;y||0===y?(f++,d[y]=x):u[g++]=x}if(v)for(var b=0;b<v;b++){s=t[b],l=null;var y=s.key;if(null!=y)f&&y in d&&(l=d[y],d[y]=void 0,f--);else if(!l&&p<g){for(r=p;r<g;r++)if(i=u[r],i&&m(i,s)){l=i,u[r]=void 0,r===g-1&&g--,r===p&&p++;break}!l&&p<g&&a(s.nodeName)&&o&&(l=u[p],u[p++]=void 0)}l=E(l,s,n,o),l&&l!==e&&l!==c[b]&&e.insertBefore(l,c[b]||null)}if(f)for(var b in d)d[b]&&O(d[b]);p<g&&M(u)}function M(e,t){for(var n=e.length;n--;)e[n]&&O(e[n],t)}function O(e,t){var n=e._component;n?U(n,!t):(e[q]&&e[q].ref&&e[q].ref(null),t||_(e),e.childNodes&&e.childNodes.length&&M(e.childNodes,t))}function P(e,t,n){for(var o in n)t&&o in t||null==n[o]||x(e,o,n[o],n[o]=void 0,$);if(t)for(var r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||x(e,r,n[r],n[r]=t[r],$)}function L(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function j(e,t,n){var o=new e(t,n),r=ee[e.name];if(D.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function z(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&A.syncComponentUpdates===!1&&e.base?d(e):T(e,1,r)),e.__ref&&e.__ref(e))}function T(e,t,n,i){if(!e._disable){var s,l,c,u,d=e.props,f=e.state,m=e.context,g=e.prevProps||d,b=e.prevState||f,x=e.prevContext||m,y=e.base,k=e.nextBase,_=y||k,w=e._component;if(y&&(e.props=g,e.state=b,e.context=x,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(d,f,m)===!1?s=!0:e.componentWillUpdate&&e.componentWillUpdate(d,f,m),e.props=d,e.state=f,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!s){for(e.render&&(l=e.render(d,f,m)),e.getChildContext&&(m=o(r(m),e.getChildContext()));p(l);)l=h(l,m);var E,S,M=l&&l.nodeName;if(a(M)){c=w;var P=v(l);c&&c.constructor===M?z(c,P,1,m):(E=c,c=j(M,P,m),c.nextBase=c.nextBase||k,c._parentComponent=e,e._component=c,z(c,P,0,m),T(c,1,n,!0)),S=c.base}else u=_,E=w,E&&(u=e._component=null),(_||1===t)&&(u&&(u._component=null),S=N(u,l,m,n||!y,_&&_.parentNode,!0));if(_&&S!==_&&c!==w){var L=_.parentNode;L&&S!==L&&(L.replaceChild(S,_),E||(_._component=null,O(_)))}if(E&&U(E,S!==_),e.base=S,S&&!i){for(var B=e,D=e;D=D._parentComponent;)(B=D).base=S;S._component=B,S._componentConstructor=B.constructor}}!y||n?Y.unshift(e):s||(e.componentDidUpdate&&e.componentDidUpdate(g,b,x),A.afterUpdate&&A.afterUpdate(e));var R,F=e._renderCallbacks;if(F)for(;R=F.pop();)R.call(e);Z||i||C()}}function B(e,t,n,o){for(var r=e&&e._component,i=e,a=r&&e._componentConstructor===t.nodeName,s=a,l=v(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(z(r,l,3,n,o),e=r.base):(r&&!a&&(U(r,!0),e=i=null),r=j(t.nodeName,l,n),e&&!r.nextBase&&(r.nextBase=e,i=null),z(r,l,1,n,o),e=r.base,i&&e!==i&&(i._component=null,O(i))),e}function U(e,t){A.beforeUnmount&&A.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?U(o,t):n&&(n[q]&&n[q].ref&&n[q].ref(null),e.nextBase=n,t&&(b(n),L(e)),M(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function D(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function R(e,t,n){return N(n,e,{},!1,t)}var A={},F=[],W={},H=function(e){return W[e]||(W[e]=e.toLowerCase())},I="undefined"!=typeof Promise&&Promise.resolve(),V=I?function(e){I.then(e)}:setTimeout,G={},q="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",J={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},K={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Q=[],X={},Y=[],Z=0,$=!1,ee={};o(D.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=u(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),d(this)},forceUpdate:function(){T(this,2)},render:function(){}}),e.h=n,e.cloneElement=c,e.Component=D,e.render=R,e.rerender=f,e.options=A})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r);t.default=function(){return i.default.h("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.h("title",null,"switch-check"),i.default.h("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),c=o(l),u=n(7),d=o(u),f=n(2),p=o(f),h=n(4),m=o(h),g=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInputChange=n.handleInputChange.bind(n),n.handleClick=n.handleClick.bind(n),n.handleFocus=n.setState.bind(n,{hasFocus:!0},function(){}),n.handleBlur=n.setState.bind(n,{hasFocus:!1},function(){}),n.input=e.input,n.state={checked:!(!e.input.checked&&!e.defaultChecked),hasFocus:!1},n}return a(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void(this.input.props.checked||this.setState({checked:t.checked}))}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"handleInputChange",value:function(){this.setState({checked:this.input.checked})}},{key:"componentDidMount",value:function(){this.input.addEventListener("focus",this.handleFocus),this.input.addEventListener("blur",this.handleBlur),this.input.addEventListener("change",this.handleInputChange)}},{key:"componentWillUnmount",value:function(){this.input.removeEventListener("focus",this.handleFocus),this.input.removeEventListener("blur",this.handleBlur),this.input.removeEventListener("change",this.handleInputChange)}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.icons,this.props);delete n.className,delete n.icons;var o=(0,d.default)("shaf-toggle",{"shaf-toggle--checked":this.state.checked,"shaf-toggle--focus":this.state.hasFocus,"shaf-toggle--disabled":this.props.disabled},t);return c.default.h("div",{className:o,onClick:this.handleClick,onTouchEnd:this.handleClick},c.default.h("div",{className:"shaf-toggle-track"},c.default.h("div",{className:"shaf-toggle-track-check"},c.default.h(p.default,null)),c.default.h("div",{className:"shaf-toggle-track-x"},c.default.h(m.default,null))),c.default.h("div",{className:"shaf-toggle-thumb"}))}}]),t}(l.Component);t.default=g,g.displayName="Toggle"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r);t.default=function(){return i.default.h("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.h("title",null,"switch-x"),i.default.h("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),a=n(3),s=o(a),l=n(8),c=o(l),u=n(6),d=o(u);t.default=(0,c.default)({attributeChangedCallback:function(e,t,n){this.rendered&&this.updateRendering()},connectedCallback:function(){if(this.container=document.createElement("div"),document.body.attachShadow){this._shadowRoot=this.container.attachShadow({mode:"open"});var e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(d.default)),this._shadowRoot.appendChild(e)}this.appendChild(this.container),this.input=this.querySelector("input"),this.input.className+=" shaf-screenreader-only",this.updateRendering()},updateRendering:function(){var e=this._shadowRoot||this.container;i.default.render(i.default.h(s.default,{input:this.input}),e,e.querySelector(":not(style)")),this.rendered=!0}}),document.addEventListener("DOMContentLoaded",function(){if(!document.body.attachShadow){var e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(d.default)),document.head.insertBefore(e,document.head.firstChild)}var t=document.createElement("style");t.type="text/css",t.appendChild(document.createTextNode("shaf-toggle {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 4px;\n  line-height: 1rem;\n}\n\n.shaf-screenreader-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: fixed;\n  width: 1px;\n}")),document.head.insertBefore(t,document.head.firstChild)})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=".shaf-toggle {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.shaf-toggle--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.25s;\n  transition: opacity 0.25s;\n}\n\n.shaf-toggle-track {\n  width: 50px;\n  height: 24px;\n  padding: 0;\n  border-radius: 30px;\n  background-color: #4D4D4D;\n}\n\n.shaf-toggle--focus .shaf-toggle-track {\n  -webkit-transition: background-color 0.2s ease;\n  -moz-transition: background-color 0.2s ease;\n  transition: background-color 0.2s ease;\n}\n\n.shaf-toggle:hover:not(.shaf-toggle--disabled) .shaf-toggle-track {\n  background-color: #000000;\n}\n\n.shaf-toggle--checked .shaf-toggle-track {\n  background-color: #19AB27;\n}\n\n.shaf-toggle--checked:hover:not(.shaf-toggle--disabled) .shaf-toggle-track {\n  background-color: #128D15;\n}\n\n.shaf-toggle-track-check {\n  position: absolute;\n  width: 14px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  left: 8px;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.shaf-toggle--checked .shaf-toggle-track-check {\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.shaf-toggle-track-x {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  right: 10px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.shaf-toggle--checked .shaf-toggle-track-x {\n  opacity: 0;\n}\n\n.shaf-toggle-thumb {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #4D4D4D;\n  border-radius: 50%;\n  background-color: #FAFAFA;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  -webkit-transition: left 0.25s ease, box-shadow 0.25s ease;\n  -moz-transition: left 0.25s ease, box-shadow 0.25s ease;\n  transition: left 0.25s ease, box-shadow 0.25s ease;\n  will-change: left, box-shadow;\n}\n\n.shaf-toggle--checked .shaf-toggle-thumb {\n  left: 27px;\n  border-color: #19AB27;\n}\n\n.shaf-toggle--focus .shaf-toggle-thumb {\n  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;\n  -moz-box-shadow: 0px 0px 3px 2px #0099E0;\n  box-shadow: 0px 0px 2px 3px #0099E0;\n}\n\n.shaf-toggle:active:not(.shaf-toggle--disabled) .shaf-toggle-thumb {\n  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;\n  -moz-box-shadow: 0px 0px 5px 5px #0099E0;\n  box-shadow: 0px 0px 5px 5px #0099E0;\n}"},function(e,t,n){var o,r;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()},function(e,t){function n(e){function t(){var e="undefined"!=typeof Reflect?Reflect.construct(HTMLElement,[],t):HTMLElement.call(Object.create(t.prototype));return e.initialize&&e.initialize(),e}return Object.setPrototypeOf(t,HTMLElement),t.prototype=Object.create(HTMLElement.prototype),Object.keys(e).forEach(function(n){t.prototype[n]=e[n]}),t}e.exports=n}]);