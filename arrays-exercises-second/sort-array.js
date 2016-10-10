function sorting (input) {
    input.sort(function (a,b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    input.sort( function (a,b) {
        return a.length - b.length;
    });
    console.log(input.join('\n'));

}
sorting([ 'test', 'Deny', 'omen', 'Default']);