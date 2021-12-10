import React from "react";
import ASLV_1 from "./ASLV_1";
import ProjectHeader from "./ProjectHeader";
import Header from "../Header"
function Games() {


  return (
<div className="container">
<Header />
<ProjectHeader/>
<div className="columns ">
<div className="column ">
<ASLV_1 />
</div>
</div>
</div>
  );
}
export default Games;