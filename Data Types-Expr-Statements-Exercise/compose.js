function tag(arr) {
    let loc = arr[0];
    let text = arr[1];
    console.log(`<img src="${loc}" alt="${text}">`);
}
tag(['smiley.gif', 'Smiley Face']);

function binary([num]) {
 console.log(parseInt(Number(num), 2));
}
binary(['00001001']);
