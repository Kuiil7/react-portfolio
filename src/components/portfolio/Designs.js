import React, { useState } from 'react';
import Card2 from "../layout/cards/Card2"
import Card3 from "../layout/cards/Card3"

import {CBTLData} from "../data/CBTLData";
import {ATTData} from "../data/ATTData";
import {ATTData2} from "../data/ATTData2";

import {SCData} from "../data/SCData";
import {YPData} from "../data/YPData";
import {PERData} from "../data/PERData";

const Designs = () => {


 return (
<>

<section className="hero is is-fullheight " >

<p className="title is-size-4 mt-4 has-text-centered ">Gallaudet University</p>
<p className="title is-size-5 has-text-weight-light has-text-centered">Center for Bilingual Teaching and Learning</p>



<div className="columns is-flex-wrap-wrap px-3">

{CBTLData.map(CBTLData => (
<div className="column is-4" key={CBTLData.id}>
<Card2
title={CBTLData.title}
myDuty={CBTLData.myDuty}
description={CBTLData.description}
builtWith={CBTLData.builtWith}
images={CBTLData.images}
alt={CBTLData.alt}
repo={CBTLData.repo}
demo={CBTLData.demo}
url={CBTLData.url}
status={CBTLData.status}
dimension={CBTLData.dimension}
/>
  </div>
))}
 </div>


 <p className="title is-size-5 has-text-weight-light has-text-centered">Schuchman Center</p>

 <div className="columns is-flex-wrap-wrap px-3">


{SCData.slice(0,7).map(SCData => (
<div className="column is-4" key={SCData.id}>
<Card2
title={SCData.title}
myDuty={SCData.myDuty}
description={SCData.description}
builtWith={SCData.builtWith}
images={SCData.images}
alt={SCData.alt}
repo={SCData.repo}
demo={SCData.demo}
url={SCData.url}
status={SCData.status}
dimension={SCData.dimension}
/>
  </div>
))}
</div>


 <p className="title has-text-weight-light mt-4 has-text-centered">Youth Programs</p>

 <div className="columns is-flex-wrap-wrap px-3">
{YPData.slice(0,6).map(YPData => (
<div className="column is-4" key={YPData.id}>
<Card2
title={YPData.title}
myDuty={YPData.myDuty}
deYPription={YPData.deYPription}
builtWith={YPData.builtWith}
images={YPData.images}
alt={YPData.alt}
repo={YPData.repo}
demo={YPData.demo}
url={YPData.url}
status={YPData.status}
dimension={YPData.dimension}
/>
  </div>
))}
 </div>

 <p className="title has-text-weight-light mt-4 has-text-centered">Physical Education & Recreation</p>

 <div className="columns is-flex-wrap-wrap px-3">
{PERData.slice(0,1).map(PERData => (
<div className="column is-4" key={PERData.id}>
<Card2
title={PERData.title}
myDuty={PERData.myDuty}
deYPription={PERData.deYPription}
builtWith={PERData.builtWith}
images={PERData.images}
alt={PERData.alt}
repo={PERData.repo}
demo={PERData.demo}
url={PERData.url}
status={PERData.status}
dimension={PERData.dimension}
/>
  </div>
))}
 </div>


 <p className="title  ml-4">AT&T</p>

 <div className="columns is-flex-wrap-wrap px-3">

{ATTData.map(ATTData => (
<div className="column is-6" key={ATTData.id}>
<Card3
title={ATTData.title}
myDuty={ATTData.myDuty}
description={ATTData.description}
builtWith={ATTData.builtWith}
images={ATTData.images}
alt={ATTData.alt}
repo={ATTData.repo}
demo={ATTData.demo}
url={ATTData.url}
status={ATTData.status}
dimension={ATTData.dimension}
iframe={ATTData.iframe}
/>
  </div>
))}
{ATTData2.map(ATTData2 => (
<div className="column is-6" key={ATTData2.id}>
<Card2
title={ATTData2.title}
myDuty={ATTData2.myDuty}
description={ATTData2.description}
builtWith={ATTData2.builtWith}
images={ATTData2.images}
alt={ATTData2.alt}
repo={ATTData2.repo}
demo={ATTData2.demo}
url={ATTData2.url}
status={ATTData2.status}
dimension={ATTData2.dimension}
iframe={ATTData2.iframe}
/>
  </div>
))}

 </div>



</section>

</>
);
}

export default Designs;