// Node.js Stream（流）
// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。
// 创建一个读取文件的例子
const fs=require('fs')
  //load fs model
let data=''
let lihao='今天的我还是那么的黑，我也不想变白！'
let readerStream=fs.createReadStream('input.txt')
let writeStream=fs.createWriteStream('outinput.txt')
//创建可读流/可写入的流
readerStream.setEncoding('UTF8')
writeStream.write(lihao,'UTF8');
//设置编码
writeStream.end();
//标记文件结尾
readerStream.on('data',function(chunk){
    // chunk是传进来的数据
    data+=chunk
})
readerStream.on('end',function(){
    console.log(data)
})
readerStream.on('error',function(err){
    console.log(err.stack)
})
writeStream.on('finish',function(){
    console.log('写入完成')
})
console.log('程序执行完毕')
 
