const fs = require('fs')  
var path = process.argv[2] //take in path from input
var buf  = fs.readFileSync(path) //read file from path synchronously
var str = buf.toString() //convert to string
var line = str.split("\n") //split string into array
console.log(line.length-1)