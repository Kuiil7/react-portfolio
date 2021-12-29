import React from "react";
import ProjectHeader from "./ProjectHeader";
import Header from "../Header"
import Card from "../Card"

function APIProjects () {
const data = [
        {
        id: 1,
          title: "MyWeather",
          images:( process.env.PUBLIC_URL +  "../images/repos/myweather_ss.png"),
          alt: "weather dashboard",
          repo: "https://github.com/Kuiil7/myweather" ,
          demo:"https://my-weather-one.vercel.app/",
          description:"Find local temperature via geolocation function and do query search across U.S.",
          myDuty:"Sole maintainer.",
          builtWith:"Bulma, Axios, Moment and dotenv.",
          poweredBy:"https://openweathermap.org/"
        },
        {
          id: 2 ,
          title: "MyMovies",
          images: ( process.env.PUBLIC_URL + "../images/repos/mymovies_ss.png"),
          alt: "screenshot of mymovies app",
          repo: "https://github.com/Kuiil7/mymovies" ,
          demo:"https://mymovies-five.vercel.app/",
          description: "A website where users can search for movies, TV shows, and actors.",
          myDuty: "Sole maintainer.",
          builtWith: "Luxon, Axios, dotenv, Material-UI, and Bulma.",
          poweredBy:"https://www.themoviedb.org/"

        },

      ];

 return (
<>
<Header />
<ProjectHeader/>

<Card />
<section className="hero is-light is-fullheight">
<div className="container">
<div className="hero-body ">
<div className="columns is-flex-wrap-no-wrap scrolling-wrapper scrolling-hidden is-mobile">
{data.map(data => (
<div className="column is-8  mt-6 p-6 m-4 " key={data.id}>

<div className="card is-size-6-mobile is-size-4-desktop">
<div className="card-image">
<figure className="image is-4by3">
<img src={data.images} alt={data.alt}   />    </figure>
</div>
<div className="card-content">
<div className="media">
<div className="media-left">
<p className="title has-text-dark">{data.title}</p>
</div>
</div>

<div className="content ">
<p className=" subtitle  "> {data.description}</p>
<p className=" subtitle "><strong>My Duties: </strong>{data.myDuty}</p>
<p><strong>Built with: </strong>{data.builtWith}</p>
<p><strong>Powered By: </strong><a href={data.poweredBy}>{data.poweredBy}</a></p>
<div className="has-text-centered">
<a href={data.repo}><button className="button is-primary is-outlined mr-2 ">Repo</button></a>
<a href={data.demo}><button className="button is-primary is-outlined ">Demo</button></a>
</div>
<br />
</div>
</div>

</div>

</div>
))}
 </div>
 </div>
 </div>
</section>


</>
);
}

export default APIProjects;