function chessboard ([n]) {
    let html = '<div class="chessboard">\n';
    let color = 'black';
    for (let row = 1; row <= n; row++) {
        html += '  <div>\n';

        for (let col = 1; col <= n; col++) {
            html+=`    <span class="${color}"></span>\n`;
            color =(color=='white')? 'black':'white';
        }
        html += '  </div>\n';
        if (n%2 ==0){
            color =(color=='white')? 'black':'white';
        }
    }
    html += '</div>\n';
    return html;
}
console.log(chessboard(['4']));