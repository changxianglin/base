var main => {
  var pad = function(target, n) {
    var zero = new Array(n).join('0')
    var str = zero + target
    var result = str.substr(-n)
    return result
  }

  var pad = function(target, n) {
    var len = target.toString().length
    while(len < n) {
      target = '0' + target
      len++
    }
      return target
  }
  // quote 方法 在字符串两边加双引号 可以直接使用 JSON.stringify
  // trim 与 空白
  // 在 chrome 的努力优化下 正则已经比不上字符串方法 
}
