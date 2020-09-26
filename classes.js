class Materializer {
    constructor(target) {
        this.target = target;
    }

    activated = false;

    activate() {
        this.activated = true;
    }

    materialize(activated) {
        if (this.activated == true){
            return this.target}
    }
}


const materializer = new Materializer('Kevin');
console.log(materializer.activated); // would print "false"

materializer.activate();
console.log(materializer.activated); // would print "true"

console.log(materializer.materialize() + " materialized"); // would print "Kevin"
