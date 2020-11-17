(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var path = require('path');

  nx.absolutePackage = function (inPath) {
    var appPath = require('app-root-path').path;
    var pkg = require(path.join(appPath, 'package.json'));
    return inPath ? nx.get(pkg, inPath) : pkg;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.absolutePackage;
  }
})();
