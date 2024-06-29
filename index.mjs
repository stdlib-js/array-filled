// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-floating-point-data-type@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-boolean-data-type@v0.0.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/iter-length@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var w=p(),b=v.get("dtypes.default");function c(){var p,v,c,x,y,u,E;if(v=arguments.length,(v-=1)>=0&&t(arguments[v])?(c=arguments[v],v-=1):c=b,null===(x=m(c)))throw new TypeError(g("00j2Y",c));if("generic"===c){if(v<=0)return[];if(p=arguments[0],E=arguments[1],1===v){if(s(E)?u=E:i(E)&&(u=E.length),void 0!==u)return j(p,u);if(n(E))throw new Error(g("00j04"));if(o(E)){if(!1===w)throw new TypeError(g("00j2Z",E));if(!d(E[a]))throw new TypeError(g("00j2a",E));if(E=E[a](),!d(E.next))throw new TypeError(g("00j2a",E));return function(e,r){var t;for(t=[];!e.next().done;)t.push(r);return t}(E,p)}throw new TypeError(g("00j2a",E))}if(n(E))throw new Error(g("00j04"));throw new TypeError(g("00j2a",E))}if(v<=0)return new x(0);if(1===v)if(i(E=arguments[1]))y=new x(E.length);else if(n(E))y=new x(E);else if(s(E))y=new x(E);else{if(!o(E))throw new TypeError(g("00j2a",E));if(!1===w)throw new TypeError(g("00j2Z",E));if(!d(E[a]))throw new TypeError(g("00j2a",E));if(E=E[a](),!d(E.next))throw new TypeError(g("00j2a",E));y=new x(f(E))}else y=2===v?new x(arguments[1],arguments[2]):new x(arguments[1],arguments[2],arguments[3]);return y.length>0&&(p=arguments[0],e(c)?function(e,r){var t;for(t=0;t<e.length;t++)e.set(r,t)}(y,p):r(c)?l(y.length,p?1:0,h(y,0),1):l(y.length,p,y,1)),y}export{c as default};
//# sourceMappingURL=index.mjs.map
