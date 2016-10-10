function start (input) {
        let text = input[0];
        let text1 = text.replace(' ', "");
        let sub = input[1];
        let sub1 = input[1].replace(' ', "");
        console.log(text1.endsWith(sub1));


}
start(['Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta']);