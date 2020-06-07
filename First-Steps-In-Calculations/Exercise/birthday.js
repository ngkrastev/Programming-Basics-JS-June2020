function party(rent) {
    rent = Number(rent);
    let cake = rent * 0.2;
    let drinks = cake * 0.55; // cake - cake * 0.45;
    let animator = 1 / 3 * rent;
    let result = cake + drinks + animator + rent;

    // rent += cake + drinks + animator;

    console.log(result);
    
}

party("2250");