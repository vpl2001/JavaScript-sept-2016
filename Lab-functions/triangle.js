function printStars (num){
console.log('*'.repeat(num));
}


function printTriangle (num) {
    for (let row = 1; row <= num; row++) {
        printStars(row);
    }
    for (let row = num-1; row >=1; row--) {
        printStars(row);
    }
    function printStars (num){
        console.log('*'.repeat(num));
    }
}
printTriangle(5);
