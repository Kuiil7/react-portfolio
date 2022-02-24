import React from "react";
import {Link } from "react-router-dom";
import portrait_5 from "../images/portrait_5.jpg"
import Header from "./Header"

const Main = () => {

  const projectTitles =
  <nav className="level">
 <p className="level-item  title is-size-5">
  <Link className="link has-text-white" to="/apiprojects"><i className="fas fa-exchange-alt"> APIs</i></Link> </p>
  <p className="level-item  title is-size-5">
  <Link className="link has-text-white" to="/bootcamp"> <i className="fas fa-user-graduate"> Bootcamp</i></Link>
  </p>
  <p className="level-item  title is-size-5">
  <Link className="link has-text-white" to="/database"> <i className="fas fa-database"> Database</i></Link>
  </p>
  <p className="level-item  title is-size-5">
  <Link className="link has-text-white" to="/asl"> <i className="fas fa-pencil-ruler"> Inclusive Web Design</i></Link>
  </p>
  <p className="level-item  title is-size-5 mb-4">
  <Link className="link has-text-white" to="/games"> <i className="fas fa-gamepad"> Games</i></Link>
  </p>
</nav>

return (
<>
<Header />
<section className="hero is-fullheight is-info" style={{backgroundColor:"hsl(215,100%,20%, .8)"}}>
<div className="hero-body">
<div className="container has-text-centered">
<div className="columns">
<div className="column">
<Link className="link" to="/aboutme">
<img className="is-rounded avatar  " src={portrait_5} alt="self portrait"/>
</Link>
</div>
</div>
<p className="level-item has-text-centered title is-size-1  has-text-white ">JGAMWORKS</p>
<p className="level-item has-text-centered subtitle is-size-6 is-italic has-text-white">
Full Stack Developer (MERN) + ASL Linguistics = Inclusive Web Design. </p>
<div className="columns is-mobile">
<div className="column">
{projectTitles}
<div className="columns is-mobile">
<div className="column">
<a className="link is-info is-pulled-right has-text-white " href="https://github.com/kuiil7"><i className="fab fa-github fa-4x p-3"></i> </a>
</div>
<div className="column">
<a className="link is-info is-pulled-left has-text-white" href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/"><i className="fab fa-linkedin fa-4x p-3"></i> </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</>
  );
}

export default Main;
