const fs = require('fs')
const fileString = fs.readFileSync(__dirname + '/day01-01.data.txt').toString();

const inputArray = fileString.split('\r\n').map(string => parseInt(string))

let posCounter = 0;

for (let i = 1; i < inputArray.length; i++) {
    let currentDepth = inputArray[i];
    let previousDepth = inputArray[i - 1]
    if (currentDepth>previousDepth) {
        posCounter++        
    }
}

console.log(inputArray)

console.log(posCounter)