//作为启动服务的js文件
const server=require('./server');
const router=require('./router');
server.start(router.route)
// 这里直接启动服务,调用路由的方法