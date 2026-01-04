import express from 'express';
import {  fetchSub, fetchsubjects, getdatas, } from './Databases.js';

import { config } from 'dotenv';


const app = express();
config();
app.use(express.json());




app.get("/",(req,res)=>{
    res.status(200).json({name:"kjsdjfvksj"})
    // es.status(500).json({message:error.message})
})

app.post("/api/name",getdatas)
app.post("/api/result",fetchSub)
app.post("/api/getsubjects",fetchsubjects);





app.use((err, req, res, next) => {
    console.error("🔥 Uncaught Error:", err);
    res.status(500).send('Something went wrong!');
});

app.listen(5000, () => {
    
    console.log('🚀 Server running on port 8080');
});
