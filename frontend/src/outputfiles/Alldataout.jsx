import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./table.css"  

function Alldataout(props) {

    const location=useLocation();
    const from=location.state?.from||"unkonow";

  return (
    <>
     <h1 style={{padding:"10px",margin:"0px 0px 0px 30vw"}}>Overall sem results are:</h1>
    <div>
      <table border='2' style={{ borderCollapse: "separate", width: "55%", textAlign: "left",borderRadius:"8px",margin:"5vh 20vw"  }}>
      <thead>
        <tr>
          <th >name</th>
          <th >roll_no</th>
        </tr>
      </thead>
      <tbody>
        {props.dd.map((element,index)=>(
          <tr key={index}>
              <td>{element.name}</td>
              <td>22B81A04{element.roll_no}</td>
          </tr>
        ))}
      </tbody>

      </table>

    </div>
    </>
   
  )
}

export default Alldataout;
