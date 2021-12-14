import React from "react";
import ProjectHeader from "./ProjectHeader";
import Header from "../Header"
import Box from "../portfolio/Box"
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
          myDuty:"Sole maintainer",
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
          myDuty: "Sole maintainer",
          builtWith: "Luxon, Axios, dotenv, Material-UI, and Bulma.",
          poweredBy:"https://www.themoviedb.org/"

        },

      ];

 return (
<>
<Header />
<ProjectHeader/>
<div className="is-fullheight has-background-danger" style={{height:'100vh'}}>
<div className="container">
<div className="columns
is-flex-wrap-no-wrap
scrolling-wrapper
scrolling-hidden
"
>
{data.map(data => (
<div className="column  box mt-6 p-6 m-4" key={data.id}>
<div className="columns">

<div class="columns is-mobile">
  <div class="column column is-11 is-offset-1">

  <img src={data.images} alt={data.alt}   />

  </div>
</div>
<div className="column is-10 ">



<p className="title is-size-2-desktop is-size-3-mobile  has-text-dark">{data.title}</p>
  <p className=" subtitle  is-5-mobile is-size-4-desktop"> {data.description}</p>
  <p className=" subtitle is-size-3"><strong>My Duties: </strong>{data.myDuty}</p>
  <p><strong>Built with: </strong>{data.builtWith}</p>
  <p><strong>Powered By: </strong><a href={data.poweredBy}>{data.poweredBy}</a></p>
  <a href={data.repo}><button className="button is-primary is-outlined mr-2 ">Repo</button></a>
<a href={data.demo}><button className="button is-primary is-outlined ">Demo</button></a>

  </div>

</div>
    </div>
))}
 </div>
</div>
</div>

</>
);
}

export default APIProjects;