function getFirstAmountSorted(names, numberOfItems) {
    let namesSortedAndSliced = '';
    let namesSorted = names.sort();
    namesSortedAndSliced = namesSorted.slice(0, numberOfItems);

    /** -> Attempt at making the .slice myself
    let counter = number;
    while (counter > 0) {
    counter = counter - 1
    namesSortedAmount = namesSorted[counter] **/

    return namesSortedAndSliced;
    }

console.log(getFirstAmountSorted(['banana', 'cucumber', 'apple', 'dragonfruit'], 3));