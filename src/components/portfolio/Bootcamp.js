import React from "react";
import ProjectHeader from "../layout/ProjectHeader";
import Header from "../layout/Header"
import Card from "../Card"
import {data} from "./Data";

const Bootcamp = () => {
 return (
<>
<Header />
<ProjectHeader/>
<section className="hero is-light is is-fullheight">
<div className="container">
<div className="columns  scrolling-wrapper scrolling-hidden ">
{data.slice(0,5).map(data => (
<div className="column is-8 p-6" key={data.id}>
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