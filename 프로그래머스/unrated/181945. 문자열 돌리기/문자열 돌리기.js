const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function() {
    const str = input[0];
    const rotated = rotateString(str);
    console.log(rotated);
});

function rotateString(str) {
    const length = str.length;
    const rotatedString = [];
  
    for (let i = 0; i < length; i++) {
        rotatedString.push(str[i]);
    }
  
    return rotatedString.join('\n');
}
