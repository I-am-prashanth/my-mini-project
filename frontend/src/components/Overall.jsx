import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./comp_css_file/Overall.css"
import Results from '../outputfiles/Results';

function Overall() {
 const navigate=useNavigate();

 const opensite=()=>{
    navigate("/results",{state:{from:"allresult"}})
 }
    
  return (
      <>
 
 <div className="box">
  <form>
    <fieldset>
      <div
        style={{
          width: "30vw",
          border: "solid 1px black",
          padding: "20px 20px 20px 20px",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 calc(50% - 1rem)" }}>
            <label htmlFor="batchSelect" className="form-label">
              Select Batch
            </label>
            <select id="batchSelect" className="form-select">
              <option>2021-2025</option>
              <option>2022-2026</option>
              <option>2023-2027</option>
              <option>2024-2028</option>
            </select>
          </div>
          <div style={{ flex: "1 1 calc(50% - 1rem)" }}>
            <label htmlFor="departmentSelect" className="form-label">
              Select Department
            </label>
            <select id="departmentSelect" className="form-select">
              <option>Civil</option>
              <option>Mechanic</option>
              <option>EEE</option>
              <option>ECE</option>
              <option>EIE</option>
              <option>Cyber Security</option>
              <option>Data Science</option>
              <option>AIML</option>
            </select>
          </div>
          <div style={{ flex: "1 1 calc(50% - 1rem)" }}>
          <label htmlFor="gradeSelect" className="form-label">
              Select Semister
            </label>
            <select id="gradeSelect" className="form-select">
              <option>SEM-1</option>
              <option>SEM-2</option>
              <option>SEM-3</option>
              <option>SEM-4</option>
              <option>SEM-5</option>
              <option>SEM-6</option>
              <option>SEM-7</option>
              <option>SEM-8</option>
            </select>
          </div>
          <div style={{ flex: "1 1 calc(50% - 1rem)" }}>
            <label htmlFor="gradeSelect" className="form-label">
              Select Grade
            </label>
            <select id="gradeSelect" className="form-select">
              <option>S</option>
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
              <option>P</option>
              <option>F</option>
            </select>
          </div>
        </div>
        
            <label htmlFor="subjectSelect" className="form-label">
              Select Subject
            </label>
            <select id="subjectSelect" className="form-select">
              <option>Math</option>
              <option>Physics</option>
            </select>
        <div style={{ margin: "30px 0px 30px 0px", textAlign: "center" }}>
          <button type="button" id="buttons" onClick={opensite}>
            
            Submit</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
<div style={{ position: "fixed", bottom: 0, right: 0, padding: "0vh 1vw 1vh 0vh" }}>
             <Link to="/aboutauthors">click here for authors</Link>
           </div>

 
</>

  )
}

export default Overall
