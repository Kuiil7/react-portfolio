import React from "react";
import Portrait_4 from "../components/images/portrait_4.jpg";

function AboutMe() {
  return (
    <section className="hero is-info is-fullheight" id="AboutMeSection">
    <div className="hero-body">
      <div className="container">
      <p className="title " > About Me </p>
        <img src={Portrait_4} alt="self-portrait" width="200"  className="is-pulled-left pr-3 box" />

        <p className="subtitle">
My career began with Sales and Marketing in the Telecommunications sector for Fortune 500 companies, such as MCI WorldCom and AT&T. Coding has not only been a necessity in every role in my previous roles that I have filled in every position but also has been a lifelong untapped passion of mine. Not only has coding been integral in every previous position I have had, coding has been a lifelong untapped passion of mine. When I was enrolled in my Master of Arts program at Gallaudet University to study Linguistics, I took campus job that led to a full time job in Web Development. For that reason, it was clear that coding was my calling.
</p>

<p className="subtitle">
Last year, I enrolled at  <strong>The George Washington University's Coding Boot Camp </strong> to obtain my professional certification. The coding program provided me the foundation, skills and tools to create and build websites and applications from the ground up.
</p>

<p className="subtitle">
My most recent work has been the creation of Single Page Apps (SPA) and Progressive Web Apps (PWA) offline capability, as well as working nonstructural databases (MongoDB Atlas).
</p>

<p className="subtitle">
I bring: <strong> full stack web development, UX/UI design principles, technical expertise, and troubleshooting skills. </strong>
   </p>
 
      </div>
    </div>
  </section>

  );
}

export default AboutMe;
