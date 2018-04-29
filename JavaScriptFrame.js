var __main  = function() {
  // 种子模块
  // 核心模块

  function extend(destination, source) {
    for(var property in source)
      destination[property] = source[property]
      return destination
  }

  Object.keys = Object.keys || function(obj) {
    var a = []
    for(a[a.length] in obj)
    return a
  }
  // 数组化
  // Array.prototype.slice.call
  // undefined、null、string、number、boolean、function
  // tring、number、boolean 可以包装成 '伪对象'
  // RegExp 与 Array, isArray
  // null、undefined、NaN

  // 语言模块
}
