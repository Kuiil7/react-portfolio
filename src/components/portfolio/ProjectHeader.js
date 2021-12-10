import React from "react";
import {Link } from "react-router-dom";


function ProjectHeader() {

const Tabs = <ul>
<li><Link className="navbar-item" to="/apiprojects"> APIs</Link></li>
<li><Link className="navbar-item" to="/bootcamp"> Bootcamp</Link></li>
<li><Link className="navbar-item" to="/database"> Databases</Link></li>
<li><Link className="navbar-item" to="/games"> Games</Link></li>
<li><Link className="navbar-item" to="/asl"> Inclusive Design (American Sign Language)</Link></li>
</ul>

const mainContent = <div className="container px-5">
<div className="columns">
<div className="column ">
<div className="tabs is-centered">
{Tabs}
</div>
</div>
</div>
</div>

return (
<>
{mainContent}
</>
  );
}
export default ProjectHeader;