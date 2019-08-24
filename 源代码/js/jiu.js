//16、编程打印输出九九乘法表。
var i, j, sum;

document.write('<table>')
for (i = 1; i < 10; i++) {
  document.write('<tr>')
  for (j = 1; j <= i; j++) {
    sum = i * j;
    document.write('<td>')
    document.write(i + '*' + j + '=' + sum);
    document.write('</td>')

    // document.write('&nbsp;&nbsp;&nbsp;&nbsp;');
  }
  document.write('</tr>')
    // document.write('<br />');
}
document.write('</table>')