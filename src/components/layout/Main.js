import React from "react";
import {Link } from "react-router-dom";
import water from "../videos/water.mov"
import inc2 from "../assets/images/gifs/inc2.gif"


const Main = () => {

const mainContent =

<section className="hero is-fullheight">
<video
autolay="autoplay"
muted
loop
className="video2"
>
<source
src={water} type="video/mp4"
/>
Your browser does not support the video tag.
</video>

  <div className="hero-body">
    <div className="container has-text-centered">
    <Link className="link" to="/aboutme"><h1 className="has-text-centered title is-size-1  has-text-white ">JGAMWORKS</h1>
    </Link>
<h2 className="has-text-centered subtitle is-size-6 is-italic has-text-white">
Full Stack Development (MERN) + ASL Linguistics = Inclusive Web Design. </h2>

<nav className="level is-mobile has-text-white ">
  <div className="level-item ">
    <div>
    <Link className="link has-text-white " to="/api">
    <i className="fa-solid fa-arrow-right-arrow-left fa-3x has-text-white"></i>
      <h3 className="heading ">API</h3>
      </Link>
    </div>
  </div>

  <div className="level-item ">
    <div>
    <Link className="link has-text-white " to="/bootcamp">
    <i className="fa-solid fa-graduation-cap fa-3x has-text-white"></i>
      <h3 className="heading ">Bootcamp</h3>
      </Link>
    </div>
  </div>

  <div className="level-item ">
    <div>
    <Link className="link has-text-white " to="/inclusion">
    <img src={inc2} alt="inclusion sign in ASL"  />

      <h3 className="heading ">Inclusion</h3>
      </Link>
    </div>
  </div>
  <div className="level-item ">
    <div>
   <Link className="link has-text-white" to="/static">
    <i className="fa-solid fa-display fa-3x has-text-white"></i>
      <h3 className="heading " >
        <span>Static</span>
        <br/>
        <span>Websites</span>
      </h3>
      </Link>
    </div>
  </div>
  <div className="level-item ">
    <div>
   <Link className="link has-text-white" to="/Designs">
   <i className="fa-solid fa-paintbrush has-text-white fa-3x"></i>
   <h3 className="heading " >
        <span>Graphic</span>
        <br/>
        <span>Design</span>
      </h3>
   </Link>
    </div>
  </div>
</nav>
    </div>
  </div>
</section>

return (
<>

<main aria-labelledby="landing page with hyperlink icons">
{mainContent}
</main>

</>
  );
}

export default Main;
