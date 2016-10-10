function extract(sentences) {
    let regex = /(www)\.([a-zA-Z0-9-]+)(\.[a-z]+)+/g;
    let match, result = [];
    for (let s of sentences)
        while (match = regex.exec(s))
            result.push(match[0]);
    console.log(result.join('\n'));
}