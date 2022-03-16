import React from "react";
import {Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import water from "../videos/water.mov"

const Main = () => {

const mainContent = <section className="hero is-fullheight is-info" style={{backgroundColor:"hsl(215,100%,20%, .1)"}}>
<ReactPlayer
    url={water}
    width="100vw"
    height="100vh"
    muted={true}
    playing={true}
    loop={true}
    className="react-player "
/>
<div className="hero-body mt-6">
<div className="container has-text-centered mt-6">

<p className="has-text-centered title is-size-1  has-text-white mt-6">JGAMWORKS</p>
<p className="has-text-centered subtitle is-size-6 is-italic has-text-white">
Full Stack Developer (MERN) + ASL Linguistics = Inclusive Web Design. </p>
<div className="columns is-justify-content-center mt-4">
  <div className="column is-2">
  <nav className="level is-mobile">
<div className="level-item has-text-centered">
    <div>
    <Link className="link" to="/portfolio">
    <i className="fa-solid fa-briefcase fa-4x "></i>
</Link>
      <p className="heading " >Portfolio</p>
    </div>
  </div>
</nav>
  </div>
  <div className="column is-2 ">
  <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
    <Link className="link" to="/aboutme">
    <i className="fa-solid fa-address-card fa-4x "></i>
</Link>
      <p className="heading ">About Me</p>
    </div>
  </div>
</nav>
  </div>
</div>
</div>
</div>

<div className="columns is-mobile">
  <div className="column is-half
is-offset-one-quarter">
  <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
    <a className="link is-info has-text-white " href="https://github.com/kuiil7"><i className="fab fa-github fa-2x p-3"></i> </a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
    <a className="link is-info has-text-white" href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/"><i className="fab fa-linkedin fa-2x p-3"></i> </a>
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

export default Main;
