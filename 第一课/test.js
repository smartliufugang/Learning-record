const http = require('http')
//请求http模块
//第二步创建http的服务
//监听的端口号是8081
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html','charset':'utf-8'})
    res.end('hello hello i am lihao')
}).listen(8081)
console.log('服务运行的地址是 http://127.0.0.1:8081')