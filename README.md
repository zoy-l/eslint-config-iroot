# eslint-config-zmi

## Installation

Install `eslint-config-zmi` via yarn or npm.

```bash
$ yarn add eslint-config-zmi -D
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
  extends: ['zmi/base'],
  extends: ['zmi/typescript'],
  extends: ['zmi/vue'],
  extends: ['zmi/react']
  // choose one
  // typescript extends base
}

// typescript extends base  For example, the ts-react project 'extends': ['zmi/react'],
// when initializing, ts/js are set automatically so there is no need to inherit typescript
```
