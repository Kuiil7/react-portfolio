import React from "react";
import ProjectHeader from "../layout/ProjectHeader";
import Header from "../layout/Header"
import Card from "../Card"
import {data} from "./Data";

const APIProjects = () => {

    let bgColors = {
        "default": "hsl(217, 71%, 53%)",
        "frontPage": "hsl(215,100%,20%, .1)",
      };

 return (
<>
<div style={{backgroundColor: bgColors.default}}>
  <Header />
</div>


<ProjectHeader/>
<section className="hero is-light is-fullheight">
<div className="container">
<div className="hero-body">
<div className="columns  scrolling-wrapper scrolling-hidden ">
{data.slice(5,7).map(data => (
<div className="column is-8 p-5 " key={data.id}>
<Card
title={data.title}
myDuty={data.myDuty}
description={data.description}
builtWith={data.builtWith}
images={data.images}
alt={data.alt}
repo={data.repo}
demo={data.demo}
href={data.poweredBy}
/>
</div>
))}
 </div>
 </div>
 </div>
</section>
</>
);
}

export default APIProjects;