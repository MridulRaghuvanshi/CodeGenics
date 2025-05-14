import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from './pages/contact';
import Symptom from './pages/Symptom';
import Documentation from './pages/Documentation';
import About from './pages/About';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/symptoms" element={<Symptom />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    
  )
}

export default App
