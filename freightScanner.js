function scan(array) {
    let contrabandCount = 0;
    
    array.forEach(item => {
        if (item == 'contraband') {
            contrabandCount++;
        }
    });

    return contrabandCount;
}

const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems);