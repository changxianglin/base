var __main = function() {
  // 新兴的 API
  // requestAnimationFrame()
  // 循环间隔的问题
  // mozRequestAnimationFrame
  // Page Visibility API
  // Geolocation API
  // File API
  // name、size、type、lastModifiedDate
  // FileReader 类型
  // 读取部分内容
  // File 对象还支持一个 slice()
  // 对象 URL
   function createObjectURL(blob){
    if(window.URL) {
      return window.URL.createObjectURL(blob)
    } else if(window.webkitURL) {
      return window.webkitURL.createObjectURL(blob)
    } else {
      return null
    }
  }
  // 读取拖放的文件
  // drop
  // event.dataTransfer.files
  //


  // 使用 XHR 上传文件
  // send()
  //
  var droptarget = document.getElementById("droptarget")

  function handledEvent(event) {
    var info = '',
        output = document.getElementById('output')
        data, xhr,
        files, i, len;
        EventUtil.preventDEfualt(event)
        if(event.type == 'drop') {
          data = new FormData()
          files = event.dataTransfer.files
          i = 0
          len = files.length

          while (i < len) {
            data.append('file' + i, files[i])
          }

          xhr = new XMLHttpRequest()
          xhr.opent("post", "url", true)
          xhr.onreadystatechange = function() {
            if(xhr.readyState = 4) {
              alert(xhr.responseText)
            }
          }
          xhr.send(data)
        }
  }

  // Web 计时
  // Web Timing API
  // Web Workers
  // 使用 Worker

  // 1. JavaScript 简介
  // 2. 在 HTML 中使用 JavaScript
  // 3. 基本概念
  // 4. 变量、作用域和内存问题
  // 5. 引用类型
  // 6. 面向对象的程序设计
  // 7. 函数表达式
  // 8. BOM
  // 9. 客户端检测
  // 10. DOM
  // 11. DOM 扩展
  // 12. DOM2 和 DOM3
  // 13. 事件
  // 14. 表单脚本
  // 15. 使用 Canvas 绘图
  // 16. HTML5 脚本编程
  // 17. 错误处理与调试
  // 18. JavaScript 与 XML
  // 19. E4X
  // 20. JSON
  // 21. Ajax 与 Comet
  // 22. 高级技巧
  // 23. 离线应用与客户端存储
  // 24. 最佳实践
  // 25. 新兴的 API
}
