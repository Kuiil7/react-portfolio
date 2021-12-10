import React from "react";
import { Routes, Route} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Main from "./components/Main";
//import Header from "./Header";
import APIProjects from "./components/portfolio/APIProjects";
import Bootcamp from "./components/portfolio/Bootcamp";
import Database from "./components/portfolio/Database";
import Games from "./components/portfolio/Games";
import ASL from "./components/portfolio/ASL";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="apiprojects" element={<APIProjects/>} />
        <Route path="bootcamp" element={<Bootcamp/>} />
        <Route path="database" element={<Database/>} />
        <Route path="games" element={<Games/>} />
        <Route path="asl" element={<ASL/>} />


      </Routes>
    </div>
  );
}
export default App;