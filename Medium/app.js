const fs = require('fs');

const buf = fs.readFileSync('./solar.txt');
const planets = buf.toString();

console.log(planets);