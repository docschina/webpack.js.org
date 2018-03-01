---
title: Module Factories
group: Plugins
sort: 5
---

?> Lead in...

## `NormalModuleFactory`

`before-resolve(data)` 异步 瀑布流

执行周期在模块工厂开始解析之前。`data` 对象具有以下属性：

* `context`: 解析目录的绝对路径。
* `request`: request 的表达式。

插件被允许修改对象或将新的相似对象传递给回调函数。

`after-resolve(data)` 异步 瀑布流

执行周期在模块工厂解析 request 之后。`data` 对象具有以下属性：

* `request`: 已解析的 request。它将作为 NormalModule 的标识符。
* `userRequest`: 用户输入的 request。已被解析，但不包含前置或后置的 loaders。
* `rawRequest`: 未解析的 request。
* `loaders`: 被解析的 loaders 数组，将会被传递给 NormalModule 并执行。
* `resource`: 原始资源。将会被 NormalModule 加载。
* `parser`: 被 NormalModule 使用的 parser。


## `ContextModuleFactory`

`before-resolve(data)` 异步 瀑布流

?> Add documentation.

`after-resolve(data)` 异步 瀑布流

?> Add documentation.

`alternatives(options: Array)` 异步 瀑布流

?> Add documentation.

***

> 原文：https://webpack.js.org/api/module-factories/
