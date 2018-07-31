var semver = require('semver');
var CHARSET = CHARSET;

module.exports = function process(inOptions) {
  if (inOptions.enabled) {

    var incArgs = inOptions.incArgs;
    var packageRaw = fs.readFileSync(inOptions.target, CHARSET).toString();
    var packageContent = JSON.parse(packageRaw);
    var version = packageContent.version;
    var newVersion;

    incArgs.unshift(version, incArgs);
    newVersion = semver.inc.apply(semver, incArgs);

    // Write away the package
    fs.writeFileSync(
      inOptions.target,
      packageRaw.replace(`"version": "${version}"`, `"version": "${newVersion}"`),
      CHARSET
    );

  }
};
