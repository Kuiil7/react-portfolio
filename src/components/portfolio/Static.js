import React from "react";
import Card from "../layout/cards/Card"
import {StaticData} from "../data/StaticData";

const Static = () => {
 return (
<>

<section className="hero is-light is-fullheight">
<p className="title  has-text-centered mt-4 ">STATIC WEBSITES </p>

<div className="container">

<div className="columns scrolling-wrapper scrolling-hidden ">
{StaticData.map(StaticData => (
<div className="column is-8  px-5" key={StaticData.id}>
<Card
title={StaticData.title}
myDuty={StaticData.myDuty}
description={StaticData.description}
builtWith={StaticData.builtWith}
images={StaticData.images}
alt={StaticData.alt}
repo={StaticData.repo}
demo={StaticData.demo}
status={StaticData.status}
url={StaticData.url}

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