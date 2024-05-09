import React from 'react';
import Navbar from "../components/Navbar";
import HomeImg from "../components/HomeImg";
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="page-container">
      <Navbar />
      <HomeImg />
    </div>
  );
};

export default HomePage;
