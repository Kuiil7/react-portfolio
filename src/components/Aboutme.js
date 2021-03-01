import {NavLink} from "react-router-dom";

import Icons from "./Icons";

import JAM_resume from "../docs/JAM_resume.docx"

import self_portrait_1_m from "../images/self_portrait_1_m.jpg"

function AboutMe() {
    return (

      <div className="container ">

<div className="columns-reverse mt-6 p-5">

<div className="column is-half ">

<figure className="image is-fluid    " >
  <NavLink
  to="/aboutme">
    <img alt="jose's profile" align="left" className="is-rounded  p-2 box m-3 has-background-primary  " src={self_portrait_1_m} />
    </NavLink>
</figure>
</div>

<div className="columns-reverse  ">
  <div className="column">
  <p className="is-size-3 " >
  Jose <strong >Aguilera Merino </strong>
</p>
<p className="is-size-5" >
Full Stack Developer - MERN
</p>
<a href="mailto:jgamerino@gmail.com" >
  <p className="mb-4 is-size-6">
      jgamerino@gmail.com
  </p>
 </a>
<p className="is-size-5" >
<i className="fa text-danger fa-map-pin has-text-danger mr-1"></i>
San Diego, CA
</p>
    </div>
    <div className="columns-reverse  is-flex  ">
  <div className="column   ">
  <a className="p-2 " href="https://github.com/Kuiil7" >
    <i className="fa fa-github fa-3x  has-text-primary " aria-hidden="true"></i>
      </a>
<a className="p-2 " href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/">
    <i className="fa fa-linkedin-square fa-3x  has-text-primary " aria-hidden="true"></i>
     </a>
     <a className="p-2 " href={JAM_resume} target="_blank" rel="noopener noreferrer" download>
<i className="fa fa-file-o fa-3x has-text-primary "  aria-hidden="true"></i>
</a>
</div>
</div>

<div className="column pb-3 has-text-justified">
<p   >
My career began with Sales and Marketing in the Telecommunications sector for Fortune 500 companies, such as MCI WorldCom and AT&T. Coding has not only been a necessity in every role in my previous roles that I have filled in every position but also has been a lifelong untapped passion of mine. Not only has coding been integral in every previous position I have had, coding has been a lifelong untapped passion of mine. When I was enrolled in my Master of Arts program at Gallaudet University to study Linguistics, I took campus job that led to a full time job in Web Development. For that reason, it was clear that coding was my calling.
</p>

  <p className="pb-3" >
  Last year, I enrolled at  <strong>The George Washington University's Coding Boot Camp </strong> to obtain my professional certification. The coding program provided me the foundation, skills and tools to create and build websites and applications from the ground up.
    </p>

   <p className="pb-3" >
   My most recent work has been the creation of Single Page Apps (SPA) and Progressive Web Apps (PWA) offline capability, as well as working nonstructural databases (MongoDB Atlas).
   </p>
   <p className="pb-3">
   I bring: <strong> full stack web development, UX/UI design principles, technical expertise, and troubleshooting skills. </strong>
   </p>
</div>
<Icons/>
</div>
  </div>
  </div>

);
}

export default AboutMe;