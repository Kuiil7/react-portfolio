import './App.css';
import React, { Fragment, useState, useEffect } from 'react';

import {Route,NavLink,HashRouter} from "react-router-dom";


import AboutMe from "./AboutMe";
import Portfolio from './Portfolio';

import self_portrait_1_m from "./images/portrait/self_portrait_1_m.jpg"
import JAM_resume from "./docs/JAM_resume.docx"


function App() {

  const [isActive, setisActive] = useState(false)



  return (



    <div className="App  ">


<section class="hero is-light is-fullheight">
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand"
        >


<NavLink
className=" navbar-item is-active has-background-light "
to="/">
JGAMWORKS
</NavLink>


<div
  onClick={() => {
  setisActive(!isActive)
          }}
  role='button'
  className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
  aria-label='menu'
  aria-expanded='false'
        >
  <span aria-hidden='true'></span>
  <span aria-hidden='true'></span>
  <span aria-hidden='true'></span>
  </div>
  </div>



        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>



        <div class="navbar-end">


<NavLink
className=" navbar-item "
to="/">
<p class="heading">Home</p>
</NavLink>

<NavLink
className=" navbar-item "
to="/aboutme">
<p class="heading">About Me</p>
</NavLink>

<NavLink
className=" navbar-item "
to="/portfolio">
<p class="heading">Portfolio</p>

</NavLink>
    </div>
      </div>

      </div>
    </header>
  </div>






  <div class="hero-body">
    <div class="container has-text-centered">

  <figure className="image is-fluid mb-2 is-square  " >
  <NavLink
  to="/aboutme">
    <img alt="jose's profile" className="p-2 is-rounded box has-background-primary" src={self_portrait_1_m} />
    </NavLink>
</figure>


    <nav class="level">
  <div class="level-item has-text-centered">
    <div>

  <a href={JAM_resume} target="_blank" rel="noopener noreferrer" download>
<i className="fa fa-file-o fa-3x has-text-primary"  aria-hidden="true">  </i>
<p >Resume</p>
</a>

    </div>
  </div>



  <div class="level-item has-text-centered">
    <div>
    <i className="fa fa-github fa-3x has-text-primary " aria-hidden="true"></i>

    <a className="btn " href="https://github.com/Kuiil7" >
    <p >GitHub</p>
      </a>

    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <i className="fa fa-linkedin-square fa-3x has-text-primary " aria-hidden="true"></i>

    <a href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/">
    <p >LinkedIn</p>


 </a>
    </div>
  </div>

</nav>

    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth ">
      <div class="container has-text-centered">
     <a href="http://www.jgamworks.com" alt="my website" > 🤟🏿 JGAMWORKS 🤟🏿</a>
      </div>
    </nav>
  </div>
</section>
    </div>

  );
}

export default App;
