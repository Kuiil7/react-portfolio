import React from "react";
import {Link } from "react-router-dom";
import water from "../videos/water.mov"
import inc2 from "../assets/images/gifs/inc2.gif"


const Main = () => {

const mainContent =

<section className="hero is-fullheight">
<video
autoPlay="autoplay"
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
    <Link className="link" to="/aboutme"><p className="has-text-centered title is-size-1  has-text-white ">JGAMWORKS</p>
    </Link>
<p className="has-text-centered subtitle is-size-6 is-italic has-text-white">
Full Stack Development (MERN) + ASL Linguistics = Inclusive Web Design. </p>

<nav className="level is-mobile has-text-white ">
  <div className="level-item ">
    <div>
    <Link className="link has-text-white " to="/api">
    <i className="fa-solid fa-arrow-right-arrow-left fa-3x has-text-white"></i>
      <p className="heading ">API</p>
      </Link>
    </div>
  </div>

  <div className="level-item ">
    <div>
    <Link className="link has-text-white " to="/bootcamp">
    <i className="fa-solid fa-graduation-cap fa-3x has-text-white"></i>
      <p className="heading ">Bootcamp</p>
      </Link>
    </div>
  </div>

  <div className="level-item ">
    <div>
    <Link className="link has-text-white " to="/inclusion">
    <img src={inc2} alt="inclusion sign in ASL"  />

      <p className="heading ">Inclusion</p>
      </Link>
    </div>
  </div>
  <div className="level-item ">
    <div>
   <Link className="link has-text-white" to="/static">
    <i className="fa-solid fa-display fa-3x has-text-white"></i>
      <p className="heading " >
        <span>Static</span>
        <br/>
        <span>Websites</span>
      </p>
      </Link>
    </div>
  </div>
  <div className="level-item ">
    <div>
   <Link className="link has-text-white" to="/Designs">
   <i className="fa-solid fa-paintbrush has-text-white fa-3x"></i>
   <p className="heading " >
        <span>Graphic</span>
        <br/>
        <span>Design</span>
      </p>
   </Link>
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
