const fs=require('fs');
//阻塞代码的实例
const data=fs.readFileSync('lazy.text');
console.log(data.toString());
console.log('程序执行结束!')
console.log('阻塞代码的实例！')