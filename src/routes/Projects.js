import React from 'react';
import Navbar from "../components/Navbar";
import Contact from '../components/Contact';
import HomeImg2 from '../components/HomeImg2';
import { Project1, Project2 } from '../components/Project1';


const Projects = () => {
  return (
    <div>
      <Navbar />
      <HomeImg2 heading="My Projects" text="Some of My Works" />
      <Project1 />
      <Project2 />
      <Contact />
    </div>
  );
};

export default Projects;
