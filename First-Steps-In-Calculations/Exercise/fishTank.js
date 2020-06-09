function aquaTank(lenght, width, height, percent) {
    lenght = Number(lenght);
    width = Number(width);
    height = Number(height);
    percent = Number(percent);

    let tankAquaCM = lenght * width * height;
    let convertAquaCM = tankAquaCM * 0.001;
    let convertPercent = percent * 0.01;
    let allLiters = convertAquaCM * (1 - convertPercent);

    console.log(allLiters);
    
}

aquaTank("85", "75", "47", "17")
