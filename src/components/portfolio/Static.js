import React from "react";
import Card from "../layout/cards/Card"
import {data} from "../data/Data";

const Static = () => {
 return (
<>

<section className="hero is-light is-fullheight">
<p className="title has-text-centered mt-4 ">BOOTCAMP PROJECTS</p>

<div className="container">

<div className="columns scrolling-wrapper scrolling-hidden ">
{data.slice(8,11).map(data => (
<div className="column is-8  px-5" key={data.id}>
<Card
title={data.title}
myDuty={data.myDuty}
description={data.description}
builtWith={data.builtWith}
images={data.images}
alt={data.alt}
repo={data.repo}
demo={data.demo}
status={data.status}

/>
</div>
))}
 </div>
 </div>
</section>
</>
);
}

export default Static;