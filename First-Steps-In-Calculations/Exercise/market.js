function market(strawberrys, bananasKG, orangesKG, redberrysKG, strawberrysKG) {
    strawberrys = Number(strawberrys);
    bananasKG = Number(bananasKG);
    orangesKG = Number(orangesKG);
    redberrysKG = Number(redberrysKG);
    strawberrysKG = Number(strawberrysKG);

    let strawberrysPrice = strawberrys;
    let redberrysPrice = strawberrysPrice / 2;
    let orangesPrice = redberrysPrice - 0.4 * redberrysPrice;
    let bananasPrice = redberrysPrice - 0.8 * redberrysPrice;

    let sum1 = bananasKG * bananasPrice;
    let sum2 = orangesKG * orangesPrice;
    let sum3 = redberrysKG * redberrysPrice;
    let sum4 = strawberrysKG * strawberrysPrice;

    let result = sum1 + sum2 + sum3 + sum4;

    console.log(result);
    
}

market("48", "10", "3.3", "6.5", "1.7");
market("63.5", "3.57", "6.35", "8.15", "2.5");