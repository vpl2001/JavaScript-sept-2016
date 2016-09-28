function objects(arr) {
    let obj = {};
    let name = arr[0];
    let age = arr[2];
    let gender = arr[4];
    obj[name]=arr[1];
    obj[age]=arr[3];
    obj[gender]=arr[5];

    console.log(obj);
}
objects(['name', 'Pesho', 'age', '23', 'gender', 'male']);