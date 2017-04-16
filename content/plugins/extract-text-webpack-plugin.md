---
title: ExtractTextWebpackPlugin
source: https://raw.githubusercontent.com/webpack-contrib/extract-text-webpack-plugin/master/README.md
edit: https://github.com/webpack-contrib/extract-text-webpack-plugin/edit/master/README.md
---
## 安装

```bash
# for webpack 2
npm install --save-dev extract-text-webpack-plugin
# for webpack 1
npm install --save-dev extract-text-webpack-plugin@1.0.1
```

## 使用

> :警告: 如果使用 针对 webpack 1 的版本, 请看 [分支 webpack-1 的文档](https://github.com/webpack/extract-text-webpack-plugin/blob/webpack-1/README.md).

```js
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}
```

它会将所有的「入口 chunk(entry chunks)」中的 `require("style.css")` 移动到独立分离的 css 文件。因此，你的样式不再内联到 javascript 里面，但会放到一个单独的 css 包文件 (`styles.css`)当中。 如果你的样式文件大小较大，这会更快，因为样式文件会跟 javascript 包并行加载。

|优点|缺点|
|:---------|:------|
| 更少 style 标签 (旧版本的 IE 浏览器有限制) | 额外的 HTTP 请求 |
| CSS SourceMap (使用 `devtool: "source-map"` 和 `css-loader?sourceMap` 配置) | 更长的编译时间 |
| CSS 请求并行 | 没有运行时的公共路径修改 |
| CSS 单独缓存 | 没有热替换 |
| 更快的浏览器运行时 (更少代码和 DOM 的运行) | ... |

## 配置

```js
new ExtractTextPlugin(options: filename | object)
```

|名称|类型|描述|
|:--:|:--:|:----------|
|**`id`**|`{String}`|此插件实例的唯一id。（仅限高级用途，默认情况下自动生成）|
|**`filename`**|`{String|Function}`|生成文件的文件名。可能包含 `[name]`, `[id]` and `[contenthash]`|
|**`allChunks`**|`{Boolean}`|向所有额外的 chunk 提取（默认只提取初始加载模块）|
|**`disable`**|`{Boolean}`|禁用插件|
|**`ignoreOrder`**|`{Boolean}`|禁用顺序检查 (对 CSS Modules 有用!), 默认 `false`|

* `[name]` chunk 的名称
* `[id]` chunk 的数量
* `[contenthash]` 提取文件根据内容生成的哈希

> :警告: `ExtractTextPlugin` 对 ** 每个入口 `chunk` ** 都生成对应的一个文件, 所以当你配置多个入口 `chunk` 的时候，你必须使用 `[name]`, `[id]` or `[contenthash]`.

#### `#extract`

```js
ExtractTextPlugin.extract(options: loader | object)
```

从一个已存在的加载器 (`loader`) 中创建一个 提取 (`extracting`) 加载器。支持这些加载器类型： `{ loader: [name]-loader -> {String}, options: {} -> {Object} }`.

|名称|类型|描述|
|:--:|:--:|:----------|
|**`options.use`**|`{String}`/`{Array}`/`{Object}`|_(必填)_, 加载器 (`Loader`), 被用于将资源转换成一个输出的 `CSS` 模块 |
|**`options.fallback`**|`{String}`/`{Array}`/`{Object}`| 加载器 (例如 `'style-loader'`), 应用于当 css 没有被提取(也就是一个额外的 chunk，当 `allChunks: false`)|
|**`options.publicPath`**|`{String}`|对加载器的 `publicPath` 配置重写|


#### 多个实例

这也是一个 提取 (`extract`) 函数的实例。如果你有多于一个 `ExtractTextPlugin` 插件 你应使用这种办法。

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 多个提取实例
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
    ]
  },
  plugins: [
    extractCSS,
    extractLESS
  ]
};
```

### Extracting Sass or LESS

The configuration is the same, switch out `sass-loader` for `less-loader` when necessary.

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ]
}
```

### Modify filename

`filename` parameter could be `Function`. It passes `getPath` to process the format like `css/[name].css` and returns the real file name, `css/js/a.css`. You can replace `css/js` with `css` then you will get the new path `css/a.css`.


```js
entry: {
  'js/a': "./a"
},
plugins: [
  new ExtractTextPlugin({
    filename:  (getPath) => {
      return getPath('css/[name].css').replace('css/js', 'css');
    },
    allChunks: true
  })
]
```

## 维护者

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">
        </br>
        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">
        </br>
        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">
        </br>
        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">
        </br>
        <a href="https://github.com/TheLarkInn">Sean Larkin</a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/extract-text-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/extract-text-webpack-plugin

[node]: https://img.shields.io/node/v/extract-text-webpack-plugin.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-contrib/extract-text-webpack-plugin.svg
[deps-url]: https://david-dm.org/webpack-contrib/extract-text-webpack-plugin

[tests]: http://img.shields.io/travis/webpack-contrib/extract-text-webpack-plugin.svg
[tests-url]: https://travis-ci.org/webpack-contrib/extract-text-webpack-plugin

[cover]: https://coveralls.io/repos/github/webpack-contrib/extract-text-webpack-plugin/badge.svg
[cover-url]: https://coveralls.io/github/webpack-contrib/extract-text-webpack-plugin

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
