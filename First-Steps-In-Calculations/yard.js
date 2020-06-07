function yard(input) {
    let square = Number(input);
    let totalPrice = square * 7.61;
    let discount = totalPrice * 0.18;
    let priceWithDiscount = totalPrice - discount;

    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    
}

yard("550");
yard("150")
