import React from "react";


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Main from "./Main";
import Portfolio from "./Portfolio";
import Aboutme from "./Aboutme";


function NavBar () {
return (

  <div  >


  <HashRouter basename={process.env.PUBLIC_URL}>
<nav className="navbar  navbar-expand-sm navbar-dark " >
<div class="container-fluid">
  <a className="navbar-brand "  href="/"><NavLink style={{color: 'white'}}
  to="/">JGAM</NavLink></a>
  <button className="navbar-toggler btn-outline-0"
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
        <NavLink   style={{color: 'white'}}
  to="/portfolio">Portfolio</NavLink>
        </span>
      </li>
      <li className="nav-item">
        <span className="p-2">
       <NavLink style={{color: 'white'}}
  to="/aboutme">About Me</NavLink>
         </span>

        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

        </div>
      </li>

    </ul>
    </div>
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