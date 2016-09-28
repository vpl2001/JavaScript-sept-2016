function nowPlay(arr) {
    let artist = arr[1];
    let track = arr[0];
    let duration = arr[2];
    console.log(`Now Playing: ${artist} - ${track} [${duration}]`);
}
nowPlay(['Number One', 'Nelly', '4:09']);