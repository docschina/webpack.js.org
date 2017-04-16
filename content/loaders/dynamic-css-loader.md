---
title: dynamic-css-loader
source: https://raw.githubusercontent.com/webpack-contrib/dynamic-css-loader/master/README.md
edit: https://github.com/webpack-contrib/dynamic-css-loader/edit/master/README.md
---
## Install

```bash
npm install --save-dev dynamic-css-loader
```

## Usage

### Lorem

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Examples

**webpack.config.js**

```js
{
  test: /.../,
  use: ExtractTextPlugin.extract({
    use: [ ... ],
    fallback: [
      'dynamic-css-loader',
      'extract-loader',
    ],
  }),
},
```

**file.ext**

```js
// Source code here...
```

**bundle.js**

```js
require("dynamic-css-loader!./file.EXT");

// Bundle code here...
```

## Maintainers

```bash
https://api.github.com/users/MAINTAINER
```

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
          </br>
          Name
        </a>
      </td>
    </tr>
  <tbody>
</table>

[npm]: https://img.shields.io/npm/v/dynamic-css-loader.svg
[npm-url]: https://npmjs.com/package/dynamic-css-loader

[deps]: https://david-dm.org/webpack-contrib/dynamic-css-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/dynamic-css-loader

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack

[test]: http://img.shields.io/travis/webpack-contrib/dynamic-css-loader.svg
[test-url]: https://travis-ci.org/webpack-contrib/dynamic-css-loader

[cover]: https://codecov.io/gh/webpack-contrib/dynamic-css-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/dynamic-css-loader
