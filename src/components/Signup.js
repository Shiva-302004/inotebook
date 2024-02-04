import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import Alert from './Alert'
const REACT_APP_URL=process.env.REACT_APP_URL

const Signup = (props) => {
    const [val, setval] = useState({
        name:"",
        email:"",
        password:""
    })
    const Onchange=(e)=>{
        setval({...val,[e.target.name]:e.target.value})
    }
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch(`https://notesbackend30.onrender.com/api/auth/signup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(val)
        })
        const json =await response.json()
        // console.log(json)
        if(json.success===true){
        localStorage.setItem("token",json.jwt_token)
        navigate("/addnotes")
        props.showAlert(json.message,"success")
        }else{
            props.showAlert(json.msg,"danger")
        }
    }
  return (
    <div>
        <div className=' mx-4'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">username</label>
                    <input type="text" name='name' value={val.name} className="form-control" onChange={Onchange} id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' value={val.email} className="form-control" id="email"onChange={Onchange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' value={val.password} className="form-control"onChange={Onchange} id="password" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup