import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./NavbarStyles.css";
import logo from './logo.png';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
    const [color, setColor] = useState(false);
    const location = useLocation();
    const isProjectsPage = location.pathname === '/Projects';

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToAbout = () => {
        if (isProjectsPage) {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            const aboutLink = document.getElementById('about-link');
            if (aboutLink) {
                aboutLink.click();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <li>
                <img src={logo} alt="Logo" />
            </li>
            <ul className="nav-menu">
                <li>
                    <Link to="/" onClick={scrollToTop}>Home</Link>
                </li>
                <li>
                    <Link to="/Projects" onClick={scrollToTop}>Projects</Link>
                </li>
                <li>
                    <a href={isProjectsPage ? '/#about' : '#about'} id="about-link" onClick={scrollToAbout}>About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
