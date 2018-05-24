const main = () => {
  // 担心隐式的强制转换
  //
  function isReallyNaN(x) {
    return x !== x
  }
  //
  [3, 1, 4, 1, 5, 9].sort(function(x, y) {
    if(x < y) {
      return -1
    }
    if(x > y) {
      return 1
    }
    return 0
  })

  // 高阶函数
  function buidString(n, callback) {
    var result = ''
    for(var i = 0; i < n; i++) {
      result += callback(i)
    }
    return result
  }
  
}
