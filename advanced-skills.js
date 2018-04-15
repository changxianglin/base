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

  // 函数柯里化
  function add(num1, num2) {
    return num1 + num2
  }

  function curriedAdd(num2) {
    return add(5, num2)
  }

  // 创建柯里化函数的通用方法
  function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
      var innerArgs = Array.prototype.slice.call(arguments)
      var finalArgs = args.concat(innerArgs)
      return fn.apply(null, finalArgs)
    }
  }

  // 高级应用
  function bind(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2)
    return function() {
      var innerArgs = Array.prototype.slice.call(arguments)
      var finalArgs = argus.concat(innerArgs)
      return fn.apply(context, finalArgs)
    }
  }

  // 柯里化函数和动态绑定函数提供了强大的动态函数创建功能，
  // bind 和 curry 切勿滥用

  // 防止篡改对象
  // 不可扩展对象 preventExtentsion

  // 密封的对象
  // Object.seal() Object.isSeal()

  // 冻结的对象
  // Obejct.freeze() Obejct.isFreeze()

  // 高级定时器 setTimeout

  // 重复的定时器 setInterval
  // 函数节流

}
