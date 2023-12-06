const fs = require('fs')  
const filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
    const arrWord = data.toString().split('\n');
    const sum = arrWord.length - 1;
    console.log(sum);
});
