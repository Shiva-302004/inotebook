import React, {useState, useEffect, useRef } from 'react'
import NoteContext from '../context/notes/NoteContex'
import Noteitem from './Noteitem'
// import AddNotes from './AddNotes'
import { useNavigate } from 'react-router-dom'
const Notes = (props) => {
  
  const context = React.useContext(NoteContext)
  const { note,getnotes,EditNote} = context
  const navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')){
      getnotes()
    }else{
      navigate("/login")
    }
    
  },[])
  const ref=useRef(null)
  const refClose=useRef(null)
  const [value,setvalue]=useState({id:"",etitle:"",edescription:"",etag:""})
  const updatenote = (currentNote) => {
    ref.current.click();
    setvalue({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    props.showAlert("notes updated","success")
  }
  
    const handleClick=(e)=>{
        // e.preventDefault()
        EditNote(value.id,value.etitle,value.edescription,value.etag)
        refClose.current.click();
        
    }
 
  const onChange=(e)=>{
    setvalue({...value,[e.target.name]:e.target.value})
}

  return (
    <>
      {/* <AddNotes showAlert={props.showAlert}></AddNotes> */}
      <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}>
           Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update your note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                    <input name='etitle' type="etitle" minLength={5} value={value.etitle} className="form-control" id="etitle" style={{  border: "2px solid black" }}  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                    <textarea name='edescription' minLength={5} type="edescription" className="form-control" value={value.edescription} id="edescription" aria-describedby="emailHelp" style={{  height: "30vh", border: "2px solid black" }} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1"  className="form-label">tag</label>
                    <input type="tag" name='etag' value={value.etag} className="form-control" id="etag" style={{  border: "2px solid black" }} onChange={onChange} />
                </div>
                
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={value.etitle.length<5||value.edescription.length<5} className="btn btn-primary" onClick={handleClick}>Update Notes</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="getnotes my-3 mx-3" style={{ position: "relative" }}>
          <h3>Your Notes</h3>
          <div className='mx-2'>
            {note.length===0&&'no notes to display'}
          </div>
          <div className='row d-flex flex-wrap '>
            {
              note.map((note) => {
                return <Noteitem showAlert={props.showAlert} key={note._id} updatenote={updatenote} note={note} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes