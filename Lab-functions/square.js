function square(count =5) {
    function row(n=count) {
        console.log('*'+ ' *'.repeat(n-1));
    }
    for (let i = 0; i < count; i++) {
        row(count);
    }
}
square();