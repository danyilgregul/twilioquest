const argv = process.argv[2]
argvAsNumber = Number(argv)

if (argvAsNumber === 0) {
    console.log('alive');
}   else {
    console.log('other');
}