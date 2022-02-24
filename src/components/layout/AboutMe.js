import React from "react";
import Portrait_4 from "../images/portrait_4.jpg";
import Header from "./Header"
import Icons from "../images/icons/Icons"

const AboutMe = () => {

  const selfPortrait = <img src={Portrait_4} alt="self-portrait" width="380"  className="is-pulled-left px-5 py-2 pt-5" />
  const Bio =   <div className="has-text-justified" >
  <p className="subtitle" >
  My career began with Sales and Marketing in the Telecommunications sector for Fortune 500 companies, such as MCI WorldCom and AT&T. Coding has not only been a necessity in every role in my previous roles that I have filled in every position but also has been a lifelong untapped passion of mine. Not only has coding been integral in every previous position I have had, coding has been a lifelong untapped passion of mine. When I was enrolled in my Master of Arts program at Gallaudet University to study Linguistics, I took campus job that led to a full time job in Web Development. For that reason, it was clear that coding was my calling.
  </p>
  <p className="subtitle">
  Last year, I enrolled at The George Washington University's Coding Boot Camp to obtain my professional certification. The coding program provided me the foundation, skills and tools to create and build websites and applications from the ground up.
  </p>
  <p className="subtitle">
  My most recent work has been the creation of Single Page Apps (SPA) and Progressive Web Apps (PWA) offline capability, as well as working nonstructural databases (MongoDB Atlas).
  </p>
  <p className="subtitle" >
  I bring: full stack web development, UX/UI design principles, technical expertise, and troubleshooting skills.
  </p>
  <Icons />
  </div>
const mainContainer =   <section className="hero is-light is-fullheight" id="AboutMeSection">
<div className="hero-body">
<div className="container">
{selfPortrait}
{Bio}
</div>
</div>
</section>

  return (
    <>
    <Header />
{mainContainer}
    </>
  );
}

export default AboutMe;
