//node.js的绑定监听事件的模块是events
//并通过实例化 EventEmitter 类来绑定和监听事件
const event=require('events');
//引入events模块
const eventEmitter=new event.EventEmitter();
//实例化EventEmitter
function run(){
    console.log('随便创建的一个事件')
    eventEmitter.emit('recive')
    //通过实例的emit方法来触发recive事件
}
// 绑定run事件处理程序
    eventEmitter.on('runSUIJI',run);
    //使用匿名函数绑定recive事件
    eventEmitter.on('recive',function(){
        console.log('我是recive，用eimt触发的是我')
    })
    eventEmitter.emit('runSUIJI');
    console.log('程序执行完毕');
    //说到底不就是通过
    // on()来实现事件的绑定，通过emit来触发事件
