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
}
