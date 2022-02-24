import React, {useState} from "react";
import {NavLink } from "react-router-dom";


const Header2 = () => {
  const [isActive, setisActive] = useState(false)
  return (

   <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor:"hsl(215,100%,20%)"}}>
  <div className="navbar-brand " >
  <NavLink className="navbar-item has-text-white" to="/"> JGAMWORKS</NavLink><div
         onClick={() => {setisActive(!isActive)}}
          role="button"
          className={`navbar-burger burger  ${isActive ? "is-active" :""}`}
          aria-label="menu"
          aria-expanded="false"
        >
    <button  className="navbar-burger has-text-white" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
    </div>
  </div>
  <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
   <div className="navbar-end">
      <div className="navbar-item " >
 <NavLink className="navbar-item has-text-white" to="/portfolio">Portfolio</NavLink>
 <NavLink className="navbar-item has-text-white" to="/aboutme">About Me</NavLink>
          </div>
        </div>
      </div>
</nav>


  );
}
export default Header2;