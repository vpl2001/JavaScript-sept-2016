function nonDecr(arr) {
    arr = arr.map(Number);
    let result = [];
    let biggest = arr[0];
    result.push(biggest);

    for (var i = 1; i < arr.length; i++) {
        if ( arr[i] >= biggest){
            result.push(arr[i]);
            biggest = arr[i];
        }
    }
    console.log(result.join('\n'));
}
nonDecr(['1', '3', '8', '4', '10']);