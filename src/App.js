import './App.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import self_portrait_1_m from "./images/portrait/self_portrait_1_m.jpg"
import JAM_resume from "./docs/JAM_resume.docx"







function App() {



  return (



    <div className="App  ">

<div className="Container  ">


<section class="hero  is-fullheight">


  <div class="hero-body">
    <div class="container has-text-centered">



    <div className="
columns

">

<div className="
column
is-half
is-offset-one-quarter
">

  <figure className="image is-fluid mb-2 is-square  " >
  <NavLink
  to="/aboutme">
    <img alt="jose's profile" className="p-2 is-rounded box has-background-primary" src={self_portrait_1_m} />
    </NavLink>
</figure>


</div>

</div>





    <nav class="level is-mobile">
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
    </div>
  );
}

export default App;
