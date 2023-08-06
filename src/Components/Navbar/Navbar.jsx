import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark" style={{backgroundColor:"#828282"}}>
        <div class="container-fluid">
          <Link class="navbar-brand mb-0 h1" to="/">Sed-Portfolio</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/toolsTechnologies">Tools & Technologies</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/projects">Projects</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/aboutMe">About Me</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/contactMe">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
