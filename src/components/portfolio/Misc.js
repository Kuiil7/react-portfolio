import React from "react";
import ProjectHeader from "../layout/ProjectHeader";
import Header2 from "../layout/Header2"
import Card from "../Card"
import {data} from "./Data";

const Misc = () => {
 return (
<>
<Header2 />
<ProjectHeader/>
<section className="hero is-light is-fullheight">
<div className="container">
<div className="hero-body ">
<div className="columns scrolling-wrapper scrolling-hidden ">
{data.slice(7,9).map(data => (
<div className="column is-8  mt-6 p-6 m-4 " key={data.id}>
<Card
title={data.title}
myDuty={data.myDuty}
description={data.description}
builtWith={data.builtWith}
images={data.images}
alt={data.alt}
repo={data.repo}
demo={data.demo}
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

export default Misc;