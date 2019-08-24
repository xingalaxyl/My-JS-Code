// 4、编程输入一个三位整数，拆分每一位数字后打印每一个数字。
// 例如输入123，输出1   2   3


var n;
n = prompt('请输入一个三位整数')
var a, b, c;
a = parseInt(n / 100);
b = parseInt(n % 100 / 10);
c = parseInt(n % 10);
document.write(a + '\n' + b + '\n' + c);