[![@nuxt-modules/lazy-load](https://lazy-load-nm.netlify.app/preview.png)](https://lazy-load-nm.netlify.app)

# @nuxt-modules/compression [WIP]

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Lazy Loading Images module for [Nuxt 3](https://v3.nuxtjs.org)

- [✨ &nbsp;Release Notes](https://github.com/nuxt-modules/lazy-load/releases)
- [📖 &nbsp;Read the documentation](https://lazy-load-nc.netlify.app)

## Features

- Nuxt 3 ready
- Easy Lazy Loading Images
- Advanced configuration using Lozad.js
- Handy composable useLazyLoad
- TypeScript support

[📖 &nbsp;Read the documentation](https://lazy-load-nc.netlify.app)

## Setup

```sh
yarn add @nuxt-modules/lazy-load # yarn
npm i @nuxt-modules/lazy-load # npm
```

## Basic usage

Firstly, you need to add `@nuxt-modules/lazy-load` to your Nuxt config.

```javascript
// nuxt.config.js

{
  buildModules: [
    ['@nuxt-modules/lazy-load']
  ]
}
```

Then you can start using `@nuxt-modules/lazy-load` in your setup function!

```ts
<script setup lang="ts">
const { init } = useLazyLoad();

onMounted(() => {
  init()
})
</script>
```

Lastly, let's add a `lazy` class and change `src` attribute to `data-src`

```html
<img class="lazy" data-src="https://path-to-image.jpg"/>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxt-modules/lazy-load/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxt-modules/lazy-load

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxt-modules/lazy-load.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxt-modules/lazy-load

[github-actions-ci-src]: https://github.com/nuxt-modules/lazy-load/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-modules/lazy-load/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-modules/lazy-load.svg
[codecov-href]: https://codecov.io/gh/nuxt-modules/lazy-load

[license-src]: https://img.shields.io/npm/l/@nuxt-modules/lazy-load.svg
[license-href]: https://npmjs.com/package/@nuxt-modules/lazy-load
