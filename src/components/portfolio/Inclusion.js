import React from "react";
import Card from "../layout/cards/Card"
import {InclusionData} from "../data/InclusionData";

const Inclusion = () => {
 return (
<>
<section className="hero is-light is is-fullheight">
<p className="Gallaudet University Graduate School's Newsletter"></p>
<p className="title  has-text-centered mt-5 ">Inclusive Web Design </p>
<p className="subtitle is-size-5 has-text-centered">Launched Gallaudet University's First Graduate School Newsletters in 2017</p>
<div className="container">
 <div className="columns scrolling-wrapper scrolling-hidden ">
{InclusionData.map(InclusionData => (
<div className="column is-8 px-5 py-5 " key={InclusionData.id}>
<Card
title={InclusionData.title}
myDuty={InclusionData.myDuty}
description={InclusionData.description}
builtWith={InclusionData.builtWith}
images={InclusionData.images}
alt={InclusionData.alt}
repo={InclusionData.repo}
demo={InclusionData.demo}
url={InclusionData.url}
status={InclusionData.status}
url2={InclusionData.url2}
/>
  </div>
))}
 </div>
 </div>
</section>
</>
);
}

export default Inclusion;