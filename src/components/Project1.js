import React from 'react';
import './ProjectStyles1.css';
import Navbar from './Navbar';
import Contact from './Contact';
import HomeImg2 from './HomeImg2';
import pro1 from '../img/crud.png';
import pro2 from '../img/ajax_crud.png';

const Project1 = () => {
  return (
    <div className="work-container">
      <div className="project1">
        <h1 className="project1-heading">Project 1 - PHP CRUD</h1>
        <div className="project1-container">
          <div className="project1-card">
            <img src={pro1} alt="Project 1" />
            <div className='pro-paragraph'>
              <p>Project Using CRUD in PHP that can Create, Read, Update, and Delete Students Profile.</p>
            </div>
            <div className='pro-paragraph'>
              <p> It can compute the student's GPA and is also connected to the database.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project2 = () => {
  return (
    <div className="project2">
      <h1 className="project2-heading">Project 2 - AJAX CRUD</h1>
      <div className="project2-container">
        <div className="project2-card">
          <img src={pro2} alt="Project 2" />
          <div className='pro-paragraph'>
            <p>Project Using CRUD in AJAX that can Create, Read, Update, and Delete Students Records.</p>
          </div>
          <div className='pro-paragraph'>
            <p> Student profile can easily be searched, and the project is connected to a database.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Project1, Project2 };
