import React from "react";
import Portrait_4 from "../images/portrait_4.jpg";
import Icons from "../icons/Icons"

const AboutMe = () => {

  const selfPortrait = <img src={Portrait_4} alt="self-portrait" width="380"  className="is-pulled-left px-5 py-2 pt-5 "  />

  const Bio =   <div className="has-background-white p-5 box"  >
<p className="title is-4  ">
<span>Jose Aguilera Merino</span>
<br/>
</p>
<p className="subtitle is-6  ">
  <span>Full Stack Developer (MERN) </span>
  <br/>
  <span> M. A. - ASL Linguistics</span>
  <br/>
  <span> Spanish, English, and American Sign Language</span>
  <br/>
   <br/>
  <span>Contact: <a className="is-size-6 " href="mailto:jgamerino@gmail.com">jgamerino@gmail.com</a>
</span>
  </p>


<div >
<a  href="https://github.com/kuiil7"><i className="fab fa-github fa-2x "></i> </a>
  <a href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/"><i className="fab fa-linkedin fa-2x "></i> </a>

</div>
<p className="title is-size-4 fade-in-3 mb-1 mt-5">Accessibility.</p>
<p>
As a native of the Dominican Republic, I lost my hearing at a young age before emigrating to the United States.  Language and communication is something I intentionally focus on every day given this background as a trilingual individual.  In my professional career I have confronted the challenge of how to leverage English, Spanish, and American Sign Language to disseminate information in in the areas of Sales and Marketing. These challenges could not have been overcome without self-taught skills that I have acquired over time such as Information Technology, Web Design and Development, Graphic Design, and Video Production skills to name a few.
</p>

<p className="title mt-4 is-size-4 fade-in-2 mb-1">Inclusion.</p>

<p>
I have had the privilege of working for two Fortune 500 companies (MCI WorldCom and AT&T) and as an independent contractor and linguistics graduate student at Gallaudet University. My time at Gallaudet as a student, I created, migrated, and designed 8 different campus unit's CMS sites including third-party 5 ePublication newsletter editions that foregrounded the need to use video given that ASL is a visual language that, unlike a written text, requires motion to be transmitted.  In both sectors, combining the utilization of restrictive Content Management Systems and red-flag atmosphere was a dead end for the innovation of a visual language.
</p>

<p className="title mt-4 is-size-4 fade-in-1 mb-1">Flexibility.</p>

<p>
To find a solution to the challenges listed above, I attended The George Washington University’s Bootcamp program to gain a solid foundation in programming and made the transition to Web Development to better implement the use of ASL videos in code. Today, I am a Full Stack Developer specializing in MongoDB, Express, React, and Node. I have gained a deep understanding of HTML and CSS as well as an introduction into JavaScript. Utilizing React, using reusable components, and managing their own state has made creating innovative interactive UIs a huge hurdle to overcome.  When combining Bulma CSS for styling, coding has never become so lightweight and easy to manage. MongoDB has permitted me to use a highly scalable environment utilizing AWS, Google Cloud, and Azure in over 80 locations to deploy multiple cloud-based storage with Atlas and create schemas on the fly! When the front-end is connected with the back-end utilizing Node and Express the possibilities are endless.
</p>
<br />
<p>
It is in fusing my linguistic and technical background that I create and innovate with the goal to make the world more accessible and inclusive place for all.
</p>
<hr style={{border:'1px solid'}}/>
  <Icons />
  </div>




const mainContainer =   <section className="hero  is-fullheight has-background-light" id="AboutMeSection">
<div className="hero-body">
<div className="container">
{selfPortrait}
{Bio}
</div>
</div>
</section>

  return (
    <>
{mainContainer}
    </>
  );
}

export default AboutMe;
