const fs = require('fs')  
var path = process.argv[2]
var buf  = fs.readFileSync(path)
var str = buf.toString()
var line = str.split("\n")
console.log(line.length-1)