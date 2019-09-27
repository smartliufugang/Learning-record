//process是一个全局变量,即是全局对象global的属性
//它用于描述当前node.js进程状态的对象,并且它还提供了一个可以操作系统的简单接口
//process这个控制node.js当前进程的对象
// 主要有四个事件,exit/当进程准备退出时触发,
//beforeExit 当node 清空事件循环 并且没有其他安排时,触发这个事件  通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。
//uncaughtException
// 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。
// Signal 事件
// 当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。
    //  process这个对象有大量的关于系统信息的一个属性和方法通过这些可以了解系统的信息
    console.log(process.arch)//输出的是系统cpu的架构信息
    console.log(process.pid)//输出的是当前进程的进程号pid
    // 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());
// 这个process的属性用到什么,再随时查阅