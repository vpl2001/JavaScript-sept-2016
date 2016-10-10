function checker(input) {
    input = input.map(Number);
    let pointAX1 = input[0];
    let pointAY1 = input[1];
    let pointBX2 = input[2];
    let pointBY2 = input[3];

    if (isInteger(distancePointToO(pointAX1, pointAY1))) {
        console.log(`{${pointAX1}, ${pointAY1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${pointAX1}, ${pointAY1}} to {0, 0} is invalid`);
    }
    if (isInteger(distancePointToO(pointBX2, pointBY2))) {
        console.log(`{${pointBX2}, ${pointBY2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${pointBX2}, ${pointBY2}} to {0, 0} is invalid`);
    }
    let aXY = Math.abs(pointAX1 - pointBX2);
    let bXY = Math.abs(pointAY1 - pointBY2);

    if (isInteger(distancePointToO((aXY), (bXY)))) {
        console.log(`{${pointAX1}, ${pointAY1}} to {${pointBX2}, ${pointBY2}} is valid`);
    }
    else {
        console.log(`{${pointAX1}, ${pointAY1}} to {${pointBX2}, ${pointBY2}} is invalid`);
    }

    function distancePointToO(x, y) {
        let dist = Math.sqrt(Math.abs(Math.pow(x, 2)) + Math.abs(Math.pow(y, 2)));
        return dist;
    }

    function isInteger(num) {

        return Number.isInteger(num);
    }
}
checker(['2','1','1','1']);