// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill@v0.0.10-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/iter-length@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";var j=l();function w(e,r){var t;for(t=[];!e.next().done;)t.push(r);return t}function a(e,r){var t;for(t=0;t<e.length;t++)e.set(r,t);return e}function g(){var l,g,c,v,b,x,u;if(g=arguments.length,(g-=1)>=0&&e(arguments[g])?(c=arguments[g],g-=1):c="float64",null===(v=o(c)))throw new TypeError(p("00M2k",c));if("generic"===c){if(g<=0)return[];if(l=arguments[0],u=arguments[1],1===g){if(r(u)?x=u:t(u)&&(x=u.length),void 0!==x)return d(l,x);if(s(u))throw new Error(p("00M04"));if(i(u)){if(!1===j)throw new TypeError(p("00M2l",u));if(!n(u[h]))throw new TypeError(p("00M2m",u));if(u=u[h](),!n(u.next))throw new TypeError(p("00M2m",u));return w(u,l)}throw new TypeError(p("00M2m",u))}if(s(u))throw new Error(p("00M04"));throw new TypeError(p("00M2m",u))}if(g<=0)return new v(0);if(1===g)if(t(u=arguments[1]))b=new v(u.length);else if(s(u))b=new v(u);else if(r(u))b=new v(u);else{if(!i(u))throw new TypeError(p("00M2m",u));if(!1===j)throw new TypeError(p("00M2l",u));if(!n(u[h]))throw new TypeError(p("00M2m",u));if(u=u[h](),!n(u.next))throw new TypeError(p("00M2m",u));b=new v(f(u))}else b=2===g?new v(arguments[1],arguments[2]):new v(arguments[1],arguments[2],arguments[3]);return b.length>0&&(/^complex/.test(c)?a(b,arguments[0]):m(b.length,arguments[0],b,1)),b}export{g as default};
//# sourceMappingURL=index.mjs.map
