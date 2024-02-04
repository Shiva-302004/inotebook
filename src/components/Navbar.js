import React from 'react';
import { useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';


const Navbar = () => {
    const location=useLocation()
    const Navigate=useNavigate()
    useEffect(() => {
    //   console.log(location.pathname)
    }, [location])
    const handleclick=()=>{
      localStorage.removeItem('token')
      Navigate("/login")
    }
    
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">i-NoteBook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page"  href="/">Home</a>
        </li>
        {
          localStorage.getItem('token')?<>
          <li className="nav-item">
          <a className={`nav-link ${location.pathname==='/addnotes'?"active":""}`} aria-current="page"  href="/addnotes">addNotes</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname==='/notes'?"active":""}`} aria-current="page"  href="/notes">Notes</a>
        </li>
          </>:""
        }
        
        <li className="nav-item">
          <a className={`nav-link ${location.pathname==='/about'?"active":""}`} aria-current="page"  href="/about">About</a>
        </li>
        {!localStorage.getItem('token')?<>
        <li className="nav-item">
          <a className="btn btn-primary mx-1" aria-current="page"  href="/signup">signup</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-primary mx-1" aria-current="page"  href="/login">login</a>
        </li>
        </>
        :
        <li className="nav-item">
          <button className="btn btn-primary mx-1" aria-current="page"  onClick={handleclick}>logout</button>
        </li>
        }
        </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar