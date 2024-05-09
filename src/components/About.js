import React from 'react';
import "./About.css";
import myGif from '../img/icegif-224.gif';

const About = () => {
  return (
    <div className="about-container" id='about'>
      <div className="about-image">
        <img src={myGif} alt="About GIF" />
      </div>
      <div className='about-content'>
        <h2>About Me</h2>
        <p>Hi, I'm Alyssa Maye R. Soriano, a 4th year student studying at  
          <p></p>Central Luzon State University and currently taking a Bachelor 
          <p></p>of Science in Information Technology.  
        </p>
        <div className="about-details">
          <div className="about-detail">
            <h2>Home Address</h2>
            <p>Purok 3 Brgy. Buhangin Baler, Aurora</p>
          </div>
          <div className="about-detail">
            <h2>Birthday:</h2>  
            <p>November 3, 2000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
