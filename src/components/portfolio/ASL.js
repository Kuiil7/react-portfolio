import React from "react";
import Card2 from "../layout/cards/Card"
import {data} from "../data/Data";

const ASL = () => {
 return (
<>

<section className="hero is-light is is-fullheight">
<p className="Gallaudet University Graduate School's Newsletter"></p>
<p className="title is-size-5 has-text-centered mt-5 ">Inclusive Web Design </p>
<p className="subtitle is-size-7 has-text-centered">Launched Gallaudet University's First Graduate School Newsletters</p>
<div className="container">
 <div className="columns scrolling-wrapper scrolling-hidden ">
{data.slice(12,17).map(data => (
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

export default ASL;