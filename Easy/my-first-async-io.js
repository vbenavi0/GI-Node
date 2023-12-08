const fs = require('fs')  
const filePath = process.argv[2]; //take in file to read

fs.readFile(filePath, (err, data) => { //read file from input
    const arrWord = data.toString().split('\n'); //make new array by splitting new lines
    const sum = arrWord.length - 1; //get number of new lines by checking how long array is and subtracting by 1
    console.log(sum); 
});
