var _main = function() {
  function Person(name, age, job) {
    if(this instanceof Person) {
      this.name = name
      this.age = age
      this.job = job
    } else {
      return new Person(name, age, job)
    }
  }

  // 构造函数窃取模式的继承且不使用原型链 这个解继承将被破坏
  function Polygon(sides) {
    if(this insta Polygon) {
      this.sides = sides
      this.getArea = function() {
        return 0
      }
    } else {
      return new Polygon(sides)
    }
  }

  function Rectangele(width, height) {
    Polygon.call(this, 2)
    this.widht = width
    this.height = height
    this.getArea = function() {
      return this.width * this.height
    }
  }

  // 函数绑定
  var handler = {
    message: 'Event handled',

    handledClick: function(event) {
      alert(this.message)
    }
  }
}
