import React from 'react'
import NoteContext from '../context/notes/NoteContex'
import Noteitem from './Noteitem'
const Notes = () => {
    const context=React.useContext(NoteContext)
    const {note,setnote}=context
  return (
    <div className='container'>
        <h3>Your Notes</h3>

        <div className='row '>
        {
          note.map((note)=>{
            return <Noteitem note={note}/>
          })
        }
        </div>
        
    </div>
  )
}

export default Notes