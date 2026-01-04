import React, { useState, useEffect } from 'react';
import "./table.css"  
import { useLocation } from 'react-router-dom';
function Results(props) {
  const location=useLocation();
  const [data,setdata]=useState(null);
  const [loading,setloaing]=useState(false);
  const from=location.state?.from||"konow";
  useEffect(()=>{
     setdata(props.obj);
     setloaing(true);

  },[])

  return (
    
    
    <div>
      {console.log(props.index)}
      {loading?(Object.keys(data)?.length>3?( 
        <  >
        <div id="table">
          {
          // console.log(data)
}
        <table  >
        <thead>
          <tr>
            <th >Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody >
          {Object.entries(data).map(([key, value]) => {
            // if()
            return (
              <tr key={key }>
                <td >{key.replace(/_/g, " ")} </td> {/* Replace underscores with spaces */}
                <td className={`table-cell ${value==='F'?'fail':''}`}>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        
        </div>
      
     
      </>):(<h1 id="no_data">Data is not updated / With Held</h1>)):(<h1>loading...</h1>)
   
      }
      </div>
  );



  
}

export default Results;
