import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"
const REACT_APP_URL=process.env.REACT_APP_URL
// import Home from "./Home"
const Login = (props) => {
    const [val, setval] = useState({ email: "", password: "" })
    let History=useNavigate()
    const Onchange = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://notesbackend30.onrender.com/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: val.email, password: val.password })
        })
        const json = await response.json()
        // console.log(json)
        if(json.success===true){
            localStorage.setItem("token",json.jwt_token)
            History("/notes")
            props.showAlert(json.msg,"success")
        }else{
            props.showAlert(json.msg,"danger")
        }
    }
    return (
        <>
            <div className='  mx-4'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" value={val.email} id="email" aria-describedby="emailHelp" onChange={Onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" value={val.password} id="password" aria-describedby="emailHelp" onChange={Onchange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login