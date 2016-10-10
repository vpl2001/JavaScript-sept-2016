function template (input){
    let text = '<?xml version="1.0" encoding="UTF-8"?>\n';
    text+='<quiz>\n';
    for (let i = 0; i < input.length; i+=2) {
        let question = input[i];
        let answer = input[i+1];
        text += questions(question);
        text += answers(answer);
    }
    text+='</quiz>';
    console.log(text);
    
    function questions(str) {
        let temp = '  <question>\n';
        temp += '    '+ str + '\n';
        temp += '  </question>\n';
        return temp;
    }
    function answers(str) {
        let temp = '  <answer>\n';
        temp += '    '+ str + '\n';
        temp += '  </answer>\n';
        return temp;
    }
}
template(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]

);