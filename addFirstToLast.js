function addFirstToLast(manifest) {
    let firstAndLast = '';
    if (manifest.length > 0) {
        firstAndLast = manifest[0] + manifest[manifest.length - 1];
    }
    return firstAndLast;
}

console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));