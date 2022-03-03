import React, {useState} from "react";
import {NavLink } from "react-router-dom";


const Header = () => {

  const [isActive, setisActive] = useState(false)

  let bgColors = {
  "default": "hsl(215,100%,20%)",
  "frontPage": "hsl(215,100%,20%, .1)",
};

  return (
   <nav className="navbar " role="navigation" aria-label="main navigation" style={{backgroundColor: bgColors.frontPage}} >
  <div className="navbar-brand " >
  <NavLink className="navbar-item has-text-white" to="/"> JGAMWORKS</NavLink><div
         onClick={() => {setisActive(!isActive)}}
          role="button"
          className={`navbar-burger burger  ${isActive ? "is-active" :""}`}
          aria-label="menu"
          aria-expanded="false"
        >
    <button  className="navbar-burger  " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
    </div>
  </div>
  <div className={`navbar-menu ${isActive ? "is-active" : ""}`} style={{backgroundColor: bgColors.frontPage}}>
   <div className="navbar-end" >
      <div className="navbar-item " >
 <NavLink className="navbar-item has-text-white" to="/portfolio">Portfolio</NavLink>
 <NavLink className="navbar-item has-text-white" to="/aboutme">About Me</NavLink>
          </div>
        </div>
      </div>
</nav>
  );
}
export default Header;