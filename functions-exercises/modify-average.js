function modify (input){
    let number = input[0].toString();
    let sum = 0;
    do {
        sum= 0;
        for (var i = 0; i < number.toString().length; i++) {
            sum += Number(number[i]);
        }
        var average = sum / number.toString().length;
        number += '9';

    }
    while (average <= 5);
    console.log(number.substr(0,number.toString().length-1));
}

modify([101]);
