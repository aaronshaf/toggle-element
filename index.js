!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(5),i=o(r);customElements.define("aaronshaf-toggle",i.default)},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,a,l=[];for(a=arguments.length;a-- >2;)D.push(arguments[a]);for(n&&n.children&&(D.length||D.push(n.children),delete n.children);D.length;)if((r=D.pop())instanceof Array)for(a=r.length;a--;)D.push(r[a]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?l[l.length-1]+=r:(l.push(r),o=i));var u=new t(e,n||void 0,l);return F.vnode&&F.vnode(u),u}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function a(e){return"function"==typeof e}function l(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,a={},u=a,c=l(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,s=0;s<o.length-1;s++)u=u[o[s]]||(u[o[s]]=!s&&e.state[o[s]]||{});u[o[s]]=c,e.setState(a)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==Q.push(e)&&(F.debounceRendering||G)(d)}function d(){var e,t=Q;for(Q=[];e=t.pop();)e._dirty&&B(e)}function p(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(b(e),t||I)}function v(e,t){return l(t)?e instanceof Text:l(t.nodeName)?m(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||p(t):void 0}function m(e,t){return e.normalizedNodeName===t||H(e.nodeName)===H(t)}function b(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=u(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||l(o)||l(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!l(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||J[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html);else if("o"==t[0]&&"n"==t[1]){var c=e._listeners||(e._listeners={});t=H(t.substring(2)),o?c[t]||e.addEventListener(t,k,!!K[t]):c[t]&&e.removeEventListener(t,k,!!K[t]),c[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)g(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var s=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",H(s[1])):e.removeAttribute(t):"object"==typeof o||a(o)||(s?e.setAttributeNS("http://www.w3.org/1999/xlink",H(s[1]),o):e.setAttribute(t,o))}else e.className=o||""}function g(e,t,n){try{e[t]=n}catch(e){}}function k(e){return this._listeners[e.type](F.event&&F.event(e)||e)}function x(e){if(_(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||H(e.nodeName);(X[t]||(X[t]=[])).push(e)}}function N(e,t){var n=H(e),o=X[n]&&X[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function C(){for(var e;e=Y.pop();)F.afterMount&&F.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){Z++||($=r instanceof SVGElement);var a=O(e,t,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--Z||i||C(),a}function O(e,t,n,o){for(var r=t&&t.attributes;p(t);)t=h(t,n);if(null==t&&(t=""),l(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue!=t&&(e.nodeValue=t),e;j(e)}return document.createTextNode(t)}if(a(t.nodeName))return A(e,t,n,o);var i=e,u=t.nodeName,c=$,s=t.children;if(l(u)||(u=String(u)),$="svg"===u||"foreignObject"!==u&&$,e){if(!m(e,u)){for(i=N(u,$);e.firstChild;)i.appendChild(e.firstChild);j(e)}}else i=N(u,$);s&&1===s.length&&"string"==typeof s[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=s[0]&&(i.firstChild.nodeValue=s[0]):(s&&s.length||i.firstChild)&&P(i,s,n,o);var f=i[q];if(!f){i[q]=f={};for(var d=i.attributes,v=d.length;v--;)f[d[v].name]=d[v].value}return M(i,t.attributes,f),r&&"function"==typeof r.ref&&(f.ref=r.ref)(i),$=c,i}function P(e,t,n,o){var r,i,l,u,c=e.childNodes,s=[],f={},d=0,p=0,h=c.length,m=0,b=t&&t.length;if(h)for(var _=0;_<h;_++){var y=c[_],g=b?(i=y._component)?i.__key:(i=y[q])?i.key:null:null;g||0===g?(d++,f[g]=y):s[m++]=y}if(b)for(var _=0;_<b;_++){l=t[_],u=null;var g=l.key;if(null!=g)d&&g in f&&(u=f[g],f[g]=void 0,d--);else if(!u&&p<m){for(r=p;r<m;r++)if(i=s[r],i&&v(i,l)){u=i,s[r]=void 0,r===m-1&&m--,r===p&&p++;break}!u&&p<m&&a(l.nodeName)&&o&&(u=s[p],s[p++]=void 0)}u=O(u,l,n,o),u&&u!==e&&u!==c[_]&&e.insertBefore(u,c[_]||null)}if(d)for(var _ in f)f[_]&&j(f[_]);p<m&&S(s)}function S(e,t){for(var n=e.length;n--;)e[n]&&j(e[n],t)}function j(e,t){var n=e._component;n?L(n,!t):(e[q]&&e[q].ref&&e[q].ref(null),t||x(e),e.childNodes&&e.childNodes.length&&S(e.childNodes,t))}function M(e,t,n){for(var o in n)t&&o in t||null==n[o]||y(e,o,n[o],n[o]=void 0,$);if(t)for(var r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||y(e,r,n[r],n[r]=t[r],$)}function E(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function T(e,t,n){var o=new e(t,n),r=ee[e.name];if(R.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function U(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&F.syncComponentUpdates===!1&&e.base?f(e):B(e,1,r)),e.__ref&&e.__ref(e))}function B(e,t,n,i){if(!e._disable){var l,u,c,s,f=e.props,d=e.state,v=e.context,m=e.prevProps||f,_=e.prevState||d,y=e.prevContext||v,g=e.base,k=e.nextBase,x=g||k,N=e._component;if(g&&(e.props=m,e.state=_,e.context=y,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,d,v)===!1?l=!0:e.componentWillUpdate&&e.componentWillUpdate(f,d,v),e.props=f,e.state=d,e.context=v),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!l){for(e.render&&(u=e.render(f,d,v)),e.getChildContext&&(v=o(r(v),e.getChildContext()));p(u);)u=h(u,v);var O,P,S=u&&u.nodeName;if(a(S)){c=N;var M=b(u);c&&c.constructor===S?U(c,M,1,v):(O=c,c=T(S,M,v),c.nextBase=c.nextBase||k,c._parentComponent=e,e._component=c,U(c,M,0,v),B(c,1,n,!0)),P=c.base}else s=x,O=N,O&&(s=e._component=null),(x||1===t)&&(s&&(s._component=null),P=w(s,u,v,n||!g,x&&x.parentNode,!0));if(x&&P!==x&&c!==N){var E=x.parentNode;E&&P!==E&&(E.replaceChild(P,x),O||(x._component=null,j(x)))}if(O&&L(O,P!==x),e.base=P,P&&!i){for(var A=e,R=e;R=R._parentComponent;)(A=R).base=P;P._component=A,P._componentConstructor=A.constructor}}!g||n?Y.unshift(e):l||(e.componentDidUpdate&&e.componentDidUpdate(m,_,y),F.afterUpdate&&F.afterUpdate(e));var W,D=e._renderCallbacks;if(D)for(;W=D.pop();)W.call(e);Z||i||C()}}function A(e,t,n,o){for(var r=e&&e._component,i=e,a=r&&e._componentConstructor===t.nodeName,l=a,u=b(t);r&&!l&&(r=r._parentComponent);)l=r.constructor===t.nodeName;return r&&l&&(!o||r._component)?(U(r,u,3,n,o),e=r.base):(r&&!a&&(L(r,!0),e=i=null),r=T(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,i=null),U(r,u,1,n,o),e=r.base,i&&e!==i&&(i._component=null,j(i))),e}function L(e,t){F.beforeUnmount&&F.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?L(o,t):n&&(n[q]&&n[q].ref&&n[q].ref(null),e.nextBase=n,t&&(_(n),E(e)),S(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function R(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function W(e,t,n){return w(n,e,{},!1,t)}var F={},D=[],z={},H=function(e){return z[e]||(z[e]=e.toLowerCase())},V="undefined"!=typeof Promise&&Promise.resolve(),G=V?function(e){V.then(e)}:setTimeout,I={},q="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",J={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},K={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Q=[],X={},Y=[],Z=0,$=!1,ee={};o(R.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=s(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){B(this,2)},render:function(){}}),e.h=n,e.cloneElement=c,e.Component=R,e.render=W,e.rerender=d,e.options=F})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r);t.default=function(){return i.default.h("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.h("title",null,"switch-check"),i.default.h("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),s=o(c),f=n(6),d=o(f),p=n(2),h=o(p),v=n(4),m=o(v),b=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleFocus=n.setState.bind(n,{hasFocus:!0},function(){}),n.handleBlur=n.setState.bind(n,{hasFocus:!1},function(){}),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return a(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void("checked"in this.props||this.setState({checked:t.checked}))}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,this.props);delete o.className,delete o.icons;var r=(0,d.default)("aaronshaf-toggle",{"aaronshaf-toggle--checked":this.state.checked,"aaronshaf-toggle--focus":this.state.hasFocus,"aaronshaf-toggle--disabled":this.props.disabled},n);return s.default.h("div",{className:r,onClick:this.handleClick,onTouchEnd:this.handleClick},s.default.h("div",{className:"aaronshaf-toggle-track"},s.default.h("div",{className:"aaronshaf-toggle-track-check"},s.default.h(h.default,null)),s.default.h("div",{className:"aaronshaf-toggle-track-x"},s.default.h(m.default,null))),s.default.h("div",{className:"aaronshaf-toggle-thumb"}),s.default.h("input",l({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"aaronshaf-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.Component);t.default=b,b.displayName="Toggle"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r);t.default=function(){return i.default.h("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.h("title",null,"switch-x"),i.default.h("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),s=n(3),f=o(s),d=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._checked=null,e._value=null,e}return a(t,e),l(t,[{key:"attributeChangedCallback",value:function(e,t,n){switch(e){case"checked":this._checked=n;break;case"value":this._value=n}this.rendered&&this._updateRendering()}},{key:"connectedCallback",value:function(){this._updateRendering()}},{key:"_updateRendering",value:function(){c.default.render(c.default.h(f.default,null),this,this.lastChild),this.rendered=!0}},{key:"checked",get:function(){return this._checked},set:function(e){this.setAttribute("checked",e)}},{key:"value",get:function(){return this._value},set:function(e){this.setAttribute("value",e)}}],[{key:"observedAttributes",get:function(){return["checked","value"]}}]),t}(HTMLElement);t.default=d},function(e,t,n){var o,r;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()}]);