import React from "react";


function Card(props) {


  return (
    <div className="container"   >
<div className="card is-size-6-mobile is-size-5w-desktop ">
<div className="card-image ">
<figure className="image is-4by3">
<img src={props.images} alt={props.alt}   />    </figure>
</div>
<div className="card-content">
<div className="media">
<div className="media-left">
<p className="title is-size-4 has-text-dark">{props.title}</p>
</div>
</div>

<div className="content ">
<p className="subtitle is-size-5w"> {props.description}</p>
<p className="subtitle is-size-5w"><strong>My Duties: </strong>{props.myDuty}</p>
<p className="subtitle is-size-5w"><strong>Built with: </strong>{props.builtWith}</p>
<div className="has-text-centered">
<a href={props.repo}><button className="button is-primary is-outlined mr-2 ">Repo</button></a>
<a href={props.demo}><button className="button is-primary is-outlined ">Demo</button></a>
</div>

</div>
</div>

</div>

    </div>
  );
}
export default Card;