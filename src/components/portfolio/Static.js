import React from "react";
import Card from "../layout/cards/Card_4by3"
import {StaticData} from "../data/StaticData";

const Static = () => {
 return (
<>
<main aria-labelledby="static websites projects">
    <section className="hero is-light is-fullheight">
        <h1 className="title  has-text-centered mt-4">STATIC WEBSITES </h1>
            <div className="container">
                <div className="columns scrolling-wrapper scrolling-hidden ">
                    {StaticData.map(StaticData => (
                        <div className="column is-8  px-5" key={StaticData.id}>
                            <Card
                                title={StaticData.title}
                                myDuty={StaticData.myDuty}
                                description={StaticData.description}
                                builtWith={StaticData.builtWith}
                                images={StaticData.images}
                                alt={StaticData.alt}
                                repo={StaticData.repo}
                                demo={StaticData.demo}
                                status={StaticData.status}
                                url={StaticData.url}
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

export default Static;