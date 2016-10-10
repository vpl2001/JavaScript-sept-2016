
function diagonal (input) {
    let matrix = [];
    let matrixCopy = [];
    for (var i = 0; i < input.length; i++) {
        matrix[i]=input[i].split(' ').map(Number);
        matrixCopy[i]=input[i].split(' ').map(Number);
    }
    let sum1 = 0;
    let sum2 = 0;

    for (var row = 0; row < matrix.length; row++) {
            sum1 += matrix[row][row];
            sum2 += matrix[row][matrix.length-row-1];
        }
   if (sum1 === sum2) {
       for (let row = 0; row < matrix.length; row++) {
           for (let col = 0; col < matrix[row].length; col++) {
               matrix[row][col]= sum1;
           }
       }
       for (var row = 0; row < matrix.length; row++) {
           matrix[row][row] = matrixCopy[row][row];
           matrix[row][matrix.length-row-1] = matrixCopy[row][matrix.length-row-1];
       }
       console.log(matrix.map(row => row.join(' ')).join('\n'));
   }
   else {
       console.log(matrix.map(row => row.join(' ')).join('\n'));
   }
}

diagonal(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonal(['1 1 1',
    '1 1 1',
    '1 1 0']
);