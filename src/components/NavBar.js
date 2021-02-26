import React from "react";

import {Route,NavLink,HashRouter} from "react-router-dom";

import Main from "./Main";
import Portfolio from "./Portfolio";
import Aboutme from "./Aboutme";

function NavBar () {
return (

  <div  >
  <HashRouter basename={process.env.PUBLIC_URL}>
<nav className="navbar container navbar-expand-sm navbar-light " >

  <a className="navbar-brand "  href="/">JGAM</a>
  <button className="navbar-toggler "
  style={{
    border: '0',
    outline: 'none'

  }}
  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>
  <div className="collapse navbar-collapse "  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto " >

      <li className="nav-item  ">
         <span className="p-2">
        <NavLink className="text-dark"
  to="/portfolio">Portfolio</NavLink>
        </span>
      </li>
      <li className="nav-item">
        <span className="p-2">
       <NavLink className="text-dark"
  to="/aboutme">About Me</NavLink>
         </span>
      </li>
    </ul>
    </div>
</nav>
<div >
  <Route exact path="/" component={Main}/>
  <Route path="/portfolio" component={Portfolio}/>
  <Route path="/aboutme" component={Aboutme}/>
</div> 
</HashRouter>
</div>
  );
}

export default NavBar;