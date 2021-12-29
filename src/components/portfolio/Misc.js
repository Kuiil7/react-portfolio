import React from "react";
import ProjectHeader from "./ProjectHeader";
import Header from "../Header"
import Card from "../Card"


function Misc () {

  const data = [

    {
    id: 1,
      title: "GEAH Group",
      images:( process.env.PUBLIC_URL +  "../images/repos/geah_group.png"),
      alt: "El fundador sostiene tres botellas de vitamina.",
      repo: "https://github.com/Kuiil7/geah_group.git" ,
      demo:"https://geahgroup.pe",
      description: "Esthetic medicine, health and beauty, and pharmaeuticals based in Peru.",
      myDuty:"Sole maintainer.",
      builtWith: "Bulma."
    },
    {
      id: 2 ,
      title: "ErrandFolks (discontinued)",
      images: ( process.env.PUBLIC_URL + "../images/repos/errandfolks.png"),
      alt: "landing page with a video showing a man holding a cart witha mask",
      repo:   "https://github.com/Kuiil7/errandfolks" ,
      demo:"https://sad-spence-4b83df.netlify.app",
      description: "Volunteer-based delivery services to deaf elders and immunocompromised.",
      myDuty: "Sole maintainer.",
      builtWith: "Bulma."
    },

  ];

 return (
<>

<Header />
<ProjectHeader/>

<section className="hero is-light is-fullheight">
<div className="container">
<div className="hero-body ">
<div className="columns is-flex-wrap-no-wrap scrolling-wrapper scrolling-hidden is-mobile">
{data.map(data => (
<div className="column is-8  mt-6 p-6 m-4 " key={data.id}>

<Card
title={data.title}
myDuty={data.myDuty}
description={data.description}
builtWith={data.builtWith}
images={data.images}
alt={data.alt}
repo={data.repo}
demo={data.demo}

/>

  </div>
))}
 </div>
 </div>
 </div>
</section>

</>
);
}

export default Misc;