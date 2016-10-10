function capture (input) {
    let text = input.join('');
    let result = [];
    let regex = /\d+/g;
    result = text.match(regex);
    console.log(result.join(' '));
}
function capture1 (input) {
    let text = input.join('');
    let result = [];
    let regex = /\d+/g;
    let match = regex.exec(text);
    while (match){
        result.push(match[0]);
        match = regex.exec(text);
    }
    console.log(result.join(' '));
}

capture(['Lets watch it at 22:45 22 dddd 3']);
capture1(['Lets watch it at 22:45 22 dddd 3']);