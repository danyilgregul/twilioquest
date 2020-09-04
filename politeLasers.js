function getLaserSetting(word) {
    if (word === "please") {
        return "OFF"
    } else {
        return "ON"
    }
}

const currentSetting = getLaserSetting("please");
console.log(currentSetting);