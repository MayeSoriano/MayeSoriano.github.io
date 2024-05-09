import React from 'react';
import "./index.css";
import Navbar from "./components/Navbar";
import "./styles.css";
import HomePage from "./routes/HomePage";
import Projects from "./routes/Projects";
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes> 
    </>
  );
}

export default App;
