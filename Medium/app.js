const fs = require('fs');

const buf = fs.readFileSync('./solar.txt'); //read text file syncly
const planets = buf.toString(); //convert file contents to js string

console.log(planets);