import { useState,useEffect } from "react";
import Results from "./Results";
import { useLocation } from "react-router-dom";
import Alldataout from "./Alldataout";


function OverAllResult(){
const [data,setdata]=useState(null);
const [loading,setloading]=useState(true);
const location=useLocation();
const from=location.state?.from||"unkonow";

const callsite=async()=>{
    try{
        let url='api/results'
        console.log({from})
        // let currenturl=window.location.href;
        if(from=="oneperson"){
         url='api/result'
        }
        let responce=await fetch(url);

        if(!responce.ok){
            throw new Error(`Http error! status:${responce.status}`)
        }
        let result=await responce.json();
        setdata(result);
    }catch(err){
        console.log("error occured:",err)
    }
    finally{
        setloading(false)
       
    }
}

useEffect(()=>{
    callsite();
},[]);

return(
    <>
    {/* <div style={{backgroundColor:"grey"}}>
    <h1 style={{padding:"10px",margin:"0px 0px 0px 30vw"}}>Overall sem results are:{from}</h1>
    </div> */}
    <div>
      {loading?(<h1>loading....</h1>):(from=="oneperson"?(
        <>
    {data?.map((element,index)=>(
       <div key={index}>
      
      <h1 style={{padding:"10px 0px 10px 45vw",bacgroungColor:"green"}} >Sem{index+1} </h1>
        <Results key={index} obj={element} index={index} />
        <hr ></hr>
        </div>
    ))}
    <h1 style={{padding:"10px",margin:"10px 0px 0px 45vw"}}>THE END</h1>
    </>):(<>
        <Alldataout dd={data}/>
       {/* { console.log("tghis is from asjdnas   ",data)} */}
    </>
        )
    
    )}
    </div>
  </>
)

}
export default OverAllResult;