import React from "react";
import Card from "../layout/cards/Card";
import {data} from "../data/Data";

const TicGame = () =>{
  return (
    <>
<section className="hero is-light is-fullheight">
<div className="container">
<div className="columns  scrolling-wrapper scrolling-hidden ">
{data.slice(11,12).map(data => (
<div className="column  p-6" key={data.id}>
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
export default TicGame;