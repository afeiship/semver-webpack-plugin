# semver-webpack-plugin
> Semver webpack plugin

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]


## installation
```shell
npm install @jswork/semver-webpack-plugin
```

## usage:
```js
import SemverWebpackPlugin from '@jswork/semver-webpack-plugin';

// plugins:
plugiins:[
  new SemverWebpackPlugin({ enabled: true })
]
```

## options:
| Name     | Type     | Default                                  | Description            |
| -------- | -------- | ---------------------------------------- | ---------------------- |
| files    | Array    | ['./package.json']                       | Default files array.   |
| enabled  | Boolean  | true                                     | If enable this plugin. |
| callback | Function | semver.inc(inValue, 'prepatch','alpha'); | See `semver`           |


## development callback:
```conf
## oldVersion: 1.0.0
## newVersion: 1.0.1-alpha.0
```
```js
// semver.inc('1.0.0', 'prerelease','alpha')
function(inVersion){
  return this.inc(inVersion, 'prerelease','alpha');
}
```

## production callback:
```conf
## oldVersion: 1.0.1-alpha.30
## newVersion: 1.0.1
```
```js
// semver.valid( semver.coerce('1.0.1-alpha.30') )
function(inVersion){
  return this.valid(
    this.coerce(inVersion)
  );
}

```

## license
Code released under [the MIT license](https://github.com/afeiship/semver-webpack-plugin/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/semver-webpack-plugin
[version-url]: https://npmjs.org/package/@jswork/semver-webpack-plugin

[license-image]: https://img.shields.io/npm/l/@jswork/semver-webpack-plugin
[license-url]: https://github.com/afeiship/semver-webpack-plugin/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/semver-webpack-plugin
[size-url]: https://github.com/afeiship/semver-webpack-plugin/blob/master/dist/semver-webpack-plugin.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/semver-webpack-plugin
[download-url]: https://www.npmjs.com/package/@jswork/semver-webpack-plugin
