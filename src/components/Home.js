import React from 'react'
import {Typewriter,Cursor} from "react-simple-typewriter"
const Home = (props) => {
  const word=["Create Notes","Update Notes","Delete Notes"]
  return (
    <div style={{height:"80vh"}}>
    <div className=' d-flex ' style={{marginBottom:"10vh",justifyContent:"center",alignItems:"center"}} >
    <div>
    <span style={{fontSize:"25px", color:"yellow"}}>Here you can </span>
    <span style={{color:"red",fontSize:"30px"}}><Typewriter words={word} typeSpeed={40} deleteSpeed={20} loop={Infinity} ></Typewriter></span>
    <Cursor/>
    </div>
    </div>
    </div>
  )
}

export default Home