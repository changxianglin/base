function _main() {
  // 上传文件 <input type = "file">

  // 使用 HTTP POST 请求上传文件
  whenReady(function() {
    var elts = document.getElementsByTagName('input')
    for(var i = 0; i < elts.length; i++) {
      var inpt = elts[i]
      if(input.type !== 'file') continue
      var url = input.getAttribute('data-uplodato')
      if(!url) continue

      input.addEventListener("change", function() {
        var file = this.files[0]
        if(!file) return
        var xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.send()
      }, false)
    }
  })


  // multipart/form-data 请求
  function postFormData(url, data, callback) {
    if(typeof FormData === 'undefined')
    throw new Error("FormData is not implemented")

    var request = new XMLHttpRequest()
    request.open("POST", url)
    request.onreadystatechange = function() {
      if(request.readyState === 4 && callback)
      callback(request)
    }
    var formdata = new FormData()
    for(var name in data) {
      if(!data.hasOwnProperty(name)) continue
      var value = data[name]
      if(typeof value === 'function') continue

      formdata.append(name, value)
    }
    request.send(formdata)
  }
  
}
