function capitalize(input) {
    let words = [];
    let result = [];
    words = input[0].split(' ');
    for (let w of words) {
        let newWord = '';
        let first = w.charAt(0);
        if (first!==first.toUpperCase())
            first = first.toUpperCase();
        newWord += first;
        newWord += w.substring(1, w.length).toLowerCase();
        result.push(newWord);
    }
    console.log(result.join(' '));
}
capitalize(['Was that Easy? tRY thIs onE for SiZe!']);
capitalize(['Capitalize these words']);