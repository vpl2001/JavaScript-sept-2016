function repeat (num, func){
    for (let i = 0; i < num; i++) {
     func(i);
    }
}
let stars = function (i) { console.log("**".repeat(i));};
repeat(5, stars);

function calculate([x, y, op]) {
    [x, y] = [x, y].map(Number);
    let calc = function(x, y, op) { return op(x, y) };
    let add = function(x, y) { return x + y };
    let subtract = function(x, y) { return x - y };
    let multiply = function(x, y) { return x * y };
    let divide = function(x, y) { return x / y };
    switch (op) {
        case '+': return calc(x, y, add);
        case '-': return calc(x, y, subtract);
        case '*': return calc(x, y, multiply);
        case '/': return calc(x, y, divide);
    }
}
