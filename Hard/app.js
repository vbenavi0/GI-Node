import fs from 'fs'
import express, { json } from 'express'
import axios from 'axios' 
import *  as dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = 5000

//here we will create our routes for our GET request to  reecieve our data.

app.get('/employees', (req, res)=>{
    fs.readFile('./employees.json', (err,data)=>{
        const buf = JSON.parse(data)
        const stuff = buf.emps.toString()
        res.write(stuff)
        res.end()
    })
})

app.get('/employees/:id', (req, res)=>{
    const id = req.params.id
    if(id>10||id<1){
        res.end()
    }
    else{
        fs.readFile('./employees.json', (err,data)=>{
            const buf = JSON.parse(data)
            for(let i = 0; i<buf.emps.length;i++){
                console.log(buf.emps[i].id)
                console.log(id)
                if(buf.emps[i].id==id){
                    const per = (buf.emps[i]).toString()
                    res.write(per)
                    res.end()
                }
            }
        })
    }
})

//Here we create a route  url for our API 

// app.get("/api/news/:country/:category", async (req, res)=>{
//     const country = req.params.country
//     const category = req.params.category
//     let response;
//     response = await axios.get(
//     `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
//     );
//     const artPointer = Math.floor(Math.random() * response.data.articles.length);
//     res.status(200).json(response.data.articles[artPointer]);
// })

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`listening on port ${port}`)
})