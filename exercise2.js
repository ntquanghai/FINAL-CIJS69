function alternatingSums(a) {
    let sumTeam1 = 0;
    let sumTeam2 = 0;
    let arrSum = [];
    for(let i = 0; i < a.length; i++) {
        if(i%2 === 0) {
            sumTeam1 = sumTeam1 + a[i];
        }
        else {
            sumTeam2 = sumTeam2 + a[i];
        }
    }
    arrSum.push(sumTeam1);
    arrSum.push(sumTeam2);

    return arrSum;
}
