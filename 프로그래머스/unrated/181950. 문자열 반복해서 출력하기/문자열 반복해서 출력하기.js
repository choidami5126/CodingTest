const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str, n;

rl.on('line', function (line) {
    [str, n] = line.split(' ');
}).on('close', function () {
    const repeatedStr = str.repeat(Number(n));
    console.log(repeatedStr);
});