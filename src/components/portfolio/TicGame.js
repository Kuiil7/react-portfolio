import React from "react";
import Card from "../layout/cards/Card";
import {GamesData} from "../data/GamesData";

const TicGame = () =>{
  return (
    <>
<section className="hero is-light is-fullheight">
<p className="title has-text-centered mt-5 ">GAMES PROJECTS</p>
<div className="container">
<div className="columns  scrolling-wrapper scrolling-hidden ">
{GamesData.map(GamesData => (
<div className="column  px-5" key={GamesData.id}>
<Card
title={GamesData.title}
myDuty={GamesData.myDuty}
description={GamesData.description}
builtWith={GamesData.builtWith}
images={GamesData.images}
alt={GamesData.alt}
repo={GamesData.repo}
demo={GamesData.demo}
url={GamesData.url}
status={GamesData.status}

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