# semver-webpack-plugin
> Semver webpack plugin


## install:
```shell
npm install -D @feizheng/semver-webpack-plugin
```

## usage:
```js
import SemverWebpackPlugin from '@feizheng/semver-webpack-plugin';

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
