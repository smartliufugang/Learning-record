const fs=require('fs');
//非阻塞代码的实例
fs.readFile('lazy.text',(err,data)=>{
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log('程序执行结束！')
console.log('非阻塞代码的实例！')
