import React from "react";
import {Link } from "react-router-dom";


const ASLHeader = () => {


const mainContent = <div className="container px-5">
<div className="columns">
<div className="column">
<div className="tabs is-centered">
<ul>
<li><Link className="navbar-item " to="/portrait"> Portrait</Link></li>
<li><Link className="navbar-item" to="/landscape"> Landscape</Link></li>
</ul>
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
export default ASLHeader;