const argv = process.argv[2];
const argvAsNumber = Number(argv)

if (argvAsNumber === 0) {
    console.log('alive');
}   else if (argvAsNumber === 1) {
    console.log('flowering');
}   else if (argvAsNumber === 2) {
    console.log('shedding');
}   else {
    console.log('other');
}