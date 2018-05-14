# no-unhandledrejection [![Build Status](https://img.shields.io/circleci/project/github/Army-U/no-unhandledrejection.svg?style=flat-square)](https://circleci.com/gh/Army-U/no-unhandledrejection) [![npm package](https://img.shields.io/npm/v/no-unhandledrejection.svg?style=flat-square)](https://www.npmjs.com/package/no-unhandledrejection)

Simple lightweight (379B gzip size) processing `unhandledRejection` error library prevents `unhandledRejection` from causing program crashes. The usage scenario is that not all `async` functions need to be try catch.

## Install

```bash
$ npm i no-unhandledrejection -S
```

## Usage

```js
// Browser
import noUnhandledRejection from 'no-unhandledrejection'
noUnhandledRejection()

// Node
require('no-unhandledrejection')()

// With Sentry
require('no-unhandledrejection')({
  callback (e) {
    Raven.captureException(e)
  }
})
```

## Options

### onlyProduction

Type: `Boolean`
Default: `false`

Enable this plugin only under the production mode (`process.env.NODE_ENV === 'production'`).

### callback

Type: `Function`
Default: `noop`

A generic callback function that handles unhandledRejection. Usually used for reporting such as Error Tracking or global error notification.

## License

Copyright (c) 2017-present, Army-U. Released under the [MIT](https://opensource.org/licenses/MIT) License.
