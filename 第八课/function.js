//node。js的函数
//在JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
// Node.js中函数的使用与Javascript类似
//例如,函数作为参数进行调用
function eat(val){
    console.log(val+':左边跟我画条龙,右边画彩虹')
}
function run(someFunction,value){
    someFunction(value)
}
run(eat,'李豪')
//除了这种传递有名字的函数,还可以传递匿名函数
run(function(val){
    console.log(val)
},'这次是匿名函数')
