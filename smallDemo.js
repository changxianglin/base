var myObject = (function() {
  var __name = 'zhangsan'
  return {
    getName: function() {
      return __name
    }
  }
})()
console.log(myObject.getName())
console.log(myObject.__name)
