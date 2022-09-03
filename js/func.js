function ran(){
    return Math.floor(Math.random() * 255);
}

// no use
function myRound(num){
    let operator = Math.pow(10, 1);
    return (Math.round(num * operator) / operator);
}

function toAcc(angles){
    var acc = [];
    for(let i = 0; i < angles.length; i++){
        if(i == 0)  acc.push((angles[0]));
        else        acc.push((angles[i] + acc[i - 1]))
    }
    return acc;
}

function toAngle(prob){
    return Math.round(prob / 100 * 360);
}