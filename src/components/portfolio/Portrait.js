import React from "react";
import Card2 from "../layout/cards/Card2"
import {data} from "../data/Data";
import ASLHeader from "../layout/ASLHeader"
import ProjectHeader from "../layout/ProjectsHeader";
import Header from "../layout/Header"

const Portrait = () => {
 return (
<>
<Header />
<ProjectHeader/>
<p className="Gallaudet University Graduate School's Newsletter"></p>
<ASLHeader />
<section className="hero is-light is is-fullheight">
<div className="container">
 <div className="columns scrolling-wrapper scrolling-hidden ">
{data.slice(11,14).map(data => (
<div className="column is-8 p-6 " key={data.id}>
<Card2
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
</section>

</>
);
}

export default Portrait;