import React from "react";
import ProjectHeader from "./ProjectHeader";
import Header from "../Header"

const data = [

  {
  id: 1,
    title: "Movie-Magic",
    images:( process.env.PUBLIC_URL +  "../images/repos/movie_magic.png"),
    alt: "sign-in screen",
    repo: "https://github.com/HowardDaniels/movie-magic" ,
    demo:"https://infinite-inlet-20359.herokuapp.com",
    description: "This application allows the user to find movies and buddies.",
    myDuty:"Configuring setting up authentication using PassportJs and styling.",
    builtWith: "ExpressJs, NodeJs, PassportJs, MySQL, MomentsJs, Ajax, Sequelize, Dotenv, Console.Table, and Heroku."
  },
  {
    id: 2 ,
    title: "LingoLabs",
    images: ( process.env.PUBLIC_URL + "../images/repos/lingolabs.png"),
    alt: "lingolabs website",
    repo:   "https://github.com/ShawnWhy/LingoLabs" ,
    demo:"https://shawnyulingolabsmaster.herokuapp.com/",
    description: "A website where users can browse and shop for stock website templates.",
    myDuty: "Creating the registration page, configuring the backend server, setting up private routes.",
    builtWith: "NodeJs, NPM, Expressjs, MongoDB, Reactjs, Mongoose, Passportjs, Socket.io, and Heroku."
  },
  {
    id: 3,
    title: "Sports-Tracker",
    images: (process.env.PUBLIC_URL + "../images/repos/sports_tracker.png"),
    alt: "figure of players playing verious sports",
    repo: "https://github.com/SportsWarriorsGWU/Sports-Tracker/" ,
    demo:"https://sportswarriorsgwu.github.io/Sports-Tracker/",
    description: "Sports-Tracker is a website dedicated to sports (NBA, NCAA, MLB, NHL) stats and news with a favorites funciton",
    myDuty: "My core responsibility utilizing Bootstrap and Bulma CSS to work with API call data.",
    builtWith: "Bootstrap, Bulma, Javascript, and JQuery."
  },
  {
    id: 4,
    title: "Note-Taker",
   images: ( process.env.PUBLIC_URL + "../images/repos/note_taker.gif"),
   alt: "note taker ",
   repo: "https://github.com/Kuiil7/Note-Taker" ,
   demo:"https://kuiil7.github.io/Note-Taker",
    description: "This application was created to write, save, and delete text notes.",
    myDuty: "My core responsibility was creating the app from scratch.",
    builtWith: "Bootstrap, NodeJs, NPM, jQuery, Expressjs, Ajax, and JSON."
  },
  {
    id: 5,
    title: "Eat-Da-Burger",
    images: ( process.env.PUBLIC_URL + "../images/repos/eatdaburger.gif"),
    alt: "landing page with input box",
    repo: "https://github.com/Kuiil7/Node-Express-Handlebars" ,
    demo:"https://ancient-thicket-66505.herokuapp.com/",
    description: "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they would like to eat.",
    myDuty: "All responsibilities (individual project)",
    builtWith: "NodeJs, Express Handlebars (MVC), and MySQL."
  }
];


function Bootcamp () {


 return (
<>

<Header />
<ProjectHeader/>

<section className="hero is-warning is-fullheight">
<div className="container">
<div className="hero-body ">
<div className="columns
is-flex-wrap-no-wrap
scrolling-wrapper
scrolling-hidden
is-mobile
"
>
{data.map(data => (
<div className="column is-10 box m-1 p-6" key={data.id}>
<div className="columns">
<div className="column p-2">
<div className="has-text-centered p-2"><img src={data.images} alt={data.alt} width="250px" /></div>
<div className="has-text-centered mt-4">
  <a href={data.repo}><button className="button is-info is-outlined mr-2 ">Repo</button></a>
<a href={data.demo}><button className="button is-info is-outlined ">Demo</button></a>
</div>
  </div>
  <div className="column is-8">
  <p className="title is-4  has-text-dark">{data.title}</p>
  <p className="mb-3 "> {data.description}</p>
  <p className="mb-1"><strong>My Duties: </strong>{data.myDuty}</p>
  <p><strong>Built with: </strong>{data.builtWith}</p>
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

export default Bootcamp;