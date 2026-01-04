import React from 'react';
import { useMutation  } from '@tanstack/react-query'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./table.css";  
import axios from 'axios';

function Alldataout({ dd = [] }) {  // ✅ Default empty array
  const location = useLocation();
  const { batch, department, semester, grade, subject } = location.state || {};
  const from = location.state?.from || "unknown";
  const [loading,setLoading]=useState(true);

  const [data,setData]=useState([]);

  const {mutate:fetchResults}=useMutation({
      mutationFn:async({batch, department, semester, grade, subject })=>{
          console.log({batch, department, semester, grade, subject })
          const res=await fetch("/api/result",{
            method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },body:JSON.stringify({batch, department, semester, grade, subject })

          })
          const result=await res.json();
          console.log(result)
          setData(result);
          setLoading(false)
      }
  })

  useEffect(() => {
    setLoading(true)
    console.log(batch, department, semester, grade, subject )

    fetchResults({batch, department, semester, grade, subject });
  }, []);

  return (
    <>
    {loading &&(
       <div className="spinner-border text-secondary" id="spinner" role="status">
  <span class="visually-hidden">Loading...</span>
</div>)
    }
    {!loading &&
    <>
    {/* {console.log(object)} */}
    <div id="sun_result_table">
      <h1 id="sem_number" >
        Students who scored {grade} in "{subject}" of {batch} batch {department} department
      </h1>


      <div id="table">
        <table
          border="2" 
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
            </tr>
          </thead>
          <tbody>
            {data.length>0 && data.map((element, index) => (  // ✅ Safe map function
            
              <tr key={index}>
                <td>{element.Name}</td>
                <td>{element["Roll Number"]}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
          }
          
    </>
  );
}

export default Alldataout;
