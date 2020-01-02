/*!
 * name: @feizheng/next-absolute-package
 * description: Get root path package.json.
 * url: https://github.com/afeiship/next-absolute-package
 * version: 1.0.0
 * date: 2020-01-02 19:12:57
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var path = require('path');

  nx.absolutePackage = function(inPath) {
    var appPath = require('app-root-path').path;
    var pkg = require(path.join(appPath, 'package.json'));
    return inPath ? nx.get(pkg, inPath) : pkg;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.absolutePackage;
  }
})();

//# sourceMappingURL=next-absolute-package.js.map
