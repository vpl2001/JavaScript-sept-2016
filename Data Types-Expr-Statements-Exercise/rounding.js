function round([num, fix]) {
    [num, fix] = [num, fix].map(Number);
    if(fix>15) fix=15;
    let wow = Math.pow(10, fix);
    console.log(Math.round(num * wow) / wow);
}
round([10.5, 300]);