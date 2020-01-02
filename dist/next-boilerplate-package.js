/*!
 * name: @feizheng/next-absolute-package
 * description: Get root path package.json.
 * url: https://github.com/afeiship/next-absolute-package
 * version: 1.0.0
 * date: 2019-12-17 00:00:38
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.absolutePackage = function() {
    //code goes here.
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.absolutePackage;
  }
})();

//# sourceMappingURL=next-absolute-package.js.map
