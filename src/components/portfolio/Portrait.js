import React from "react";
import Card2 from "../layout/cards/Card2"
import {data} from "../data/Data";
import ASLHeader from "../layout/ASLHeader"

const Portrait = () => {
 return (
<>

<p className="Gallaudet University Graduate School's Newsletter"></p>
<p className="title has-text-centered mt-6 ">Inclusive Web Design </p>

<ASLHeader />
<section className="hero is-light is is-fullheight">

<div className="container">
 <div className="columns scrolling-wrapper scrolling-hidden ">
{data.slice(12,15).map(data => (
<div className="column is-8 px-5 py-5 " key={data.id}>
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

export default Portrait;