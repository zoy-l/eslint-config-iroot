# eslint-config-zmi

## Installation

Install `eslint-config-zmi` via yarn or npm.

```bash
$ yarn add eslint-config-zmi -D
```

```javascript
module.exports = {
  root: true,
  extends: ['zmi/base'],
  extends: ['zmi/typescript'],
  extends: ['zmi/vue'],
  extends: ['zmi/react']
}

// typescript extends base  For example, the ts-react project 'extends': ['zmi/react'],
// when initializing, ts/js are set automatically so there is no need to inherit typescript
```
