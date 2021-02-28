import React from "react";

import {Route,NavLink,HashRouter} from "react-router-dom";

import Main from "./Main";
import Portfolio from "./Portfolio";
import Aboutme from "./Aboutme";

function NavBar () {
  const [isActive, setisActive] = React.useState(false)

return (
  <HashRouter basename={process.env.PUBLIC_URL}>

  <nav className="navbar is-fixed-top  " role="navigation" aria-label="main navigation">

  <div className="navbar-brand ">
  <NavLink className="navbar-item "
to="/"><strong> JGAM</strong>
</NavLink>

<div
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
  </div>

  <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
   <div className='navbar-end'>
      <div className='navbar-item '>

 <NavLink className="navbar-item"
to="/portfolio">Portfolio</NavLink>
 <NavLink className="navbar-item"
to="/aboutme">About Me</NavLink>

          </div>
        </div>
      </div>
</nav>
<div >
  <Route exact path="/" component={Main}/>
  <Route path="/portfolio" component={Portfolio}/>
  <Route path="/aboutme" component={Aboutme}/>
</div> 
</HashRouter>
  );
}

export default NavBar;