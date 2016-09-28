function areaPerimeter(arr) {
    let sideA = Number(arr[0]);
    let sideB = Number(arr[1]);
    let area = sideA * sideB;
    let perimeter = 2*sideA + 2*sideB;
    console.log(area);
    console.log(perimeter);
}
areaPerimeter(['2.5', '3.14']);