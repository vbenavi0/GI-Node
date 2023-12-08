import fs from 'fs'
import express, { json } from 'express'

const app = express() //express init
const port = 5000 //port number

app.get('/employees', (req, res)=>{ //request employees
    fs.readFile('./employees.json', (err,data)=>{ //read json file of employees
        const buf = JSON.parse(data) //parse json data to js data
        res.send(buf) //respond with list of employees
        res.end() //end response
    })
})

app.get('/employees/:id', (req, res)=>{ //request employees with id
    const id = req.params.id //convert parameter to js
    if(id>10||id<1){ //if invalid id, respond with error message
        res.send('Employee not found')
        res.end()
    }
    else{
        fs.readFile('./employees.json', (err,data)=>{ 
            const buf = JSON.parse(data) //parse list of employees
            for(let i = 0; i<buf.emps.length;i++){ //iterate through list
                if(buf.emps[i].id==id){ //find matching id
                    res.send(buf.emps[i]) //respond with employee info with matching id
                    res.end()
                }
            }
        })
    }
})

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`listening on port ${port}`)
})