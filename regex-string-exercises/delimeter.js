function delim (input) {
    let delimeter = input[1];
    let text = input[0];
    let spl = text.split(delimeter);
    spl.forEach(c=>console.log(c));
}
delim(['One-Two-Three-Four-Five',
'-'
]);
function start (input) {
    let times = input[1];
    let text = input[0];
    console.log(text.repeat(times));
}
start(['wwww fff', '5']);


function start1 (input) {
    let text = input[0].replace(" ", "");
    let sub = input[1].toString();
    console.log(text.startsWith(sub));
}
start1(['Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta']);