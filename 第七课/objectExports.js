//向外暴露一个对象
//首先定义一个暴露的对象
function Run(name,age){
    this.name=name;
    this.age=age;
    this.set=function(){
        console.log('我是这个对象的方法呦')
    }   
}
module.exports=Run