import React from "react";
import {Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import water from "../videos/water.mov"

const Main = () => {
const mainContent =

<section className="hero is-fullheight is-info" style={{backgroundColor:"hsla(9, 100%, 64%, 0)"}}>
<ReactPlayer
    url={water}
    width="100vw"
    height="100vh"
    muted={true}
    playing={true}
    loop={true}
    className="react-player "
/>
<div className="hero-body ">
<div className="container  mt-6">

<Link className="link" to="/aboutme">
<p className="has-text-centered title is-size-1  has-text-white mt-6">JGAMWORKS</p>
    </Link>

<p className="has-text-centered subtitle is-size-8 is-italic has-text-white">
Full Stack Development (MERN) + ASL Linguistics = Inclusive Web Design. </p>

<div className="columns is-justify-content-center mt-4 is-mobile">
<div className="column is-2 ">
  <nav className="level ">
  <div className="level-item has-text-centered">
    <div>
    <Link className="navbar-item " to="api"><i className="fa-solid fa-arrow-right-arrow-left fa-2x"></i></Link>
      <p className="heading ">APIs</p>
    </div>
  </div>
</nav>
  </div>

  <div className="column is-2 ">
  <nav className="level ">
  <div className="level-item has-text-centered">
    <div>
    <Link className="link" to="/bootcamp">
    <i className="fa-solid fa-graduation-cap fa-2x"></i>
</Link>
      <p className="heading ">Bootcamp</p>
    </div>
  </div>
</nav>
  </div>

  <div className="column is-2 ">
  <nav className="level ">
  <div className="level-item has-text-centered">
    <div>
    <Link className="link" to="/asl">
    <i className="fa-solid fa-people-group fa-2x"></i></Link>
      <p className="heading ">Inclusive Web Design</p>
    </div>
  </div>
</nav>
  </div>


  <div className="column is-2">
  <nav className="level ">
<div className="level-item has-text-centered">
    <div>
    <Link className="link" to="/static">
    <i className="fa-solid fa-display fa-2x"></i>
</Link>
      <p className="heading " >Static Websites</p>
    </div>
  </div>
</nav>
  </div>



  <div className="column is-2 ">
  <nav className="level ">
  <div className="level-item has-text-centered">
    <div>
    <Link className="link" to="/games">
    <i className="fa-solid fa-gamepad fa-2x"></i>
    </Link>
      <p className="heading ">Games</p>
    </div>
  </div>
</nav>
  </div>




</div>




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
