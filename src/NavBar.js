


import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const [isActive, setisActive] = useState(false)

  return (
    < >
<header className="navbar">
<div className="container">
<div className="navbar-brand"
        >

<NavLink
className=" navbar-item is-active  has-background-white"
to="/">
JGAMWORKS
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
<div className="navbar-end">


<NavLink
className=" navbar-item "
to="/">
<p className="heading">Home</p>
</NavLink>

<NavLink
className=" navbar-item "
to="/aboutme">
<p className="heading">About Me</p>
</NavLink>

<NavLink
className=" navbar-item "
to="/portfolio">
<p className="heading">Portfolio</p>

</NavLink>
    </div>
      </div>

      </div>
    </header>

    </>
  );
};
export default NavBar;


















