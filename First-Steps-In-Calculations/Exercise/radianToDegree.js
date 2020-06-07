function radiansToDegrees(input) {
    let radians = Number(input);
    let degrees = radians * 180 / Math.PI;

    let result = degrees.toFixed(0);
    
    console.log(result);
    
}

radiansToDegrees("3.1416");