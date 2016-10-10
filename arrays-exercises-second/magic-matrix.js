function magic(input) {
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        matrix[i]=input[i].split(' ').map(Number);
    }
    let result = [];
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            sum += matrix[row][col];
        }
        result.push(sum);
        sum = 0;
    }
    for (let row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            sum += matrix[col][row];
        }
        result.push(sum);
        sum = 0;
    }
    if(result[0]===undefined) console.log('false');
    else console.log( Math.max(...result)=== Math.min(...result));
}
magic([])
;