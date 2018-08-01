var semver = require('semver');
var fs = require('fs');
var CHARSET = 'utf8';

function processSingleFile(inFile, inIncArgs) {
  var packageRaw = fs.readFileSync(inFile, CHARSET).toString();
  var packageContent = JSON.parse(packageRaw);
  var version = packageContent.version;
  var newVersion;

  inIncArgs.unshift(version);
  newVersion = semver.inc.apply(semver, inIncArgs);

  fs.writeFileSync(
    inFile,
    packageRaw.replace(`"version": "${version}"`, `"version": "${newVersion}"`),
    CHARSET
  );
}

module.exports = function process(inOptions) {
  if (inOptions.enabled) {
    var files = inOptions.files;
    files.forEach(function(file){
      processSingleFile(file, inOptions.incArgs );
    })
  }
};
