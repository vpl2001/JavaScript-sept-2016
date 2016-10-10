function print (arr) {
    let input = arr;
    let delimiter = input.pop();
    if (input.length == 1) {
        return input[input.length - 1];
    }
    else {
        return arr.join(delimiter);
    }
}
