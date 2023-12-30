import React from 'react';
import { useState ,useEffect} from 'react';
import "./Navbar.css";
import { LuListTodo } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const location=useLocation()
    useEffect(() => {
    //   console.log(location.pathname)
    }, [location])
    
    // const dropdown=<DropdownMenu  options={["signin","signup"]}/>
    const menu=["Home","About","notes","info"];
    const [click,setclick]=useState(false);
    const HandleClick=()=>{
        setclick(!click);
    }
    return (
        <div className="containerofnavbar">
    <div className="navbar">
        <div className="logo"><LuListTodo className='logo' ></LuListTodo></div>
        <div className="menus">
        <div className="menuu">
            <ul className={click?"menu active":"menu"}>
            {menu.map((el,id)=>{
                return <li  id={Math.floor(Math.random(Date.now))}><a className={location.pathname===`/${el}`?"hi":"hi activehi"}href={`/${el}`}>{el}</a></li>
            })}
            </ul>
        </div>
        <div className="hamcross" onClick={HandleClick}>
            {click?<div className="cross"><ImCross className='cross'></ImCross></div>:<div className="ham"><GiHamburgerMenu className='ham'></GiHamburgerMenu></div>}
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar