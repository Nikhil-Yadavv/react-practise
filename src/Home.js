import './App.css';
import React from 'react';
import web from '../src/Images/pic2.webp';
import { Link } from 'react-router-dom';
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common
        name='Grow your business with'
        imgscr={web}
        visit='/service'
        btnname="Get Started" />
    </>
  );
}

export default Home;