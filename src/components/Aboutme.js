

import {NavLink} from "react-router-dom";

import Icons from "./Icons";

import JAM_resume from "../docs/JAM_resume.docx"

import portfolio_portrait_1_m from "../images/portfolio_portrait_1_m.jpg"

function AboutMe() {
    return (

      <div className="container ">

<div className="columns-reverse">

<div className="column is-half is-offset-one-quarter pt-6 mt-6">

<figure className="image is-fluid is-flex " >
  <NavLink
  to="/aboutme">
    <img alt="jose's profile" className="is-rounded  " src={portfolio_portrait_1_m} />
    </NavLink>
</figure>
</div>

<div className="columns-reverse has-text-centered  ">
  <div className="column">
  <p className="is-size-3" >
  Jose <strong>Aguilera Merino </strong>
</p>
<p className="is-size-4" >
Full Stack Developer - MERN
</p>
<a href="mailto:jgamerino@gmail.com" id="email">
        <p className="mb-4 is-size-5">
        jgamerino@gmail.com
          </p>
          </a>
<p className="is-size-5" >
<i className="fa text-danger fa-map-pin has-text-danger"></i> San Diego, CA
</p>
    </div>
    <div className="columns-reverse  is-flex">
  <div className="column  ">
  <a className="p-2 " href="https://github.com/Kuiil7" >
    <i className="fa fa-github fa-3x has-text-dark " aria-hidden="true"></i>
      </a>
<a className="p-2 " href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/">
    <i className="fa fa-linkedin-square fa-3x has-text-dark " aria-hidden="true"></i>
     </a>
     <a className="p-2 " href={JAM_resume} target="_blank" rel="noopener noreferrer" download>
<i className="fa fa-file-o fa-3x has-text-dark"  aria-hidden="true"></i>
</a>


</div>
</div>




<div className="columns ">
<div className="column has-text-justified ">
<p >
  My career began at Telecommunications and Marketing with MCI WorldCom and more recently AT&T Relay Services in a national capacity. Coding was not only a necessity in these roles, it had been a lifelong untapped passion. To continue improving these skills I enrolled in the George Washington Coding Boot Camp and obtained my professional certification. This program provided me the foundation, skills and tools to create and build websites and applications from the ground up.
   </p>
   <p>
   My most recent work has been the creation of Single Page  Progressive Web Apps (PWAs) with offline capability, and working nonstructural databases (MongoDB Atlas).
   </p>
   <p>
   I bring: <strong> Full Stack Web Development, UX/UI design principles, technical expertise, and problem-solver among many not listed here. </strong>
   </p>
</div>
</div>

<Icons/>

</div>


  </div>
  </div>

);
}

export default AboutMe;