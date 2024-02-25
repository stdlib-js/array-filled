// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/iter-length@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var a=j(),v=f.get("dtypes.default");function w(){var j,f,w,g,c,b,x;if(f=arguments.length,(f-=1)>=0&&e(arguments[f])?(w=arguments[f],f-=1):w=v,null===(g=o(w)))throw new TypeError(p("00j2Y",w));if("generic"===w){if(f<=0)return[];if(j=arguments[0],x=arguments[1],1===f){if(r(x)?b=x:t(x)&&(b=x.length),void 0!==b)return m(j,b);if(s(x))throw new Error(p("00j04"));if(i(x)){if(!1===a)throw new TypeError(p("00j2Z",x));if(!n(x[l]))throw new TypeError(p("00j2a",x));if(x=x[l](),!n(x.next))throw new TypeError(p("00j2a",x));return function(e,r){var t;for(t=[];!e.next().done;)t.push(r);return t}(x,j)}throw new TypeError(p("00j2a",x))}if(s(x))throw new Error(p("00j04"));throw new TypeError(p("00j2a",x))}if(f<=0)return new g(0);if(1===f)if(t(x=arguments[1]))c=new g(x.length);else if(s(x))c=new g(x);else if(r(x))c=new g(x);else{if(!i(x))throw new TypeError(p("00j2a",x));if(!1===a)throw new TypeError(p("00j2Z",x));if(!n(x[l]))throw new TypeError(p("00j2a",x));if(x=x[l](),!n(x.next))throw new TypeError(p("00j2a",x));c=new g(h(x))}else c=2===f?new g(arguments[1],arguments[2]):new g(arguments[1],arguments[2],arguments[3]);return c.length>0&&(/^complex/.test(w)?function(e,r){var t;for(t=0;t<e.length;t++)e.set(r,t)}(c,arguments[0]):d(c.length,arguments[0],c,1)),c}export{w as default};
//# sourceMappingURL=index.mjs.map