const fs = require('fs')
const fileString = fs.readFileSync(__dirname + '/day02-01.data.txt').toString();

const inputArray = fileString.split('\r\n')
/*.map(string => parseInt(string))*/

let depth = 0;
let forward = 0;

for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    if (element.includes("up")) {
depth -= Number(element.replace( /^\D+/g, ''));
    } else if (element.includes("down")) {
        
depth += Number(element.replace( /^\D+/g, ''));
    } else if(element.includes("forward")) {
        forward+= Number(element.replace( /^\D+/g, ''));
    }
}
console.log("forward"+forward)
console.log("depth"+depth)
console.log("distance" + (depth*forward))