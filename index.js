var objectAssign = require('object-assign');
var process = require('./lib/process');

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function SemverWebpackPlugin(inOptions) {
  var options = objectAssign({
    files: ['./package.json'],
    enabled: undefined,
    incArgs: ['prepatch']
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
