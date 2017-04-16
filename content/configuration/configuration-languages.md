---
title: 使用不同语言进行配置(Configuration Languages)
sort: 2
contributors:
  - sokra
  - skipjack
  - tarang9211
---

webpack 允许使用任意语言定义配置文件。文件扩展支持列表 [node-interpret](https://github.com/js-cli/js-interpret) 包中找到。webpack 将通过你选择的语言运行你的配置。

例如，如果你使用 **coffeescript**，你的文件将如下所示：

**webpack.config.coffee**

```javascript
HtmlWebpackPlugin = require('html-webpack-plugin')
webpack = require('webpack')
path = require('path')
config =
  entry: './path/to/my/entry/file.js'
  output:
    path: path.resolve(__dirname, 'dist')
    filename: 'my-first-webpack.bundle.js'
  module: rules: [ {
    test: /\.(js|jsx)$/
    use: 'babel-loader'
  } ]
  plugins: [
    new (webpack.optimize.UglifyJsPlugin)
    new HtmlWebpackPlugin(template: './src/index.html')
  ]
module.exports = config
```

***

> 原文：https://webpack.js.org/configuration/external-configs/