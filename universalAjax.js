// 该封装基于 jQuery

var sendAjax = function(method, url, data, successfn, errorfn) {
  $.ajax({
            type: method,
            url: url,
            data: data,
            success: function(d){
                successfn(d);
            },
            error: function(e){
                errorfn(e);
            }
        });
}

// 注意：
// 1.1 data 数据格式根据需求处理
// 1.2 successfn 和 errorfn 根据需要自行定义

// 例如：

var __main = function() {
  // 请求方法
  var method = 'GET'

  // 请求地址
  var url = 'main/test'

  // 数据格式处理
  var datas = {name: 'zhangsan', age: '25'}
  var data = JSON.stringify(datas)

  // 成功调用函数
  var demoSuccessfn = function(testSuccess) {
    if(testSuccess === 'success') {
      console.log('success')
    } else {
      console.log('reponse have some question.')
    }
  }

  // 失败调用函数
  var demoErrorfn = function(testError) {
    if(testError === 'error') {
      console.log('error')
    } else {
      console.log('have error information.')
    }
  }

  // 实现调用

  sendAjax(method, url, data, successfn, errorfn)
}
