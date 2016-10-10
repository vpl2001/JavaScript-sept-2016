function cooking (input){
    let number = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        let action = input[i];
        number = shake (number, action);
        console.log(number);
    }
    function shake (num, action) {
        switch (action){
            case 'chop': return num /2;
            case 'dice': return Math.sqrt(num);
            case 'spice': return num + 1;
            case 'bake': return num *3;
            case 'fillet': return num - 0.20*num;
            default: return false;
        }
    }
}
cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cooking([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);