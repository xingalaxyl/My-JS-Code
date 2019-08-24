// 15、编程输入梯形的上底、下底和高，计算梯形面积的值。

var t, b, h;
t = prompt('请输入上底');
b = prompt('请输入下底');
h = prompt('请输入高');

var s;
s = (t + b) * h / 2;
document.write('面积：' + s);