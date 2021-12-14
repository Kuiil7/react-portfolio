import React from "react";
import {Link } from "react-router-dom";
import portrait_5 from "./images/portrait_5.jpg"
function Main() {

  const projectTitle =
  <nav className="level ">

 <p className="level-item  title is-size-5">
  <Link className="link is-info" to="/apiprojects"><i class="fas fa-exchange-alt"> APIs</i></Link> </p>

  <p className="level-item  title is-size-5">
  <Link className="link is-info" to="/bootcamp"> <i class="fas fa-user-graduate"> Bootcamp</i></Link>
  </p>
  
  <p className="level-item  title is-size-5">
  <Link className="link is-info" to="/database"> <i class="fas fa-database"> Database</i></Link>
  </p>
  <p className="level-item  title is-size-5">
  <Link className="link is-info" to="/asl"> <i class="fas fa-pencil-ruler"> Inclusive Design</i></Link>
  </p>
  <p className="level-item  title is-size-5 mb-4">
  <Link className="link is-info" to="/games"> <i class="fas fa-gamepad"> Games</i></Link>
  </p>
</nav>


  return (
<>
<section className="hero is-info is-fullheight">
<div className="hero-body">
 <div className="container has-text-centered">
<div className="columns">
  <div className="column  ">
    <Link className="link is-info" to="/aboutme">
    <img className="is-rounded avatar  " src={portrait_5} alt="self portrait" />
</Link>
    </div>
  </div>


  <p className="level-item has-text-centered title is-size-1">
<Link className="link is-info" to="/aboutme">JGAMWORKS</Link> </p>
<p className="level-item has-text-centered subtitle is-size-6 is-italic">
<Link className="link is-info" to="/aboutme">Full Stack Developer (MERN) + ASL Linguistics = Inclusive Web Design.</Link> </p>

<div className="columns is-mobile">
<div className="column ">

{projectTitle}


<div className="columns is-mobile">
<div className="column  ">
<a className="link is-info is-pulled-right " href="https://github.com/kuiil7"><i className="fab fa-github fa-4x p-3"></i> </a>

</div>
<div className="column">

<a className="link is-info is-pulled-left" href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/"><i className="fab fa-linkedin fa-4x p-3"></i> </a>
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
