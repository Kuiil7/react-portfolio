import React from "react";
import {Link } from "react-router-dom";


function ProjectHeader() {


  return (
    <div className="container">


<div className="columns">
    <div className="column ">
    <div className="tabs is-centered">
  <ul>
    <li >  <Link className="navbar-item" to="/apiprojects"> APIs</Link>
</li>
    <li><Link className="navbar-item" to="/bootcamp"> Bootcamp</Link></li>
    
<li><Link className="navbar-item" to="/database"> Database</Link></li>
<li><Link className="navbar-item" to="/games"> Games</Link></li>
<li><Link className="navbar-item" to="/asl"> Inclusie Design (ASL)</Link></li>

  </ul>
</div>
    </div>
</div>
    </div>
  );
}
export default ProjectHeader;