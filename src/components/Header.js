import React, {useState} from "react";
import {NavLink } from "react-router-dom";


function Header() {

  const [isActive, setisActive] = useState(false)

  return (
    <div className="container">
    <div className="Header">
   <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">

  <NavLink className="navbar-item" to="/"> JGAMWORKS</NavLink>
    <div
         onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
        >
    <button  className="navbar-burger button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
    </div>
  </div>

  <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
   <div className='navbar-end'>
      <div className='navbar-item '>
 <NavLink className="navbar-item" to="/portfolio">Portfolio</NavLink>
 <NavLink className="navbar-item" to="/aboutme">About Me</NavLink>
          </div>
        </div>
      </div>
</nav>
</div>
    </div>
  );
}
export default Header;