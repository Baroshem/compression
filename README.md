[![@nuxt-modules/compression](https://compression-nm.netlify.app/preview.png)](https://compression-nm.netlify.app)

# @nuxt-modules/compression

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Assets Compression module for [Nuxt 3](https://v3.nuxtjs.org)

- [✨ &nbsp;Release Notes](https://github.com/nuxt-modules/compression/releases)
- [📖 &nbsp;Read the documentation](https://compression-nm.netlify.app)

## Features

- Nuxt 3 ready
- Assets Compression using [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)
- Advanced configuration options
- TypeScript support

[📖 &nbsp;Read the documentation](https://compression-nm.netlify.app)

## Setup

```sh
yarn add @nuxt-modules/compression # yarn
npm i @nuxt-modules/compression # npm
```

## Basic usage

Firstly, you need to add `@nuxt-modules/compression` to your Nuxt config.

```javascript
// nuxt.config.js

{
  buildModules: [
    ['@nuxt-modules/compression']
  ]
}
```

And that's it! Now, the gzip compression will compress your static assets. For more configuration options (like brotli compression, filter assets, etc) please, visit the official docs.

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
