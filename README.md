## Webpack是什么？##

模块打包机

> 通过分析项目的结构，找到所有依赖的文件，将其打包为合适的格式供浏览器使用

## Webpack工作原理 ##

把项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件


## 为什么使用Webpack ##

- 模块化，将复杂的程序细化为一个个很小的文件
- 类似于TypeScript,CoffeeScript的语言无法被浏览器识别，只能是用过webpack转化打包成javascript语言之后才能被浏览器使用



