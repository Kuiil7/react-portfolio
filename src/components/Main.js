import React from "react";
import {NavLink} from "react-router-dom";


import JAM_resume from "../docs/JAM_resume.docx"
import portfolio_portraits_2_xs from "../images/portfolio_portraits_2_xs.jpg"


function Main () {
  return (

<div className="container" style={{marginTop:"200px"}}>
  <div className="row-reverse text-center ">
    <div className="col-md ">

    <NavLink className="text-dark"
  to="/aboutme">
    <img alt="jose's profile" height={400} className="border p-2  border-white fade-in rounded-circle p-1 bg-light shadow-lg fade-in-3 fade-in" src={portfolio_portraits_2_xs} />
    </NavLink>



    </div>
    <div className="col-md ">
    <h4 style={{marginTop:"20px"}}>
    Jose Aguilera Merino
      </h4>
      <h5 >
      Full Stack Developer
      </h5>
      <a href="mailto:jgamerino@gmail.com" id="email" className="text-dark">
        <p >
        jgamerino@gmail.com
          </p>
          </a>
     <p>
     <i className="fa text-danger fa-map-pin "></i> San Diego, CA
     </p>
    </div>
    <div className="row">
    <div className="col-sm ">
    <a className="btn " href="https://github.com/Kuiil7" >
    <i className="fa fa-github fa-3x " aria-hidden="true"></i>
      </a>
    </div>
    <div className="col-sm">
    <a className="btn    " href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/">
    <i className="fa fa-linkedin-square fa-3x " aria-hidden="true"></i>
     </a>
    </div>
    <div className="col-sm">
<a href={JAM_resume} target="_blank" rel="noopener noreferrer" download>
<i className="fa fa-file-o fa-3x text-dark"  aria-hidden="true"></i>
</a>
</div>
  </div>
</div>
    </div>


  );
}

export default Main;