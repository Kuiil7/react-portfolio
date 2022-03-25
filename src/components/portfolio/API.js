import React from "react";
import ProjectHeader from "../layout/ProjectsHeader";
import Card from "../layout/cards/Card"
import {data} from "../data/Data";
import Header from "../layout/Header"

const API = () => {
 return (
<>
<Header />
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

export default API;