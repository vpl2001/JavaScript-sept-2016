function biggest([num1, num2, num3]) {
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    console.log(Math.max(num1, num2, num3));
}
biggest(['10', '20', '30']);