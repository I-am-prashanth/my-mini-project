import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./comp_css_file/Overall.css";
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

function Overall() {
  const navigate = useNavigate();


  const [batch, setBatch] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");  // Correctly handling semester
  const [grade, setGrade] = useState("");        // Correctly handling grade
  const [subject, setSubject] = useState("");
  const [subjects,setsubjects]=useState([]);
  const [load,setload]=useState(true);

  const {mutate:fetchsubjects}=useMutation({
    mutationFn:async({semester})=>{
      try{
        const sub=await fetch("/api/getsubjects",{
          method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify({sem:semester})
        });

      const res=await sub.json();
      if(!sub.ok){
        throw sub.message;
      }
      setsubjects(res)
      
      
      return res
      }catch(error){
        throw error 
      }
    },
    onSuccess:()=>{
        setload(false)
    }
  })

  useEffect(()=>{
    setload(true)
    fetchsubjects({semester})

  },[batch,department,semester])

  const opensite = async () => {
    navigate("/alldata",{state:{batch,department,semester,grade,subject}})
  };

  return (
    <>
      <div className="box" >
        <form>
          <fieldset className='inbox'>
            <div className='border-box'>
              <div>
                {/* Batch Selection */}
                <div >
                  <label htmlFor="batchSelect" className="form-label">
                    Select Batch ("first 2 digits of hall ticket")
                  </label>
                  <select
                    id="batchSelect"
                    className="form-select"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                  </select>
                </div>

                {/* Department Selection */}
                <div >
                  <label htmlFor="departmentSelect" className="form-label">
                    Select Department
                  </label>
                  <select
                    id="departmentSelect"
                    className="form-select"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="">Select</option>
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

                {/* Semester Selection - Fixed */}
                <div style={{ flex: "1 1 calc(50% - 1rem)" }}>
                  <label htmlFor="semesterSelect" className="form-label">
                    Select Semester
                  </label>
                  <select
                    id="semesterSelect"
                    className="form-select"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>sem_1</option>
                    <option>sem_2</option>
                    <option>sem_3</option>
                    <option>sem_4</option>
                    <option>sem_5</option>
                    <option>sem_6</option>
                    <option>sem_7</option>
                    <option>sem_8</option>
                  </select>
                </div>
                <div style={{ flex: "1 1 calc(50% - 1rem)" }}>
                  <label htmlFor="gradeSelect" className="form-label">
                    Select Grade
                  </label>
                  <select
                    id="gradeSelect"
                    className="form-select"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="">Select+</option>
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

              {/* Subject Selection */}
              <label htmlFor="subjectSelect" className="form-label">
                Select Subject
              </label>
              <select
                id="subjectSelect"
                className="form-select"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  position: "relative",
                  bottom: "auto",
                  transform: "translateY(5px)"
                }}
              >
                <option value="">Select</option>
                {load && 
                <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
               
                {!load &&

                  subjects.map((ele,i)=>(
                   
                    <option key={ele} >
                      {console.log(ele)}
                      {ele}
                    </option>
                  ))
                }
                
              </select>

              {/* Submit Button */}
              <div >
                <button type="button" id="buttons" onClick={opensite}>
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Link to Authors */}
      <div style={{ position: "fixed", bottom: 0, right: 0, padding: "0vh 1vw 1vh 0vh" }}>
        <Link to="/aboutauthors">Click here for authors</Link>
      </div>
    </>
  );
}

export default Overall;
