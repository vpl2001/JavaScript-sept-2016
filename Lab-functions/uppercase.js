function extract ([input]){
    let inputToUpper = input.toUpperCase();
    let words = extractWords();
    words = words.filter(w=>w!='');
    return words.join(', ');

    function extractWords() {
        return inputToUpper.split(/\W+/);
    }
}
console.log(extract(['hello']));