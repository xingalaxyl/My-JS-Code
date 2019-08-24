// 编程输入一个三位整数，将其颠倒后输出。
// 例如输入123，输出321


var n;
n = prompt('请输入一个三位整数')

var a, b, c;
a = parseInt(n / 100) + '';
b = parseInt(n % 100 / 10) + '';
c = parseInt(n % 10) + '';
document.write(c + b + a);