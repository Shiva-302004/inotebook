// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { createContext,useContext } from 'react';
// import { useState } from 'react';
import NotesContextProvider from './context/notes/NotesContextProvider';

function App() {

  return (
    <NotesContextProvider>
      <div className="container">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Home ></Home>}></Route>
            <Route exact path='/home' element={<Home></Home>}></Route>
            <Route exact path='/about' element={<About></About>}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </NotesContextProvider>
  );
}

export default App;
