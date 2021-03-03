import {React, NavLink} from "react-router-dom";

import JAM_resume from "../docs/JAM_resume.docx"

import self_portrait_1_m from "../images/self_portrait_1_m.jpg"

function Main () {
  return (

<div  style={{marginTop:"150px"}} className="container  is-justify-content-center is-flex is-flex-mobile">

<div  className="columns-reverse ">

  <div className="column " >

  <figure className="image is-fluid mb-2 is-square  " >
  <NavLink
  to="/aboutme">
    <img alt="jose's profile" className="p-2 is-rounded box has-background-primary" src={self_portrait_1_m} />
    </NavLink>
</figure>
</div>

<div className="container ">
<div className="columns is-flex is-justify-content-center has-text-centered">
  <div className="column ">
<p className="is-size-2">
Jose Aguilera Merino </p>
<p className="is-size-5">
Full Stack Developer - MERN
</p>
    </div>
    </div>

    <div className="columns is-flex is-justify-content-center">
<div className="row ">
<i className="fa fa-1x has-text-danger  fa-map-pin pr-3 mb-6"> </i>
San Diego, CA
</div>
</div>
</div>


<div className="columns is-flex is-align-items-center-center has-text-centered">
  <div className="column ">
  <a className="btn " href="https://github.com/Kuiil7" >
    <i className="fa fa-github fa-3x has-text-primary " aria-hidden="true"></i>
      </a>
</div>
  <div className="column">
  <a href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/">
    <i className="fa fa-linkedin-square fa-3x has-text-primary " aria-hidden="true"></i>
     </a>
    </div>
  <div className="column">
  <a href={JAM_resume} target="_blank" rel="noopener noreferrer" download>
<i className="fa fa-file-o fa-3x has-text-primary"  aria-hidden="true"></i>
</a>
    </div>

</div>

    </div>
    </div>

  );
}

export default Main;