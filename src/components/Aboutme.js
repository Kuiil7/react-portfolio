

import {NavLink} from "react-router-dom";

import Icons from "./Icons";

import JAM_resume from "../docs/JAM_resume.docx"

import portfolio_portrait_1_m from "../images/portfolio_portrait_1_m.jpg"

function AboutMe() {
    return (

      <div className="container ">

<div className="columns-reverse">

<div className="column is-half is-offset-one-quarter pt-6 mt-6">

<figure className="image is-fluid is-flex  " >
  <NavLink
  to="/aboutme">
    <img alt="jose's profile" className="is-rounded  box has-background-grey-lighter  " src={portfolio_portrait_1_m} />
    </NavLink>
</figure>
</div>

<div className="columns-reverse has-text-centerd ">
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
<div className="column has-text-justified p-5">
<p >
  My career began with Sales and Marketing for Telecommunications sector for Fortune 500 compaines such as <strong> MCI WorldCom and AT&T </strong> for example. Coding has not only been a necessity in every role in my previous roles that I have filled in every position but also has been a lifelong untapped passion of mine. When I was enrolled in my Master of Arts program at Gallaudet Universit to study Linguistics, I took campus job that led to a full time job in Web Development. For that reason, it was clear that coding was my calling. Last year, I enrolled at the <strong>George Washington University's   Coding Boot Camp </strong> to obtain my professional certification. The coding program provided me the foundation, skills and tools to create and build websites and applications from the ground up.
   </p>
   <p>
   My most recent work has been the creation of Single Page Apps (SPA) Progressive Web Apps (PWA) offline capability, and working nonstructural databases (MongoDB Atlas).
   </p>
   <p>
   I bring: <strong> Full Stack Web Development, UX/UI design principles, technical expertise, and troubleshooting skills. </strong>
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