class Ducktypium {
    constructor(color) {
        this.color = color;
        if (color != 'red' && color != 'blue' && color != 'yellow' ){
            throw new Error("Wrong color!");
        }
        this.calibrationSequence = [];
    }

    refract(color) {
        let newColor
        if (color != 'red' && color != 'blue' && color != 'yellow' ){
            throw new Error("Wrong color!");
        };
        if (this.color == 'red' && color == 'blue' || this.color == 'blue' && color == 'red') {
            newColor = 'purple'
        }
        if (this.color == 'red' && color == 'yellow' || this.color == 'yellow' && color == 'red') {
            newColor = 'orange'
        }
        if (this.color == 'blue' && color == 'yellow'|| this.color == 'yellow' && color == 'blue') {
            newColor = 'green'
        }
        if (color == this.color) {
            return this.color
        }
        return newColor
    }

    calibrate(array) {
        let calibrationSorted = array.sort();
        this.calibrationSequence = calibrationSorted.map(item => item * 3);
    }
}

var dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]