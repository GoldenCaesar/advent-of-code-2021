const fs = require('fs')
const fileString = fs.readFileSync(__dirname + '/day02-01.data.txt').toString();

const inputArray = fileString.split('\r\n')
/*.map(string => parseInt(string))*/

let aim = 0;
let forward = 0;
let horizontal =0;

for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    if (element.includes("up")) {
aim -= Number(element.replace( /^\D+/g, ''));
    } else if (element.includes("down")) {
        
aim += Number(element.replace( /^\D+/g, ''));
    } else if(element.includes("forward")) {
        forward+= aim*(Number(element.replace( /^\D+/g, '')));
        horizontal += Number(element.replace( /^\D+/g, ''))
    }
}
console.log("forward"+horizontal)
console.log("depth"+forward)
console.log("distance" + (horizontal*forward))