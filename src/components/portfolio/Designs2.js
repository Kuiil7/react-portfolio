import React from 'react';
import Card4 from '../layout/cards/Card4'
import {sampleData} from '../data/sampleData';
import Main from '../layout/Main';


const Designs2 = () => {
  for (let i = 0; i < sampleData.length; i++) {
    console.log(sampleData[i]);
  }
 return (
<>

<section className="hero is is-fullheight " >
  {sampleData.map(sampleData => (
    <div className="column is-6 px-5" key={sampleData.id}>
      <p>{sampleData.title}</p>
        <Card4
        title={sampleData.cbtl[0].title}
        myDuty={sampleData.myDuty}
        description={sampleData.description}
        builtWith={sampleData.builtWith}
        images={sampleData.images}
        alt={sampleData.alt}
        repo={sampleData.repo}
        demo={sampleData.demo}
        url={sampleData.url}
        status={sampleData.status}
        dimension={sampleData.dimension}
/>
  </div>
))}
</section>

</>
);
}

export default Designs2;