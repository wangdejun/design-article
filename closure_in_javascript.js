
/**
 * sayHelloWorld()
 * ---------------
 * @type {undefined}
 */
var sMessage = "hello world";

function sayHelloWorld(){
  console.log(sMessage);
}
/**
 * test
 */
sayHelloWorld();

// 在上面这段代码中，脚本被载入内存后，并没有为函数 sayHelloWorld() 计算变量 sMessage 的值。
// 该函数捕获 sMessage 的值只是为了以后的使用，也就是说，解释程序知道在调用该函数时要检查 sMessage 的值。
// sMessage 将在函数调用 sayHelloWorld() 时（最后一行）被赋值，显示消息 "hello world"。

/*
 * Function(iNum1,iNum2)
 * ---------------------
 * 接收两个参数，并把此函数内部的参数值全部求和之后并返回。
 */
let iBaseNum = 10;
	function addNum(iNum1, iNum2) {
  		function doAdd() {
  			let iNum3=100;
  			let iNum4=100;
  			function doAdd1(){
  				let iNum5 = 100;
  				let iNum6 = 100;
  				function doAdd2(){
  					return iNum1 + iNum2 + iNum3 + iNum4 + iNum5 + iNum6 + iBaseNum;
  				}
  				return doAdd2();
  			}
  			return doAdd1();
  		}
  		return doAdd();
	}
/**
 * test
 * 这里要掌握的重要概念是，doAdd() 函数根本不接受参数，它使用的值是从执行环境中获取的。
 * 从环境中获取值是理解闭包的一个重要途径
 */
console.log(addNum(100,100));

