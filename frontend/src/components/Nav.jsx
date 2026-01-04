import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div style={{margin:"0.5vw"}}>
      <Link type="button" to="/" className="btn btn-outline-secondary" style={{width:"48vw",padding:"8px"}} >Individual</Link>
      <Link type="button"  to="/results" className="btn btn-outline-secondary"style={{width:"48vw",padding:"8px"}}>Overall</Link>
    </div>
  )
}