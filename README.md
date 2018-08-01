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
| Name    | Default            | Description            |
| ------- | ------------------ | ---------------------- |
| files   | ['./package.json'] | Default files array.   |
| enabled | true               | If enable this plugin. |
| incArgs | ['prepatch']       | See `semver`           |

