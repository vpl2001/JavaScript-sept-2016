function treasure(input){
    for (let i = 0; i < input.length; i+=2) {
        let x = Number(input[i]);
        let y = Number(input[i+1]);
        treasureFinder(x,y);
    }
    function treasureFinder(point1,point2){
        if(point1 >=8 && point1 <= 9 && point2 >= 0 && point2 <= 1){
            console.log('Tokelau');
        }
        else if (point1 >= 1 && point1 <= 3 && point2 >= 1 && point2 <= 3){
            console.log('Tuvalu');
        }
        else if (point1 >= 5 && point1 <= 7 && point2 >= 3 && point2 <= 6){
            console.log('Samoa');
        }
        else if (point1 >= 0 && point1 <= 2 && point2 >= 6 && point2 <= 8){
            console.log('Tonga');
        }
        else if (point1 >= 4 && point1 <= 9 && point2 >= 7 && point2 <= 8){
            console.log('Cook');
        }
        else
            console.log('On the bottom of the ocean');
        }
    }