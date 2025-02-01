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
      
      {loading?(data!==null?( 
        <  >
      
        <div id="table">

        <table border="2" style={{ borderCollapse: "separate", width: "60%", textAlign: "left",borderRadius:"8px"  }}>
        <thead>
          <tr>
            <th padding="10px">Subject</th>
            <th padding="10px">Grade</th>
          </tr>
        </thead>
        <tbody >
          {Object.entries(data).map(([key, value]) => {
            return (
              <tr key={key }>
                <td style={{border:"1px solid black",padding:"2px",borderRadius:"8px"}}>{key.replace(/_/g, " ")} </td> {/* Replace underscores with spaces */}
                <td style={{border:"1px solid black",padding:"2px",borderRadius:"8px", backgroundColor:value==='F'?"#ed7070":"white"}} >{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        
        </div>
      
     
      </>):(<h1>Data is not updated{from}</h1>)):(<h1>loading...</h1>)
   
      }
      </div>
  );



  
}

export default Results;
