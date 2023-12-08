const fs = require('fs')  
const path = require('path')
const filePath = process.argv[2];
const ext = "."+process.argv[3]; //file extension to look for
fs.readdir(filePath, (err, list) => { //reading list of files
    for(let i =  0; i<list.length;i++){ //iterate through file list
        let pex = path.extname(list[i]) //getting file extension
        if(pex===ext){ //if current file extension matches what we're looking for, log file name from list
            console.log(list[i])
        }
    }
});