# semver-webpack-plugin
> Semver webpack plugin


## install:
```shell
npm install -D afeiship/semver-webpack-plugin
```

## usage:
```js
import SemverWebpackPlugin from 'semver-webpack-plugin';

// plugins:
plugiins:[
  new SemverWebpackPlugin({ enabled: true })
]
```

## options:
| Name     | Default                                  | Description            |
| -------- | ---------------------------------------- | ---------------------- |
| files    | ['./package.json']                       | Default files array.   |
| enabled  | true                                     | If enable this plugin. |
| callback | semver.inc(inValue, 'prepatch','alpha'); | See `semver`           |


## development callback:
```conf
## oldVersion: 1.0.0
## newVersion: 1.0.1-alpha.0
```
```js
// semver.inc('1.0.0', 'prepatch','alpha')
function(inVersion){
  return this.inc(inVersion, 'prepatch','alpha');
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
