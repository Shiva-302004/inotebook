import React from 'react'
import shiva from "./shiva.png"
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { useContext } from 'react'
// import NoteContext from '../context/notes/NoteContex'

const About = ({ children }) => {
  return (
    <div className='container'>
      <p>this app is created by <b>shiva verma</b> in the guidance of code with harry .this project is based on mern stack .</p>
      <div className='d-flex' style={{ flexDirection: 'row' }}>
        <img src={shiva} style={{ height: "80vh", width: "33vw" }}></img>
        <div className='d-flex' style={{ flexDirection: "column" }} >
          <span><b className='mx-4 my-4'>Developer:</b>Shiva Verma</span>
          <span><b className='mx-4'>About:</b>
            <p className='mx-4 my-2'>
              I am shiva verma currently pursuing btech from Nit patna in department of electrical engineering.I am currently in second year.My over all cgpa till now is 8.85
            </p>
          </span>
          <span className='mx-4'>
            <a href="" className='mx-2'style={{textDecoration:"none"}}><FiInstagram></FiInstagram></a>
            <a href="" className='mx-2'style={{textDecoration:"none"}}><FaFacebookSquare></FaFacebookSquare></a>
            <a href="" className='mx-2'style={{textDecoration:"none"}}><FaLinkedinIn></FaLinkedinIn></a>
            <a href="" className='mx-2'style={{textDecoration:"none"}}><FaTwitter></FaTwitter></a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default About