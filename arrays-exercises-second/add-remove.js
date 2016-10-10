function solve (arr) {
    let elements = [];
    for (var i = 0; i < arr.length; i++) {

        if(arr[i] === 'add' ){
                elements.push(i+1);
        }
        else {
            elements.pop();
        }
    }
    if (elements[0]== undefined){
        console.log('Empty');
    }
    else {
        console.log(elements.join('\n'));
    }

}
solve(['remove']);