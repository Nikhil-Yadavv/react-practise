import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './AboutPage';
import Service from './Service';
import Contact from './Contact';
import NavBar from './NavBars';
import {Route, Routes, } from "react-router-dom";
import Footer from './Footer';

const App = () =>{
  return (
    <>
    <NavBar/>
    <Routes> 
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/service" element={<Service/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
