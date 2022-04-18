import React from "react";
import Card from "../layout/cards/Card_4by3"
import {InclusionData} from "../data/InclusionData";
import inc2 from "../images/gifs/inc2.gif"

const Inclusion = () => {
 return (
<>
<section className="hero is-light is is-fullheight">
<nav className="level">
  <div className="level-item has-text-centered mt-2">
    <div>
<img src={inc2} alt="inclusion sign in ASL"  />
<p className="title">Inclusive Web Design</p>
    </div>
  </div>
</nav>

<div className="container">
 <div className="columns scrolling-wrapper scrolling-hidden ">
{InclusionData.map(InclusionData => (
<div className="column is-8 px-5  " key={InclusionData.id}>

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