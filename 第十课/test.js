/*
javascript的全局对象是windows,node的全局对象是global
全局对象和全局变量:
global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
在最外层定义的变量；
全局对象的属性；
隐式定义的变量（未定义直接赋值的变量）。
全局变量都是全局对象的属性
*/
// __filename
//这个关键字前面有两个下划线 注意!
// __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
// 如果在模块中，返回的值是模块文件的路径。
console.log('以下返回的是当前文件所在的路径:')
console.log(__filename);
// __dirname 
//__dirname 表示当前执行脚本所在的目录
console.log('以下是当前脚本所在的目录是:')
console.log(__dirname)