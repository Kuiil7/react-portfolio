import React from "react";
import Card from "../layout/cards/Card"
import {data} from "../data/Data";
import ASLHeader from "../layout/ASLHeader"

const Landscape = () => {
 return (
<>
<ASLHeader />

<section className="hero is-light is is-fullheight">
  
<div className="container">
 <div className="columns scrolling-wrapper scrolling-hidden ">
{data.slice(15,17).map(data => (
<div className="column is-8 p-6 " key={data.id}>
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

export default Landscape;