class TargetingSolution {
    constructor(coordinates) {
        this.x = coordinates.x;
        this.y = coordinates.y;
        this.z = coordinates.z;
    }

    target(){
        // Nicht nötig
        // let aim = `(${this.x}, ${this.y}, ${this.z})`
        // return String(aim)

        // Anscheinend schneller als mit templates (${})
        // return "(" + this.x + ", " + this.y + ", " + this.z + ")"

        // Coolste Solution w/ `backticks`:
        return `(${this.x}, ${this.y}, ${this.z})`
    }

}

const coordinates = new TargetingSolution({
    x: 45,
    y: 12,
    z: -1
});

console.log(coordinates.target());