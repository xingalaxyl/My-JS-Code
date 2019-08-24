//2、编程实现输入三个整数，计算并输出三个整数的和及平均值。

var a, b, c;

a = parseInt(prompt('输入第一个整数'));
b = parseInt(prompt('输入第二个整数'));
c = parseInt(prompt('输入第三个整数'));

var sum, average;
sum = a + b + c;
average = sum / 3;
document.write(average);