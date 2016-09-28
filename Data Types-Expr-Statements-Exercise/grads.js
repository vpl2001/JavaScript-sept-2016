function grads(arr) {
    let gradNumber = Number(arr[0]);
    gradNumber = gradNumber % 400;
    if (gradNumber < 0){
        gradNumber += 400;
    }
    let degrees = gradNumber / 400 * 360;
    console.log(degrees);

}
grads(['400']);