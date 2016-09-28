function distance(arr) {
    let firstKmH = Number(arr[0]);
    let secondkmH = Number(arr[1]);
    let timeSeconds = Number(arr[2]);
    let distFirst = (firstKmH*1000) * (timeSeconds / 3600);
    let distSecond = (secondkmH*1000) * (timeSeconds / 3600);
    console.log(Math.abs(distFirst - distSecond));
}
distance([5, -5, 40]);
