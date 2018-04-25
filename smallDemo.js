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


var Plane = function() {
  this.blood = 100
  this.attackLevel = 1
  this.defenseLevel = 1
}

var plane = new Plane()
plane.blood = 250
plane.attackLevel = 100
plane.defenseLevel = 500


var user = (function() {
  var __name = 'Hello'
  var __gender = 'world'

  return {
    sayHi: function() {
      return __name + '--' + __gender
    }
  }
})()
