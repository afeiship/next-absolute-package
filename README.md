# next-absolute-package
> Get root path package.json.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-absolute-package
```

## usage
```js
import '@feizheng/next-absolute-package';

nx.absolutePackage(); // { ...the whole package.json ... }
nx.absolutePackage('publishConfig.registry'); // https://registry.npmjs.org/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-absolute-package/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-absolute-package
[version-url]: https://npmjs.org/package/@jswork/next-absolute-package

[license-image]: https://img.shields.io/npm/l/@jswork/next-absolute-package
[license-url]: https://github.com/afeiship/next-absolute-package/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-absolute-package
[size-url]: https://github.com/afeiship/next-absolute-package/blob/master/dist/next-absolute-package.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-absolute-package
[download-url]: https://www.npmjs.com/package/@jswork/next-absolute-package
