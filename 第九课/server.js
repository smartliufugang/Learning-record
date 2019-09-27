//node写服务的js文件
const http=require('http');
//服务器要请求http服务模块
const url=require('url')
//因为要涉及到处理url所以要请求处理url的模块
function start(route){
    //传进来路由函数是用来检测传进来的接口地址
    //创建一个暴露出去的start的函数
    function onRequest(req,res){
        const pathname=url.parse(req.url).pathname;
        // console.log('请求的路径名字'+pathname+'接收到的');
        //如果已经收到请求了,那就要开始响应数据
        // 在这里可以调一下路由打印一下浏览器请求的地址
        route(pathname)
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('大家好,我是服务器响应的数据');
        res.end()
    }
    http.createServer(onRequest).listen(8888)
    console.log('服务已经启动了!')
    console.log('服务器的地址是:http://127.0.0.1:8888')
}
exports.start=start