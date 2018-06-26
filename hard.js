let want = 'todo'

let person = {
  getGreeting() {
    return 'hello'
  }
}

let dog = {
  getGreeting () {
    return 'Woof'
  }
}

let friend = Object.create(person)
console.log(friend.getGreeting())
console.log(Object.getPrototypeof(friend) === person)

Object.setPrototypOf(friend, dog)
console.log(friend.getGreeting())
console.log(Object.getPrototypeof(friend) === dog)
