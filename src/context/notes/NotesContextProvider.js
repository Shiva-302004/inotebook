import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContex";
// import { useState } from "react";
const REACT_APP_URL=process.env.REACT_APP_URL
const NotesContextProvider = (props) => {
  // const host = process.env.HOST_OF_SERVER
  // console.log(host)
  const initialstate=[]
  const [note, setnote] = useState(initialstate)

  //getnotes notes /api/notes/addnotes
  const getnotes = async (title, description, tag) => {
    const response = await fetch(`https://notesbackend30.onrender.com/api/notes/fetchallnotes`,
      {
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
          'auth-token': localStorage.getItem('token')
        },
      })
    const json = await response.json()
    // console.log(json)
    setnote(json)
  }
  //add notes /api/notes/addnotes
  const AddNote = async (title, description, tag) => {
    const response = await fetch('https://notesbackend30.onrender.com/api/notes/addnotes',
      {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag})
      })
    const json = await response.json()
    
    // console.log("new note le bhosari wale")
    setnote(note.concat(json))
  }
  //deletenote
  const DeleteNote = async(id) => {
    const response = await fetch(`https://notesbackend30.onrender.com/api/notes/deletenote/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': "application/json",
          'auth-token': localStorage.getItem('token')
        }
      })
    // const json =await response.json()
    // console.log(json)
    const newNotes = note.filter((note) => {
      return note._id !== id
    })
    setnote(newNotes)
  }
  //edit node
  const EditNote = async (id, title, description, tag) => {

    const response = await fetch(`https://notesbackend30.onrender.com/api/notes/updatenote/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': "application/json",
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag})
      })
      // console.log(JSON.stringify({title,description,tag}))
    // const json =await response.json()
    // console.log(json)
      let NewNote=JSON.parse(JSON.stringify(note))
    for (let i = 0; i < NewNote.length; i++) {
      const not = NewNote[i]
      if (not._id === id) {
        NewNote[i].title = title
        NewNote[i].description = description
        NewNote[i].tag = tag
        break;
      }
      
    }
    setnote(NewNote)
  }
  
  return (
    <NoteContext.Provider value={{ note, setnote, AddNote, DeleteNote, EditNote ,getnotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NotesContextProvider;