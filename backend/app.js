import express from 'express'
import {getdata} from './Databases.js'
import { getdatas } from './Databases.js';


let pp=64;
const app=express();
app.use(express.json());


app.get("/",async (req,res)=>{
    res.send("<h1>this is api page</h1>")
})

app.post("/api/result",async (req,res)=>{
    const rr=req.body.ticket;
    console.log(pp," ",rr);
    pp=rr;
})

app.post("/api/results",async (req,res)=>{
    const rr=req.body.ticket;
    console.log(pp," ",rr);
    pp=rr;
})

app.get("/api/result",async (req,res)=>{
    console.log(pp)
    let mm=await getdata(pp);
    console.log(mm)
    res.send(mm);
    
})

app.get("/api/results",async (req,res)=>{
    const  sem= 'sem_1'
    const subject=" matrix_and_calculus  "
    const grade="'A+'"
    const mm=await getdatas(sem,subject,grade);
    // console.log(mm)
    res.send(mm);
    
})


app.use((err,req,res,next)=>{
    res.status(500).send('something broken')
})

app.listen(8080,()=>{
    console.log('server is running at 8080')
})