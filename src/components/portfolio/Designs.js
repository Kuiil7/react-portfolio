import React from "react";
import Card2 from "../layout/cards/Card2"
import {data} from "../data/Data";

const Designs = () => {
 return (
<>
<section className="hero is-light is is-fullheight">
<p className="title  has-text-centered mt-4 ">Graphic Designs</p>
<div className="container">
<div className="columns  scrolling-wrapper scrolling-hidden ">
{data.slice(17,29).map(data => (
<div className="column is-5" key={data.id}>
<Card2
title={data.title}
myDuty={data.myDuty}
description={data.description}
builtWith={data.builtWith}
images={data.images}
alt={data.alt}
repo={data.repo}
demo={data.demo}
url={data.url}
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

export default Designs;