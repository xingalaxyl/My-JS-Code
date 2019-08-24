var i, a, b, c;
document.write('<table>');
document.write('<caption>水仙花数</caption>')
document.write('<tr>');
for (i = 100; i < 1000; i++) {
  a = parseInt(i / 100);
  b = parseInt(i % 100 / 10);
  c = parseInt(i % 10);
  console.log('a:' + a);
  console.log('b:' + b);
  console.log('c:' + c);

  if (i == (sancifang(a) + sancifang(b) + sancifang(c))) {
    document.write('<td>');
    document.write(i);
    document.write('</td>');
  }

}
document.write('</tr>');
document.write('</table>');

function sancifang(n) {
  return n * n * n;
}