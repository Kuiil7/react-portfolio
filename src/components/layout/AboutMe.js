import React from "react";
import Portrait_5 from "../assets/images/portrait/portrait_5.jpg";
import Icons from "../icons/Icons"
import ReactPlayer from 'react-player'

const AboutMe = () => {


  <Icons />

  const mainContent = <section className="hero is-info">
  <div className="container">
  <div className="hero-body">
  <div className="columns">
  <div className="column ">
 <img src={Portrait_5} alt="self-portrait"  className="box p-1"  />

  </div>
  <div className="column is-8">
  <p className="subtitle is-6 mt-6 "><span className="title is-size-4 has-text-weight-bold fade-in-3 ">    Jose Aguilera Merino</span>
<br />
<span className="fade-in-3">Full Stack Developer (MERN) </span>
  <br />
 <br />
  <span className="fade-in-2"> M. A. - ASL Linguistics</span>
  <br/>
  <span className="fade-in-1"> Languages: Spanish, English, and American Sign Language</span>
 <br />
 <br />
  <span> Contact:</span>
<a className="is-size-6 ml-1" href="mailto:jgamerino@gmail.com"><i className="fa-solid fa-envelope fa-1x mr-1"></i></a>
<a  href="https://github.com/kuiil7"><i className="fab fa-github fa-1x "></i> </a>
  <a href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/"><i className="fab fa-linkedin fa-1x "></i> </a>
  </p>
  </div>
</div>
  </div>
</div>


<div className="container">
<div className="columns px-4">
<div className="column">
<p><span className="title mt-4 is-size-4 fade-in-2 mb-1">Accessibility. </span>
<br/>
<span className="fade-in-3">
As a native of the Dominican Republic, I lost my hearing at a young age before emigrating to the United States.  Language and communication is something I intentionally focus on every day given this background as a trilingual individual.  In my professional career I have confronted the challenge of how to leverage English, Spanish, and American Sign Language to disseminate information in in the areas of Sales and Marketing. These challenges could not have been overcome without self-taught skills that I have acquired over time such as Information Technology, Web Design and Development, Graphic Design, and Video Production skills to name a few.
</span>
</p>
</div>

<div className="column is-4">
<ReactPlayer url='https://youtu.be/-AFKr0027R0' controls muted width='100%' height='102%'/>
</div>
</div>


<div className="columns px-4">
<div className="column">
<p><span className="title mt-4 is-size-4 fade-in-2 mb-1">Inclusion. </span>
<br/>
<span className="fade-in-3">
I have had the privilege of working for two Fortune 500 companies (MCI WorldCom and AT&T) and as an independent contractor and linguistics graduate student at Gallaudet University. My time at Gallaudet as a student, I created, migrated, and designed 8 different campus unit's CMS sites including third-party 5 ePublication newsletter editions that foregrounded the need to use video given that ASL is a visual language that, unlike a written text, requires motion to be transmitted.  In both sectors, combining the utilization of restrictive Content Management Systems and red-flag atmosphere was a dead end for the innovation of a visual language.
</span>
</p>
</div>
<div className="column px-4 is-4">
<ReactPlayer url='https://youtu.be/NMk8dpbSN6w' controls muted width='100%' height='100%'/>
</div>
</div>

<div className="columns px-4">
<div className="column">
<p><span className="title mt-4 is-size-4 fade-in-2 mb-1">Flexibility. </span><br/>
<span className="fade-in-3">
To find a solution to the challenges listed above, I attended The George Washington University’s Bootcamp program to gain a solid foundation in programming and made the transition to Web Development to better implement the use of ASL videos in code. Today, I am a Full Stack Developer specializing in MongoDB, Express, React, and Node. I have gained a deep understanding of HTML and CSS as well as an introduction into JavaScript. Utilizing React, using reusable components, and managing their own state has made creating innovative interactive UIs a huge hurdle to overcome.
</span>
</p>
</div>
<div className="column is-4">
<ReactPlayer url='https://youtu.be/HyCeErhF0oI' controls muted width='100%' height='102%'/>
</div>
</div>
<Icons />
</div>
</section>

  return (
    <>
{mainContent}
    </>
  );
}

export default AboutMe;
