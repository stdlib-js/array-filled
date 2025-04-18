<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# filledarray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a filled array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-filled
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var filledarray = require( '@stdlib/array-filled' );
```

#### filledarray( \[dtype] )

Creates a filled array having a specified [data type][@stdlib/array/dtypes] `dtype`.

```javascript
var arr = filledarray();
// returns <Float64Array>
```

By default, the output array [data type][@stdlib/array/dtypes] is `float64` (i.e., a [typed array][mdn-typed-array]). To specify an alternative [data type][@stdlib/array/dtypes], provide a `dtype` argument.

```javascript
var arr = filledarray( 'int32' );
// returns <Int32Array>
```

#### filledarray( value, length\[, dtype] )

Returns a filled array having a specified `length`.

```javascript
var arr1 = filledarray( 1.0, 5 );
// returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]

var arr2 = filledarray( 1, 5, 'uint8' );
// returns <Uint8Array>[ 1, 1, 1, 1, 1 ]
```

#### filledarray( value, array\[, dtype] )

Creates a filled array from another array (or array-like object).

```javascript
var arr0 = {
    '0': 0.5,
    '1': 0.5,
    '2': 0.5,
    'length': 3
};

var arr1 = filledarray( 1.0, arr0 );
// returns <Float64Array>[ 1.0, 1.0, 1.0 ]

var arr2 = filledarray( 2.0, arr1 );
// returns <Float64Array>[ 2.0, 2.0, 2.0 ]

var arr3 = filledarray( 3, arr1, 'int32' );
// returns <Int32Array>[ 3, 3, 3 ]
```

#### filledarray( value, iterable\[, dtype] )

Creates a filled array from an iterable.

```javascript
var iterConstant = require( '@stdlib/iter-constant' );

var it = iterConstant( 3.0, {
    'iter': 3
});
var arr1 = filledarray( 1.0, it );
// returns <Float64Array>[ 1.0, 1.0, 1.0 ]

var arr2 = filledarray( 1.0, it, 'float32' );
// returns <Float32Array>[ 1.0, 1.0, 1.0 ]
```

#### filledarray( value, buffer\[, byteOffset\[, length]]\[, dtype] )

Returns a filled [typed array][mdn-typed-array] view of an [`ArrayBuffer`][mdn-arraybuffer].

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

var buf = new ArrayBuffer( 32 );
var arr = filledarray( 1.0, buf );
// returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1.0, buf, 'float32' );
// returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1.0, buf, 16 );
// returns <Float64Array>[ 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1.0, buf, 16, 'float32' );
// returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1.0, buf, 16, 1 );
// returns <Float64Array>[ 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarray( 1, buf, 10, 4, 'int16' );
// returns <Int16Array>[ 1, 1, 1, 1 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Creating a generic [array][mdn-array] from an [`ArrayBuffer`][mdn-arraybuffer] is **not** supported.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var dtypes = require( '@stdlib/array-typed-real-dtypes' );
var filledarray = require( '@stdlib/array-filled' );

// Generate a random number:
var r = discreteUniform( 0, 100 );

// Get a list of array data types:
var dt = dtypes();

// Generate filled arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = filledarray( r, 10, dt[ i ] );
    console.log( arr );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-filled-by`][@stdlib/array/filled-by]</span><span class="delimiter">: </span><span class="description">create a filled array according to a provided callback function.</span>
-   <span class="package-name">[`@stdlib/array-typed`][@stdlib/array/typed]</span><span class="delimiter">: </span><span class="description">create a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-filled.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-filled

[test-image]: https://github.com/stdlib-js/array-filled/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-filled/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-filled/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-filled?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-filled.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-filled/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-filled/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-filled/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-filled/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-filled/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-filled/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-filled/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-filled/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-filled/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes

<!-- <related-links> -->

[@stdlib/array/filled-by]: https://github.com/stdlib-js/array-filled-by

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed

<!-- </related-links> -->

</section>

<!-- /.links -->
