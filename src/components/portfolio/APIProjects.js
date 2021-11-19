import React from "react";


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

<div className="container">
<section className="hero is-primary is-small">
<p className="has-text-centered title is-3 pt-5">API Projects</p>
<div className="hero-body ">
<div className="columns
is-flex-wrap-no-wrap
scrolling-wrapper
scrolling-hidden
is-mobile
"
>
{data.map(data => (
<div className="column is-10 box m-1" key={data.id}>
<div className="columns">
<div className="column p-2">
<div className="has-text-centered p-2"><img src={data.images} alt={data.alt} width="250px" /></div>
<div className="has-text-centered mt-5">
  <a href={data.repo}><button className="button is-primary is-outlined mr-2 ">Repo</button></a>
<a href={data.demo}><button className="button is-primary is-outlined ">Demo</button></a>
</div>
  </div>
  <div className="column is-8">
  <p className="title is-4  has-text-dark">{data.title}</p>
  <p className="mb-3 "> {data.description}</p>
  <p className="mb-1"><strong>My Duties: </strong>{data.myDuty}</p>
  <p><strong>Built with: </strong>{data.builtWith}</p>
  <p><strong>Powered By: </strong><a href={data.poweredBy}>{data.poweredBy}</a></p>
  </div>
</div>
    </div>
))}
 </div>
 </div>
</section>
</div>
</>
);
}

export default APIProjects;