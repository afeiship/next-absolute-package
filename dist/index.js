/*!
 * name: @jswork/next-absolute-package
 * description: Get root path package.json.
 * homepage: https://github.com/afeiship/next-absolute-package
 * version: 1.0.0
 * date: 2020-11-17T10:26:56.184Z
 * license: MIT
 */

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
