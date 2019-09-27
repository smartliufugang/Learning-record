const run=require('./runForExports');
//引用run这个模块
run.run()
//调用run这个模块的run（）
const Run=require('./objectExports');
//load object 
const person=new Run('lihao',22);
person.set()
console.log(person.name)
const obj=require('./exports')
//这是引用的exports的模块
const obj1=new obj('李豪',22);
obj1.run()
console.log(obj1.name)