var objectAssign = require('object-assign');
var process = require('./lib/process');

var RETURN_VALUE = function(inValue){
  return this.inc(inValue, 'prepatch','alpha');
};

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function SemverWebpackPlugin(inOptions) {
  var options = objectAssign({
    files: ['./package.json'],
    enabled: undefined,
    callback: RETURN_VALUE
  }, inOptions);

  this.options = options;
}


/**
 * Implement the plugin
 */
SemverWebpackPlugin.prototype.apply = function (compiler) {
  var self = this;
  compiler.plugin('compile', function (compilation) {
    return process(self.options);
  });
};

module.exports = SemverWebpackPlugin;
