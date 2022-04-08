import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import {Link } from "react-router-dom";


const Header = () => {

  const [isActive, setisActive] = useState(false)

  return (
    <nav className="navbar " role="navigation" aria-label="main navigation"  >
    <div className="navbar-brand " >
    <NavLink className="navbar-item " to="/"> JGAMWORKS</NavLink>
    <div
           onClick={() => {setisActive(!isActive)}}
            role="button"
            className={`navbar-burger burger  ${isActive ? "is-active" :""} ` }
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
    <div className={`navbar-menu  ${isActive ? "is-active" : ""} `}  >
     <div className="navbar-end" >
        <div className="navbar-item " >
   <div className="navbar-item has-dropdown is-hoverable">
   <NavLink className="navbar-item " to="/portfolio">Portfolio</NavLink>
    <div className="navbar-dropdown">
    <Link className="navbar-item is-active" to="/api">APIs</Link>
    <Link className="navbar-item" to="/bootcamp"> Bootcamp</Link>
    <Link className="navbar-item" to="/asl"> Inclusive Web Design (ASL)</Link>
    <Link className="navbar-item" to="/static"> Static Websites</Link>
    <Link className="navbar-item" to="/games"> Games</Link>

        </div>
      </div>
      <NavLink className="navbar-item " to="/aboutme">About Me</NavLink>
            </div>
          </div>
        </div>
  </nav>
  );
}
export default Header;