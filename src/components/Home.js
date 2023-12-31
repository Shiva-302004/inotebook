import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContex'
import Notes from './Notes'

const Home = () => {
  
  return (
    <div className='container' style={{position:"absolute", marginTop:"11vh"}} >
      <div className="addnotes" >
        <h3 >AddNotes</h3>
        <form className='my-3'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="getnotes my-3">
        <Notes></Notes>
      </div>
    </div>
  )
}

export default Home