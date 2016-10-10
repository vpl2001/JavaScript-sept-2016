
function radar (input) {
    let currentSpeed = Number(input[0]);
    let zone = input[1];
    let limitedSpeed = zoneLimit(zone);
    let speeding = currentSpeed - limitedSpeed;

    if (stateOfSpeed(speeding)){
        return stateOfSpeed(speeding);
    }

    function stateOfSpeed(speeding) {
        if (speeding <= 20 && speeding >0) return 'speeding';
        else if (speeding > 20 && speeding <= 40) return 'excessive speeding' ;
        else if (speeding > 40)return 'reckless driving' ;
        else return false;
    }
    function zoneLimit (name){
        switch (name){
            case 'city': return 50; break;
            case 'residential': return 20; break;
            case 'interstate':return 90; break;
            case 'motorway': return 130; break;
            default: return false;
        }
    }
}


console.log(radar ([40, 'city']));