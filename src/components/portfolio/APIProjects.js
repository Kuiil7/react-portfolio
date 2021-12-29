import React from "react";
import ProjectHeader from "../Style/ProjectHeader";
import Header from "../Style/Header"
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
href={data.poweredBy}
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

export default APIProjects;