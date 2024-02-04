import React, { useContext } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoPricetagsSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import NoteContext from '../context/notes/NoteContex';
const Noteitem = (props) => {
    const context=useContext(NoteContext)
    const {DeleteNote}=context
    return (
        
        <div className='my-3 ' >
            <div className="card " >
                <div className="card-body">
                    <h5 className="card-title">{(props.note.title)}</h5>
                    <p className="card-text">{props.note.description} </p>
                    <h6 className="card-subtitle mb-2 text-body-secondary d-flex align-items-center justify" style={{justifyContent:"space-between"}}>
                        <span>
                            <IoPricetagsSharp style={{height:"15px",width:"15px",cursor:"pointer"}}></IoPricetagsSharp>
                           <span style={{marginLeft:"10px", fontSize:"15px"}}>{props.note.tag}</span> 
                        </span> 
                        <span>
                            <RiDeleteBinLine style={{height:"15px",width:"15px",marginRight:"10px", cursor:"pointer"}} onClick={()=>{DeleteNote(props.note._id);props.showAlert("notes deleted","success")}}></RiDeleteBinLine>
                            <FiEdit style={{height:"15px",width:"15px",cursor:"pointer"}} onClick={()=>{props.updatenote(props.note);props.showAlert("notes updated","success")}}></FiEdit>
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Noteitem