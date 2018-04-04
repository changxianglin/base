function __main() {
    //  事件流
    // 事件冒泡
    // 所有浏览器支持冒泡事件
    // 事件捕获
    // 浏览器从 window 开始捕获事件
    //  DOM 事件流 事件捕获 处于目标阶段 事件冒泡
    // 有两个机会在目标对象上面操作事件(捕获， 冒泡)

    //事件处理程序

    // DOM0 级事件处理程序
    // DOM0 级事件在事件流冒泡阶段被处理
    // DOM0 级事件置空即可删除事件

    // DOM2 级事件处理程序
    // addEventListener()
    // removeEventListener()
    // 均接受 3 个参数 （事件名, 作为事件处理程序的函数, 布尔值）
    // 最后一个参数是 true 表示在 捕获阶段调用事件处理程序
    // 最后一个参数是 false 表示在 冒泡阶段调用事件处理程序
    // DOM2 级事件可以添加多个事件处理程序
    // 为了兼容性 均选 冒泡阶段
    // 有特别需要才使用 捕获阶段

    // IE 处理事件
    //  attachEvent
    //  datachEvent
    // 编写跨浏览器时要注意
    // 执行循序与 DOM 相反

    // DOM 中的事件对象
    // event
    // 阻止特定的默认事件 preventDefault
    // 立即停止事件 stopPropagation

    // IE 中的事件对象
    // event

    // event 对象的 target


    // 事件类型
    // UI 事件
    // 焦点事件
    // 鼠标事件
    // 滚轮事件
    // 文本事件
    // 键盘事件
    // 合成事件
    // 变动事件
    // 变动名称事件(已废弃)

    // 如下为 UI 事件
    // DOMActive (浏览器差异, 使用少)
    // load (文档页面加载完成后触发)
    // unload (文档页面完全卸载后触发)
    // abort
    // error
    // select
    // resize (调整浏览器窗口至新高度或宽度时触发)
    // scroll (页面变化)
    // blur 失去焦点
    // focus 获得焦点, 且不会冒泡, 所有浏览器支持
    // focusin 与 focus 等价 但会冒泡
    // focusout 失去焦点

    // 鼠标与滚轮事件
    // DOM3 级事件中定义了 9 个事件
    // click (单击)
    // dblclick (双击)
    // mousedown (鼠标按下)
    // mouserenter (鼠标移入目标范围,不冒泡)
    // mouseleave (鼠标移出目标范围, 不冒泡)
    // mousemove (鼠标移动目标范围)
    // mouseout (鼠标移出目标范围)
    // mouseover (鼠标移出目标范围)
    // mouseup (释放鼠标时触发)

    // 键码 keydown 和 keyup 时 event 对象的 keyCode

    // 变动事件
    // 删除节点 removeChild() replaceChild()
    // 插入节点 appendChild() replaceChild() insertBefore()
    // readystatechange
    // readyState

    // touchstart
    // touchmove
    // touchend
    // touchcancel

    // 内存和性能
    // 事件委托
    // 尽量在 DOM 树最高层次添加事件处理程序
    // 合适使用事件委托的有 click,mousedown, mouseup, keydown, keyup, keypress
    // 移除事件处理程序
    
}
