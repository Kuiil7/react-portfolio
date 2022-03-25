import React from "react";
import {Link } from "react-router-dom";


const ProjectsHeader = () => {

const Tabs = <ul>
<li><Link className="navbar-item is-active" to="/apiprojects">APIs</Link></li>
<li><Link className="navbar-item" to="/bootcamp"> Bootcamp</Link></li>
<li><Link className="navbar-item" to="/asl"> Inclusive Web Design (ASL)</Link></li>
<li><Link className="navbar-item" to="/static"> Static Websites</Link></li>
<li><Link className="navbar-item" to="/games"> Games</Link></li>
</ul>

const mainContent = <div className="container px-5">
<div className="columns">
<div className="column">
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
export default ProjectsHeader;