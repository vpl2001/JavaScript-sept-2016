function point ([x, y, xMin, xMax, yMin, yMax]){
    [x, y, xMin, xMax, yMin, yMax]=[x, y, xMin, xMax, yMin, yMax].map(Number);
    if (x>=xMin && x<=xMax && y>=yMin && y <=yMax)
        console.log('inside');
    else
        console.log('outside');
}
point(['8', '-1', '2', '12', '-3', '3']);