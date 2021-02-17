import Icons from "./Icons";
import JAM_resume from "../docs/JAM_resume.docx"


function AboutMe() {
    return (
<div className=" bg-white p-4 ">
  <div className="row ">

    <div className="col">


<span >

<img  src="https://i.imgrz.com/vb6h.jpg" className="rounded-circle img-thumbnail img-fluid  m-2" align="left" alt="self-portrait" />
</span>

<h3>
  Jose <strong>Aguilera Merino </strong>
</h3>
<h5>
Full Stack Developer - MERN
</h5>

<h6>
<i className="fa text-danger fa-map-pin"></i> San Diego, CA
</h6>


<div>
 <a className="btn p-0 " href="https://github.com/Kuiil7" >
    <i className="fa fa-github fa-2x " aria-hidden="true"></i>
      </a>




    <a className="btn    " href="https://www.linkedin.com/in/joey-aguilera-merino-8298b6193/">
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

<div className="p-3 container">
<p >
Endless pursuit of perfection – that is my motivation. I am always looking for ways to move an organization to the next level and have done that throughout my career.
</p>
   <p>
  My career began at Telecommunications and Marketing with MCI WorldCom and more recently AT&T Relay Services in a national capacity. Coding was not only a necessity in these roles, it has been my lifelong passion. To continue improving these skills I enrolled in the George Washington Coding Boot Camp and obtained my professional certification. This program provided me the foundation, skills and tools to create and build websites and applications from the ground up.
   </p>
   <p>
   My most recent work has been the creation of Progressive Web Apps (PWAs) with offline capability, and working nonstructural databases (MongoDB Atlas).
   </p>
   <p>
   I bring: <strong> Full Stack Web Development, UX/UI Design Principles, Technical Expertise, and problem-solver among many not listed here. </strong>
   </p>


</div>
<Icons/>

</div>




</div>

  </div>


);
}

export default AboutMe;