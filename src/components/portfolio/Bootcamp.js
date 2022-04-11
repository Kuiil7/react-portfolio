import React from "react";
import Card from "../layout/cards/Card"
import {BootcampData} from "../data/BootcampData";

const Bootcamp = () => {
 return (
<>
<section className="hero is-light is is-fullheight">
<p className="title  has-text-centered mt-4 ">BOOTCAMP PROJECTS</p>
<div className="container">
<div className="columns  scrolling-wrapper scrolling-hidden ">
{BootcampData.map(BootcampData => (
<div className="column is-6 px-5" key={BootcampData.id}>
<Card
title={BootcampData.title}
myDuty={BootcampData.myDuty}
description={BootcampData.description}
builtWith={BootcampData.builtWith}
images={BootcampData.images}
alt={BootcampData.alt}
repo={BootcampData.repo}
demo={BootcampData.demo}
url={BootcampData.url}
status={BootcampData.status}
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