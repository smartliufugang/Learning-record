// 处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
//node的buffer的使用方式
const buf=Buffer.from('李豪')
console.log(buf.toString('hex'));
console.log(buf.toString('base64'))
console.log(buf.toString('utf8'))
const buf1= Buffer.alloc(10);
// 创建一个长度为 10、且用 0 填充的 Buffer。
console.log(buf1.toString('hex'))
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)