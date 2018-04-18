// && operation

var test = function(data) {
  var result = true
  if(data > 15) {
    result = false
  }
  return result
}

var init = {
    a:test(1),
    b:test(2),
    c:test(3),
    d:test(4),
    e:test(5),
    f:test(6),
    g:test(7),
    h:test(8),
    i:test(9),
    j:test(10),
    k:test(11),
    l:test(12),
    m:test(13),
    n:test(14),
    o:test(15),
}

var __main = function(data) {
  var mark = Object.keys(data)
  var len = Object.keys(data).length
  var ar = true
  console.log(len)
  for(var i = 0; i < len; i++) {
    var flag = mark[i]
    ar = ar && data[flag]
    console.log(ar,)
  }
  return ar
}

__main(init)



console.log('end', __main(init))
