var test1 = function(item) {
  if(item > 3) {
    console.log('test1 yeah')
    return true
  } else {
    console.log('test1 no')
  }
}

var test2 = function(items) {
  if(items < 100) {
    console.log('test2 yeah')
    return true
  } else {
    console.log('test2 no')
  }
}


var testAll = function(index, ele, value1, value2) {
  var flag = index(value1)
  if(flag) {
    ele(value2)
  } else {
    console.log('test2 no running')
  }
}


testAll(test1, test2, 5, 23)
testAll(test1, test2, 3, 12)
