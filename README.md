# webpack

## webpack是什么？

模块打包机

> haitao 是一个很小且轻巧的移动学习框架


## webpack工作原理 ##

把项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件



###Template(模板)###

```javascript
var H = new haitao();
var tpl = '<% if(true) {%><p>Hei, my name is <%=name%>, and I\'m <%= age %> years old</p><%}%>';
var data = {
    "name": "Barret Lee",
    "age": "20"
};
var result = H.Template(tpl, data);
```
