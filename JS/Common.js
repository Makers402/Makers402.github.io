function pyth(sideA, sideB){
    var cSquared = sideA*sideA + sideB*sideB;
    var sideC = Math.sqrt(cSquared);
    return sideC;
}
function randomNumber(min, max){
    var diff = max - min;
    var number = Math.round(Math.random()*diff)+min;
    return number;
}