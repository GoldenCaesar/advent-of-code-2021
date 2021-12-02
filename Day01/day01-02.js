const { group } = require('console');
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

let groupArrayBy3Overlapping = [];
for (let j = 0; j < inputArray.length; j++) {
    let element = inputArray[j] + inputArray[j + 1] + inputArray[j + 2];
    groupArrayBy3Overlapping[j] = element;
}

console.log(groupArrayBy3Overlapping)
posCounter = 0;
for (let l = 0; l < groupArrayBy3Overlapping.length; l++) {
    let currentSet = groupArrayBy3Overlapping[l];
    let previousSet = groupArrayBy3Overlapping[l -1];
    if (currentSet>previousSet) {
        posCounter++;
    }
    
}
console.log("day1.2 start: "+posCounter)