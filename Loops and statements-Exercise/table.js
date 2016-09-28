function table ([n]){
    n = Number(n);
    let str = '';
    str += '<table border = \'1\'>\n';
    str += '<tr>';
    for (let col = 0; col <= n; col++) {
        if (col==0) str += '<th>x</th>';
        else  str += `<th>${col}</th>`;
    }
    str += '</tr>\n';

    for (let row = 1; row <= n; row++) {
        str += '<tr>';
        str += `<th>${row}</th>`;
        let x = row;
        for (let s = 1; s <= n; s++) {
            str += '<td>';
         str += (s*row);
            str += '</td>';
        }
        str += '</tr>\n';
    }
    str += '</table>\n';
    return str;
}
console.log(table(['8']));