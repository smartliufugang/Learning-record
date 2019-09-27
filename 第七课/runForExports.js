//向外暴露方法
//这是node的暴露模块的方式
exports.run=function(){
    console.log('我是run模块的方法呦！')
    let a=1;
    let b=1;
    console.log(a+b)
    console.log('程序执行结束！')
}