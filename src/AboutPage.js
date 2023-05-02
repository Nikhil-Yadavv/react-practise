import './App.css';
import React from 'react';
import web from '../src/Images/pic.png';
import { Link } from 'react-router-dom';
import Common from './Common'; 

const About = () => {
  return (
    <>
      <Common 
        name='Welcome to About page'
        imgscr={web}
        visit='/contact'
        btnname="Contact Now" />
    </>
  );
}


export default About;