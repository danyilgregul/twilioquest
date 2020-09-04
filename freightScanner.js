function scan(array) {
    let contrabandCount = 0;

    function check(value) {
        let counter = 0;
        if (value = 'contraband') {
            counter + 1
        };
        return counter;
    };

    array.forEach(element => check(element));


    contrabandCount = check()
    return contrabandCount;
}

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log((`${item} is at index ${index} in ${array}`));
  });

const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems);