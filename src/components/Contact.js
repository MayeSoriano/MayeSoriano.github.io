import React from 'react'
import "./Contact.css"; 
import { 
  FaHome, 
  FaPhone, 
  FaMailBulk, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact" id='contact'>
      <h1>Contact</h1>
      <p>Contact Me Anytime! :)</p>
      <div className="contact-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Baler, Aurora Philippines
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              09084665358
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              alyssamaye.soriano@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <div className='social'>
            <a
              href="https://www.facebook.com/AlyssaMayeSoriano3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
              AlyssaMayeSoriano3
            </a>
            <a
              href="https://twitter.com/Maye_Soriano3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
              Maye_Soriano3
            </a>
            <a
              href="https://www.instagram.com/maye.soriano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
              maye.soriano
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
