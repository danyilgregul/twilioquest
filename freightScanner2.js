function scan(array) {
    let contrabandIndexes = [];

    array.forEach(function(item, index) {
        if (item == 'contraband') {
            contrabandIndexes.push(index);
        }
    });

    return contrabandIndexes;
}

const indexes = scan(['contraband', 'apples', 'cats', 'contraband', 'contraband']);
console.log('Contraband Indexes: ' + indexes);