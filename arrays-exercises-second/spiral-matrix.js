function spiral (input) {
    let row = Number(input[0]);
    let col = Number(input[1]);

    let top = 0;
    let bottom = row;
    let right = col;
    let left = 0;

    let matrix = [row];
    for (let i = 0; i < row; i++) {
       matrix[i]=[];
    }


    console.log(matrix);
}
spiral(['5', '5']);