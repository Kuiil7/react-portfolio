import React from "react";
import { Routes, Route} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Main from "./components/Main";
import Header from "./Header";

function App() {
  return (
    <div className="App">
<Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}
export default App;