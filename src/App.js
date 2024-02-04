// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { createContext,useContext } from 'react';
import { useState } from 'react';
import NotesContextProvider from './context/notes/NotesContextProvider';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import AddNotes from './components/AddNotes';
import Notes from './components/Notes';

function App() {
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2500)
  }
  return (
    <NotesContextProvider>
      <div className="containerh" style={{backgroundColor:"#80d9f7" }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Alert alert={alert}></Alert>
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert}></Home>}></Route>
            <Route exact path='/home' element={<Home></Home>}></Route>
            <Route exact path='/about' element={<About></About>}></Route>
            <Route exact path='/login' element={<Login showAlert={showAlert}></Login>}></Route>
            <Route exact path='/signup' element={<Signup showAlert={showAlert}></Signup>}></Route>
            {
              localStorage.getItem('token')?
              <>
            <Route exact path='/addnotes' element={<AddNotes showAlert={showAlert}/>}></Route>
            <Route exact path='/notes' element={<Notes showAlert={showAlert}/>}></Route>
            </>
            :
            ""

            }
          </Routes>
        </BrowserRouter>
      </div>

    </NotesContextProvider>
  );
}

export default App;
