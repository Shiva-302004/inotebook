import React from 'react'

const Noteitem = (props) => {
    return (
        
        <div className='my-3 col-md-3' style={{paddingLeft:"30px"}}>
            <div className="card" style={{width: "20vw" ,maxHeight:"30vh"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description} </p>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.note.tag}</h6>
                </div>
            </div>
        </div>
    )
}

export default Noteitem