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


const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
