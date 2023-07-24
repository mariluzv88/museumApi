import React from "react";
import { useEffect,useState } from "react";
import {Route,Routes} from 'react-router-dom'
import Main from "./pages/Main";
import Museums from "./pages/Museums";
import Nav from "./components/Nav";
import axios from 'axios'


function App() {

  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/museums" element={<Museums/>}/>
           
        </Routes>
    </div>
  )
}

export default App