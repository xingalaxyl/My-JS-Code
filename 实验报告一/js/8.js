// 8、编程实现输入一个球体的半径，计算并输出其表面积和体积。s=4πR² v=4/3πR ³

var r;
r = prompt('请输入半径')
var s, v;
var u = 3.14;
s = 4 * u * r * r;
v = 4 / 3 * u * r * r * r;
document.write('面积：' + s + '\n');
document.write('体积：' + v + '\n');