

import Icons from "./Icons";
import JAM_resume from "../docs/JAM_resume.docx"

import portfolio_portraits_2_xs from "../images/portfolio_portraits_2_xs.jpg"


function AboutMe() {
    return (
<div className=" bg-white p-4 container text-justify ">
  <div className="row ">
    <div className="col-md-lg ">


<img alt="jose's profile"  className="border img-fluid border-white fade-in rounded-circle p-2 bg-light shadow-lg float-left " src={portfolio_portraits_2_xs} />



<h3 >
  Jose <strong>Aguilera Merino </strong>
</h3>
<h5>
Full Stack Developer - MERN
</h5>
<h6>
<i className="fa text-danger fa-map-pin"></i> San Diego, CA
</h6>

<div>
 <a className="btn " href="https://github.com/Kuiil7" >
    <i className="fa fa-github fa-2x " aria-hidden="true"></i>
      </a>

      <a className="btn " href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/">
    <i className="fa fa-linkedin-square fa-2x " aria-hidden="true"></i>
     </a>

<a className="btn" href={JAM_resume} target="_blank" rel="noopener noreferrer" download>
<i className="fa fa-file fa-2x "  aria-hidden="true"></i>
</a>
  </div>
<div>
<p >
  E-mail:
  <a className="p-1" href="mailto:jgamerino@gmail.com"  >
   jgamerino@gmail.com
          </a>
          </p>
</div>




   <p>
  My career began at Telecommunications and Marketing with MCI WorldCom and more recently AT&T Relay Services in a national capacity. Coding was not only a necessity in these roles, it had been a lifelong untapped passion. To continue improving these skills I enrolled in the George Washington Coding Boot Camp and obtained my professional certification. This program provided me the foundation, skills and tools to create and build websites and applications from the ground up.
   </p>
   <p>
   My most recent work has been the creation of Single Page  Progressive Web Apps (PWAs) with offline capability, and working nonstructural databases (MongoDB Atlas).
   </p>
   <p>
   I bring: <strong> Full Stack Web Development, UX/UI design principles, technical expertise, and problem-solver among many not listed here. </strong>
   </p>


<Icons/>
</div>
</div>
  </div>


);
}

export default AboutMe;