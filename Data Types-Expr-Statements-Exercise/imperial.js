function imperial(arr) {
    let number = Number(arr[0]);
    let foot = Math.floor(number/12);
    if (foot<1) foot=0;
    let inch = number %12;
    console.log(`${foot}'-${inch}"`);
}
imperial(['10']);