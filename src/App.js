import React from "react";
import { Routes, Route} from "react-router-dom";
import AboutMe from "./components/layout/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Main from "./components/layout/Main";
import APIProjects from "./components/portfolio/APIProjects";
import Bootcamp from "./components/portfolio/Bootcamp";
import Games from "./components/portfolio/Games";
import ASL from "./components/portfolio/ASL";
import Misc from "./components/portfolio/Misc";

function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="apiprojects" element={<APIProjects/>} />
        <Route path="bootcamp" element={<Bootcamp/>} />
        <Route path="games" element={<Games/>} />
        <Route path="asl" element={<ASL/>} />
        <Route path="misc" element={<Misc/>} />
      </Routes>
    </>
  );
}
export default App;