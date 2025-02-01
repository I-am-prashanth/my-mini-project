import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div  style={{margin:"0vh 0vh 0vh 35vw",Align:"center"}}>
      <h2>This page is Created by</h2>
      <h5>PRASANNA KUMAR(22B81A0425)</h5>
      <h5>PRASHANTH KUMAR(22B81A0427)</h5>
      <h5>THARUN KUMAR(22B81A0452)</h5>
      <p>with metoring of</p>
      <h5>VIJAYA NIRMALA </h5>
      <Link to="/" style={{margin:"0vw 0vh 0vh 10vw"}}>back</Link>
    </div>
  )
}

export default About
