var __main = function() {
  // 进行离线检测
  // 使用离线缓存
  // 在浏览器中保存数据

  // HTML5 支持离线 web 应用开发

  // 离线检测
  // navigator.onLine
  // window.online
  // window.offline
  // 手动轮询检测

  // 应用缓存
  // applicationCache
  // 0、1、2、3、4、5、
  // checking
  // error
  // noupdate
  // downloading
  // progress
  // updateready
  // cached
  // 手工干预 applicationCache.update()

  // 数据存储
  // cookie
  // cookie 绑定在特定域名下
  // cookie 构成
  // 名称、值、域、路径、失效时间、安全标志
  // 名值对才会发送回服务器
  // document.cookie
  // 所有的 cookie 字符串 都经过 URL 编码 必须使用 decodeURIComponent() 解码
  // 设置 cooki 值 document.cookie = 'name=Nicholas'
  // 最好设置方式 document.cookie = encodeURIComponent('name') + '=' + encodeURIComponent('Nicholas')
  // 基本的 cookie 操作有三种 读取、写入、删除

  // 子 cookie
  // HTTP 专有 cookie

  // IE 用户数据

  // web 存储机制
  // Storage 类型
  // sessionStorage 对象
  // sessionStorage 极为脆弱
  // sessionStorage.key()
  // globalStorage 对象 跨域会话存储数据
  // 会一直在磁盘上保留 直到 被清理或其他人为删除
  // localStorage 对象 在 HTML5 被作为客户端存储取代 globalStorage
  // 数据保留到通用 JavaScript 删除或者用户清理浏览器缓存
  // storage 事件
  // 限制 localStorage 大多限制在 5M 有些浏览器限制在 2.5M
  // 限制 sessionStorage 大多 2.5M

  // IndexedDB
  // 数据库
  // 对象存储空间
  // 事务
  // 键范围
  // 设定游标
  // 索引
  // 并发问题
  // 限制
  // 
}
