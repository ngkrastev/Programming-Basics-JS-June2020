function calculator(deposit, time, yearpercent) {
     deposit = Number(deposit);
     time = Number(time);
     yearpercent = Number(yearpercent);
     let forYear = deposit * yearpercent / 100;
     let forMonth = forYear / 12;
     let result = deposit + time * forMonth;

     console.log(result);
}

calculator("200", "3", "5.7");
calculator("2350", "6", "7");
