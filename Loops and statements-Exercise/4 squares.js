function squares ([n]){
    n = Number(n);
    let str = '+' + new Array(n-1).join('-')+'+' + new Array(n-1).join('-')+'+';
    if(n==2){
        console.log(str);

    }
    else if (n==3){
        console.log(str);
        console.log(str);
        console.log(str);
    }
    else if (n%2==0 && n!=2 && n!=3){
        console.log(str);
        for (let i = 0; i < (n-4)/2; i++) {
            console.log('|' + new Array(n-1).join(' ')+'|' + new Array(n-1).join(' ')+'|')
        }
        console.log(str);
        for (let i = 0; i < (n-4)/2; i++) {
            console.log('|' + new Array(n-1).join(' ')+'|' + new Array(n-1).join(' ')+'|')
        }
        console.log(str);
    }
    else {
        console.log(str);
        for (let i = 0; i < (n-3)/2; i++) {
            console.log('|' + new Array(n-1).join(' ')+'|' + new Array(n-1).join(' ')+'|')
        }
        console.log(str);
        for (let i = 0; i < (n-3)/2; i++) {
            console.log('|' + new Array(n-1).join(' ')+'|' + new Array(n-1).join(' ')+'|')
        }
        console.log(str);
    }
}
squares(['2']);