const main = () => {
  // promise
  setTimeout(function () {
    console.log(1)
  }, 0);
  new Promise(function executor(resolve) {
          resolve();
  }).then(function () {
      console.log(2);
  });
  // 输处是 2， 1 原因是 Promise 是一个整体任务（实例先运行，then再其后），但是 setTimeout 是一个队列任务。

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
