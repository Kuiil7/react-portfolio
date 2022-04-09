import React from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import AboutMe from "./components/layout/AboutMe";
import Portfolio from "./components/layout/Portfolio";
import Main from "./components/layout/Main";
import API from "./components/portfolio/API";
import Bootcamp from "./components/portfolio/Bootcamp";
import Games from "./components/portfolio/Games";
import ASL from "./components/portfolio/ASL";
import Static from "./components/portfolio/Static";
import Header from "./components/layout/Header"
import Designs from "./components/portfolio/Designs"

const App = () =>{
  const location = useLocation();

  return (
    < >
    {location.pathname !== '/' && <Header/>}

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="api" element={<API/>} />
        <Route path="bootcamp" element={<Bootcamp/>} />
        <Route path="games" element={<Games/>} />
        <Route path="asl" element={<ASL/>} />
        <Route path="static" element={<Static/>} />
        <Route path="designs" element={<Designs/>} />

      </Routes>
    </>
  );
}
export default App;