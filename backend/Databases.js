import mysql from "mysql2";
import express from "express";
import dotenv from "dotenv"

dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.password,
    database: 'marks',
    port: 3306
}).promise();


const app=express()



export async function getdatas(sem,subject,grade) {
    
    let query=`select name,roll_no from `+sem+' where '+ subject;
    query=query+`=`+grade
    let [marks]=await pool.query(query);
    return marks
}

export async function getdata(num) {
    let total=[]
    
    for(let i=1;i<=8;i++)
    {
        let sem="sem_"+i.toString();
        console.log(sem);
    try{
        let url=`select * from `+sem
        // console.log(url)
        let [markss]=await pool.query(url+` where roll_no=?`,num)
        
    if(markss.length>0)
    {
        total.push(markss[0])
    }
}catch(err){"error ra howle",console.log(err)}
}
    return total
}
