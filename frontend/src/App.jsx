import './App.css'

import { Route, Routes } from 'react-router-dom';

import Landing from './publicAccess/Pages/Landing';
import Navbar from './publicAccess/components/Navbar'
import SignUp from './publicAccess/Pages/SignUp';
import { useState } from 'react';

function App() {

  return (
    <>
    <Navbar/> 
    <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/signup" element={<SignUp/>} />
    </Routes>

    </>
  )
}

export default App
