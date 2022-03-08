import React from "react";
import {Link } from "react-router-dom";
import portrait_5 from "../images/portrait_5.jpg"
import ReactPlayer from 'react-player'
import water from "../videos/water.mov"

const Main = () => {
return (
<>
<section className="hero is-fullheight is-info" style={{backgroundColor:"hsl(215,100%,20%, .1)"}}>
<ReactPlayer
    url={water}
    width='100vw'
    height='100vh'
    muted={true}
    playing={true}
    loop={true}
    className='react-player '
/>
<div className="hero-body">
<div className="container has-text-centered">
<Link className="link" to="/aboutme">
<img className="is-rounded avatar" src={portrait_5} alt="self portrait"/>
</Link>
<p className="has-text-centered title is-size-1  has-text-white ">JGAMWORKS</p>
<p className="has-text-centered subtitle is-size-6 is-italic has-text-white">
Full Stack Developer (MERN) + ASL Linguistics = Inclusive Web Design. </p>
<div class="columns is-justify-content-center mt-4">
  <div class="column is-2">
  <nav class="level is-mobile">
<div class="level-item has-text-centered">
    <div>
    <Link className="link" to="/portfolio">
    <i class="fa-solid fa-briefcase fa-4x "></i>
</Link>
      <p class="heading " >Portfolio</p>
    </div>
  </div>
</nav>
  </div>
  <div class="column is-2 ">
  <nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
    <Link className="link" to="/aboutme">
    <i class="fa-solid fa-address-card fa-4x "></i>
</Link>
      <p class="heading ">About Me</p>
    </div>
  </div>
</nav>
  </div>
</div>
</div>
</div>


<div class="columns is-mobile">
  <div class="column is-half
is-offset-one-quarter">
  <nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
    <a className="link is-info has-text-white " href="https://github.com/kuiil7"><i className="fab fa-github fa-2x p-3"></i> </a>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <a className="link is-info has-text-white" href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/"><i className="fab fa-linkedin fa-2x p-3"></i> </a>
    </div>
  </div>
</nav>
  </div>
</div>
</section>
</>
  );
}

export default Main;
