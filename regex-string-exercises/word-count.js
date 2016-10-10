function find1 (input) {
    let text = input[0];
    let word = input[1];
    let pattern = `\\b${word}\\b`;
    let regex = new RegExp(pattern, 'igm');
    let result = [], match;
    while ( match = regex.exec(text) ){
        result.push(match);
    }
    console.log(result.length);
}
find1(['The waterfall was so high, that the child couldn’t see its peak.', 'the']);
find1(['How do you plan on achieving that? How? How can you even think of that?', 'how']);
find1(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']);