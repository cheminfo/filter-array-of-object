# filter-array-of-object

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

The goal is to be able based on input values in n HTML form to easily filter
an array of objects.

The field names should have as names the key followed by an underscore and
by one of the following possibilities:

- equals (or nothing): if the value must be an exact match (number or string)
- min: if the value is a number and must be >= to the value
- max: if the value is a number and must be <= to the value
- includes: if the value is a string and should include the value

## Installation

`$ npm i filter-array-of-object`

## Usage

```js
import filter from 'filter-array-of-object';

let array = [
  { id: 1, bp: 100, mp: 0, name: 'water' },
  { id: 2, bp: 65, mp: -98, name: 'methanol' },
  { id: 3, bp: 78, mp: -114, name: 'ethanol' },
  { id: 4, bp: 97, mp: -126, name: 'n-propanol' },
  { id: 5, bp: 118, mp: -90, name: 'n-butanol' },
];

const results = filter(array, {
  bp_min: 60,
  bp_max: 100,
  name_includes: 'eth',
});
```

## [API Documentation](https://cheminfo.github.io/filter-array-of-object/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/filter-array-of-object.svg
[npm-url]: https://www.npmjs.com/package/filter-array-of-object
[ci-image]: https://github.com/cheminfo/filter-array-of-object/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/cheminfo/filter-array-of-object/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/filter-array-of-object.svg
[download-url]: https://www.npmjs.com/package/filter-array-of-object
