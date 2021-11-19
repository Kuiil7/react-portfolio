import React from "react";
import Bootcamp from "../portfolio/Bootcamp"
import APIProjects from "../portfolio/APIProjects"


function Portfolio () {
 return (
<>
<div className="container">
<APIProjects />
<Bootcamp />
</div>
</>
);
}

export default Portfolio;