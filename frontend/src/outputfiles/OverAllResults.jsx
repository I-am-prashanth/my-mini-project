import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMutation  } from '@tanstack/react-query'
import Results from "./Results";
// import './src/components/comp_css_file/Overall.css'
import "./table.css"
import axios from "axios";

const OverAllResults = () => {
    const location = useLocation();
    const{roll}=location.state || "22B81A0416"
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  // ✅ Added missing state for errors

    const {mutate:fetchdata}=useMutation ({
       mutationFn: async(RollNumber)=>{
          try{
            console.log("entered",RollNumber)
           const res = await fetch("/api/name", {
  method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify({roll:RollNumber})
});
            const data=await res.json();  
            console.log(data)
            setData(data);

            setLoading(false);

          }catch(error){
            console.log(error);

          }
       },

      
    })

    useEffect(() => {
      setLoading(true);
        fetchdata(roll);
    }, []);

    return (
        <>
      <div>
       
        {loading ? (
          <>
          <div class="spinner-border text-secondary" id="spinner" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

          </>
        ):(
          <>
            {data?.map((element, index) => (
              
              <div key={index}>
                <h1 id="sem_number">SEM-{index+1}</h1>
                <Results key={index} obj={element} index={index} />
                <hr />
              </div>
            ))}
            <h1 id="sem_number">THE END</h1>
          </>
        )}
      </div>
    </>
    );
};

export default OverAllResults;
