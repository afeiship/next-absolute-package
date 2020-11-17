(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.absolutePackage when no path:', function () {
      var data = nx.absolutePackage();
      expect(data.name).toBe('@jswork/next-absolute-package');
      expect(data.description).toBe('Get root path package.json.');
    });

    test('nx.absolutePackage when with path:', function () {
      var reg = nx.absolutePackage('publishConfig.registry');
      expect(reg).toBe('https://registry.npmjs.org');
    });
  });
})();
