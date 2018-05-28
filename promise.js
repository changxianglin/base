const main = () => {
  // promise

  // 闭包
var foo = function() {
  var i = 1
  return function() {
    return console.log(i++)
  }
}

var foo1 = foo()
var foo2 = foo()

foo1() // 1
foo1() // 2
foo2() // 1
}
