function rotate(arr) {
    let times = Number(arr.pop());
    if (times <= arr.length){
        for (let i = 1; i <= times; i++) {
            let a = arr.pop();
            arr.unshift(a);
        }
        console.log(arr.join(' '));
    }
    else {
        for (let i = 1; i <= times%arr.length; i++) {
            let a = arr.pop();
            arr.unshift(a);
        }
        console.log(arr.join(' '));
    }
}
rotate(['1', '2', '3', '4', '8']);