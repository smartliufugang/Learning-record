//向外暴露对象的方法
//用es6的方法
class obj{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    run(){
        console.log('我是exports.js的文件的方法呦')
    }
}
module.exports=obj