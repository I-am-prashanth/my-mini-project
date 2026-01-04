import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import "./comp_css_file/Enter.css"
import Cvrlogo from './Cvrlogo';
import axios from 'axios';



function checkk(a,b)
    {
        
            const dig=new Map([["0",0],["1",1],["2",2],["3",3],["4",4],["5",5],["6",6],["7",7],["8",8],["9",9],["A",10],["B",11],["C",12],["D",13]
                ,["E",14],["F",15],["G",16],["H",17],["J",18],["K",19],["L",20],["M",21],["N",22],["P",23],["Q",24],["R",25],["S",26],["T",27]
                ,["U",28],["V",29],["W",30],["X",31],["Y",32],["Z",33]]);
            if(dig.get(b)<=9)
            return 10*dig.get(a)+dig.get(b);
        else
            return 340+24*(dig.get(a)-10)+dig.get(b)-10
            
    }
   
export default function Enterdata() {
  
    const [usehallticket,sethallticket]=useState("")
    const navigate=useNavigate();
    const checkhallticket=async (e)=>{
      
        e.preventDefault();
                let verifyhall=true;
                let hallticket=usehallticket
                let halllast=hallticket.substring(8);
                console.log("backend data is ",halllast)
                
                // navigate("/results")
                    if(hallticket.length!==10)
                        {
                            verifyhall=false;
                            alert("Invalid roll number size was not correct")
                        }
                    else{
                            let first2=hallticket.substring(0,2);//first two digits of hall ticket
                            let hall3to6=hallticket.substring(2,6);//3-6 digits
                            let hallbranch=hallticket.substring(6,8);
                            let halllast2=hallticket.substring(8,9);
                            
                            console.log(first2," ",hall3to6," ",hallbranch," ",halllast2+halllast)
                            if(hall3to6!=="B81A")
                            {
                                verifyhall=false;
                            
                            alert("Incorrect check B1A0")
                            }
                            else{
                                let a=checkk(halllast2,halllast)
                            // console.log(a);
        
                            if ((hallbranch === "01" && a > 39) ||
                            (hallbranch === "02" && a > 50) ||
                             ( hallbranch === "03" && a > 40) ||
                              (hallbranch === "04" && a > 128) ||
                              (hallbranch === "05" && a > 50) ||
                              (hallbranch === "10" && a > 45 )||
                              (hallbranch === "12" && a > 129) ||
                              (hallbranch === "62" && a > 64) ||
                              (hallbranch === "66" && a > 128) ||
                              (hallbranch === "67" && a > 128))
                              
                            
                            verifyhall = false;
        
                            
                        }
                        
       if(verifyhall){                 
        navigate("/result",{state:{from:"oneperson",roll:usehallticket}})
    }
  }
      
    }

  return (
    <div>
         <>
 
        <div className="box_enter" >
           <Cvrlogo />
            <form className="bo" onSubmit={checkhallticket} >
                <input  id="input1" type="text" name="ticket" placeholder="     enter hallticket number" required
                
                  value={usehallticket} onChange={(e)=>sethallticket(e.target.value)}
                ></input>
                <br /><br />
                
                
              <button  onClick={checkhallticket} type="submit" >submit</button>
            </form>
           
        </div> 
       <div style={{ position: "fixed", bottom: 0, right: 0, padding: "0vh 1vw 1vh 0vh" }}>
             <Link to="/aboutauthors">click here for authors</Link>
           </div>
        
  </>
      
    </div>
  )
}
