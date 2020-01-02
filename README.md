# next-absolute-package
> Get root path package.json.

## installation
```bash
npm install -S @feizheng/next-absolute-package
```

## usage
```js
import '@feizheng/next-absolute-package';

nx.absolutePackage(); // { ...the whole package.json ... }
nx.absolutePackage('publishConfig.registry'); // https://registry.npmjs.org/
```
