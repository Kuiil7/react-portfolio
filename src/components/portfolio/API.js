import React from 'react';
import Card from '../layout/cards/Card_4by3'
import {APIData} from '../data/APIData';

const API = () => {
 return (
<>
<main aria-labelledby="API projects">
    <section className="hero is-light is-fullheight">
        <h1 className="title has-text-centered mt-4 ">API PROJECTS</h1>
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
</main>
</>
);
}

export default API;