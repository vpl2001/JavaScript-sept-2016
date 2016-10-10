function solve (arr) {
    let step = Number(arr.pop());
    if (arr.length <= step){
        console.log(arr[0]);
    }
    else {
        for (let i = 0; i < arr.length; i+=step) {
            console.log(arr[i]);
        }
    }
}
solve(['1', '2', '3', '6']);