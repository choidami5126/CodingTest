const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str;

rl.on('line', function (line) {
    str = line;
}).on('close', function () {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    console.log(result);
});