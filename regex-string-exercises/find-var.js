function find (input) {
    let text = input[0];
    let regex = /\b(?:_)([A-Za-z0-9]+\b)/g;
    let result = [], match;
    while ( match = regex.exec(text) ){
        result.push(match[1]);
    }
    console.log(result.join(','));
}
find(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']);