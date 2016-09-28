function compound([principal, interest, period, time]) {
    [principal, interest, period, time] = [principal, interest, period, time].map(Number);
    interest /= 100;
    let frequ = 12 / period;
    let result = principal * Math.pow((1+interest/frequ),(frequ * time) )
    console.log(Number(result.toFixed(2)));
}
compound([1500, 4.3, 3, 6]);