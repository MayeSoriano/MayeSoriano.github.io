import React, { useRef, useState } from 'react';
import IntroImg from '../img/hugo-barbosa-TnG2q8FtXsg-unsplash.png';
import logo from '../img/Picture5.png';
import './HomeImgStyle.css';
import About from './About'; // Import the About module
import Contact from './Contact'; // Import the Contact module
import IntroImg1 from '../img/1.jpeg';
import IntroImg2 from '../img/2.jpeg';
import IntroImg3 from '../img/3.jpeg';
import IntroImg4 from '../img/4.jpeg';
import IntroImg5 from '../img/5.jpeg';
import IntroImg6 from '../img/6.jpeg';
import IntroImg7 from '../img/7.jpeg'; // Add more image imports as needed
import IntroImg8 from '../img/8.jpeg';
import IntroImg9 from '../img/9.jpeg';
import IntroImg10 from '../img/10.jpeg';

const HomeImg = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth'});
  };
  const [imageOrder, setImageOrder] = useState([IntroImg1, IntroImg2, IntroImg3,IntroImg4,IntroImg5,IntroImg6,IntroImg7,IntroImg8,IntroImg9,IntroImg10]);

  const switchImages = () => {
    // Rotate the order of images when clicked
    setImageOrder((prevOrder) => [
      prevOrder[1], // Move the first image to the second position
      prevOrder[2],
      prevOrder[3],
      prevOrder[4],
      prevOrder[5],
      prevOrder[6],
      prevOrder[7],
      prevOrder[8],
      prevOrder[9],
      prevOrder[10], // Move the second image to the third position
      prevOrder[0], // Move the third image to the first position
    ]);
  };
  return (
    <div>
      {/* Home Container */}
      <div className="home">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
          <p>Hello, I'm</p>
          <h1>ALYSSA SORIANO</h1>
          <h2>Welcome to My Portfolio</h2>

          <div className="pic">
            <img className="Me" src={logo} alt="Logo" />
          </div>
          <div>
            <button onClick={scrollToAbout} className="btn">
              About
            </button>
            <button onClick={scrollToContact} className="btn">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* About Module Container */}
      <div ref={aboutRef}>
        <About />
      </div>
            {/* Text "My Shots" */}
            <div className="my-shots-text">
        <h3>My Shots</h3>
      </div>
      <div className="hobby" onClick={switchImages}>
  {imageOrder.map((image, index) => (
    <img className={`hobbys${index + 1}`} src={image} alt={`IntroImg${index + 1}`} key={index} />
  ))}
</div>
      {/* Contact Module Container */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default HomeImg;
