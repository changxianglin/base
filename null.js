function C() {}

C.prototype = null

var o = new C()

Object.getPrototypeOf(o) === null // false
Object.getPrototypeOf(o) === Objec.prototype // true

var x = Object.create(null)
Object.getPrototypeOf(o) === null // true

var x = { __proto__: null}
x instanceof Object // false 
