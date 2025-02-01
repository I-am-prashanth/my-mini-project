import React, { Component } from 'react'
import Banner from "./components/Title.jsx"
import Nav from "./components/Nav.jsx"
import { Outlet } from "react-router-dom"
export default class App extends Component {

 
  render() {
    return (
      <div>
      <Nav />
       <Banner />      
       <Outlet />
      </div>
    )
  }
}


