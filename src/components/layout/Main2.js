import React from "react";
import {Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import water from "../videos/water.mov"

const Main2 = () => {
const mainContent =

<section className="hero is-fullheight">

<ReactPlayer
    url={water}
    width="100vw"
    height="100vh"
    muted={true}
    playing={true}
    loop={true}
    className="react-player "
/>

  <div className="hero-body">
    <div className="container has-text-centered">
    <Link className="link" to="/aboutme">
<p className="has-text-centered title is-size-1  has-text-white ">JGAMWORKS</p>
    </Link>
<p className="has-text-centered subtitle is-size-6 is-italic has-text-white">
Full Stack Development (MERN) + ASL Linguistics = Inclusive Web Design. </p>

<nav className="level is-mobile has-text-white ">

  <div className="level-item ">
    <div>
    <Link className="link" to="/api">
    <i className="fa-solid fa-arrow-right-arrow-left fa-2x has-text-white"></i>
</Link>
      <p className="heading ">API</p>
    </div>


  </div>

  <div className="level-item ">
    <div>
    <Link className="link" to="/bootcamp">
    <i className="fa-solid fa-graduation-cap fa-2x has-text-white"></i>
</Link>
      <p className="heading ">Bootcamp</p>
    </div>
  </div>


  <div className="level-item ">
    <div>
    <Link className="link" to="/inclusion">
    <i className="fa-solid fa-people-group fa-2x has-text-white"></i></Link>
      <p className="heading ">Inclusion</p>
    </div>
  </div>
  <div className="level-item ">
    <div>
   <Link className="link" to="/static">
    <i className="fa-solid fa-display fa-2x has-text-white"></i>
</Link>
      <p className="heading " >Static </p>
    </div>
  </div>
  <div className="level-item ">
    <div>
   <Link className="link" to="/Designs">
   <i className="fa-solid fa-paintbrush has-text-white fa-2x"></i></Link>
      <p className="heading " >Designs </p>
    </div>
  </div>
</nav>

    </div>
  </div>


</section>

return (
<>
{mainContent}
</>
  );
}

export default Main2;
