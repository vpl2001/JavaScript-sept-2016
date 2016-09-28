function triangle([number]) {
    let str = '$';
    let num = Number(number);
    for (let i = 1; i <= num; i++) {
        console.log(str);
        str = str + '$';
    }
}
triangle(['1']);

function calcNextDay([year, month, day])  {
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" +
        (nextDate.getMonth() + 1) + '-' +
        nextDate.getDate();
}
console.log(calcNextDay([2016, 2, 29]));

function isPrime([num]) {
    let prime = true;
    for (let d = 2; d <= Math.sqrt(num); d++) {
       if(num %d ==0) {
           prime = false;
           break;
       }
    }
    return prime && (num >1);
}
console.log(isPrime([4]));
