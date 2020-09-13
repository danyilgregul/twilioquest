function calculatePower(input) {
    let totalPower = 0;

    totalPower = input.reduce((sum, current) => sum + current * 2, 0);

    return totalPower

}

const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower);