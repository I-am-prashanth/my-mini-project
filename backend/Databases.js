import mysql from "mysql2";
import express from "express";
import dotenv from "dotenv"
import { createClient } from '@supabase/supabase-js'

// import { supabase } from "./app.js";

dotenv.config();
export let supabase=createClient(process.env.SQL_URL,process.env.SQL_KEY);
// supabase = createClient(process.env.SQL_URL,process.env.SQL_KEY)
const getSemresult=async(sem,roll)=>{
    try{
      // SELECT * FROM public.sem_1 WHERE "Roll Number" = 'your_roll_here';
console.log("Sem:", sem, " Roll param:", JSON.stringify(roll));
    const { data, error } = await supabase
    .from(sem)
    .select('* -id')
    .eq("Roll Number",roll.trim())

  if (error){ 
    console.log(error)
    return null;
  }
  else{
    console.log(data)
     const { id, ...student } = data[0];  

    //  const result = student.map(({ id, ...data }) => data);
  const filtered = Object.fromEntries(
    Object.entries(student).filter(([key, value]) => value !== null)
  );
    
    return filtered;
  }
    }catch(error){
        console.log(error)
    }

}

export const getdatas=async(req,res)=> {
    const{roll}=req.body;
    let data=[]
    console.log("entered")
    try{
    for(let i=1;i<=6;i++){
        console.log("sem_"+i)
        const result=await getSemresult("sem_"+i,roll);
        // console.log(i,":",result)
        if(result)data.push(result)
    }
    
const allResults = await Promise.all(data);
console.log(data)
    res.send(data);
}catch(error){
    console.log(error)
}
}


export const fetchSub=async (req,res)=>{
    try{
         console.log("emnterd")
         const {semester,subject,grade}=req.body;
         console.log(semester,subject,grade)
    const { data, error } = await supabase
  .from(semester)                        // table name
  .select('Name, "Roll Number"')    // columns (quotes for spaces)
  .eq(subject, grade);    
  console.log(data)
  res.status(200).json(data)
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
   

}



export const fetchsubjects=async (req,res)=>{
  try{
    const {year,department,sem}=req.body;


    console.log(sem)

     const { data, error } = await supabase
      .from(sem)
      .select("*")
      .limit(1);
      const subjects = Object.keys(data[0]).filter(
    col => !["id", "Name", "Roll Number", "GPA"].includes(col)
  );
      console.log( Object.keys(data[0]));
      return res.status(200).json(subjects)

  }catch(error){
    console.log(error);
    return res.status(500).json({message:"no subject savalble select valid options"});
  }
}