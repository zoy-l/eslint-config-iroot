# eslint-config-iroot

## Installation

Install `eslint-config-iroot` via yarn or npm.

```bash
$ yarn add eslint-config-iroot -D
```

## Vue project

```bash
$ yarn add eslint-plugin-vue -D
```

## React project

```bash
$ yarn add eslint-plugin-react eslint-plugin-react-hooks -D
```

## Typescript need additional installation

```bash
$ yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

```javascript
module.exports = {
  root: true,
  extends: ['iroot/base'],
  extends: ['iroot/typescript'],
  extends: ['iroot/vue'],
  extends: ['iroot/react']
  // choose one
  // typescript extends base
}

// typescript extends base  For example, the ts-react project 'extends': ['iroot/react'],
// when initializing, ts/js are set automatically so there is no need to inherit typescript
```
