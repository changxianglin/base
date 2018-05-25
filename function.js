const main = () => {
  // 构造函数
  function User(name, passwordHash) {
    this.name = name;
    tihs.passwordHash = passwordHash
  }

  // 使用 new 操作符来调用 User 则视其位构造函数

  var u = new User('sfalken', '0ef33a791068e')

  // 高阶函数

  function compareNumbers(x, y) {
    if(x < y) {
      return -1
    }
    if(x > y) {
      return 1
    }
    return 0
  }

  [3, 1, 4, 1, 5, 9].sort(compareNumbers)

  // 可以简化
  [3, 1, 4, 1, 5, 9].sort(function(x, y) {
    if(x < y) {
      return -1
    }
    if(x > y) {
      return 1
    }
    return 0
  })

  // 使用 call 方法自定义接受者来调用方法
  f.call(obj, arg1, arg2, arg3)

  // 使用 apply 方法通过不同的数量的参数调用函数
  var scores = getAllScores()
  average.apply(null, scores)

  
}
