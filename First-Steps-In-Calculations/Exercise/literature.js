function reading(numPages, pagesPerTime, days) {
    numPages = Number(numPages);
    pagesPerTime = Number(pagesPerTime);
    days = Number(days);

    let alltime = numPages / pagesPerTime;
    let hoursPerDay = alltime / days;
    
    console.log(hoursPerDay);
    
}

reading("212", "20", "2");
reading("432", "15", "4");
