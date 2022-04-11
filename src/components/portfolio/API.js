import React from "react";
import Card from "../layout/cards/Card"
import {APIData} from "../data/APIData";

const API = () => {
 return (
<>
<section className="hero is-light is-fullheight">
<p className="title has-text-centered mt-4 ">API PROJECTS</p>
<div className="container ">

<div className="columns  scrolling-wrapper scrolling-hidden ">
{APIData.map(APIData => (
<div className="column is-6 px-5" key={APIData.id}>
<Card
title={APIData.title}
myDuty={APIData.myDuty}
description={APIData.description}
builtWith={APIData.builtWith}
images={APIData.images}
alt={APIData.alt}
repo={APIData.repo}
demo={APIData.demo}
status={APIData.status}
url={APIData.url}
/>
</div>
))}

 </div>
 </div>
</section>
</>
);
}

export default API;