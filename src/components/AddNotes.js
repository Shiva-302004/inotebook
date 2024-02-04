import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContex'
// const REACT_APP_URL=process.env.REACT_APP_URL
const AddNotes = (props) => {
    const [value,setvalue]=useState({"title":"","description":"","tag":""})
    const Contex=useContext(NoteContext)
    const {AddNote}=Contex
    const handleClick=(e)=>{
        e.preventDefault()
        AddNote(value.title,value.description,value.tag)
        props.showAlert("notes added","success")
    }
    const onChange=(e)=>{
        setvalue({...value,[e.target.name]:e.target.value})
    }
    return (
        <div className="container addnotes d-flex align-items-center" style={{flexDirection:"column",border:"2px solid black",height:"80vh"}} >
            <h3 >AddNotes</h3>
            <form className='my-3 mx-4'>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                    <input name='title' type="title" minLength={5} className="form-control" id="title"   onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                    <textarea name='description' minLength={5} type="text" className="form-control" id="description" aria-describedby="emailHelp"  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1"  className="form-label">tag</label>
                    <input type="tag" name='tag' className="form-control" id="tag"  onChange={onChange} />
                </div>
                <button type="submit" disabled={value.description.length<5||value.title.length<5} className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNotes