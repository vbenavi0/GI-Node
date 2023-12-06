const fs = require('fs')  
const path = require('path')
const filePath = process.argv[2];
const ext = "."+process.argv[3];
fs.readdir(filePath, (err, list) => {
    for(let i =  0; i<list.length;i++){
        let pex = path.extname(list[i])
        if(pex===ext){
            console.log(list[i])
        }
    }
});