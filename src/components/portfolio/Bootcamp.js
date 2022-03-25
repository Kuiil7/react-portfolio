import React from "react";
import ProjectHeader from "../layout/ProjectsHeader";
import Card from "../layout/cards/Card"
import {data} from "../data/Data";
import Header from "../layout/Header"

const Bootcamp = () => {
 return (
<>
<Header />
<ProjectHeader/>
<section className="hero is-light is is-fullheight">
<div className="container">
<div className="columns  scrolling-wrapper scrolling-hidden ">
{data.slice(0,5).map(data => (
<div className="column is-6 p-6 mt-6 p-6 m-4 " key={data.id}>
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
</section>

</>
);
}

export default Bootcamp;