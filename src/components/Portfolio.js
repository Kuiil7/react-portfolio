import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

const data = [

  {
  id: 1,
    name: "Movie-Magic",
    images:( process.env.PUBLIC_URL +  "../images/portfolio/movie_magic.png"),
    alt: "sign-in screen",
    repo: "https://github.com/HowardDaniels/movie-magic" ,
    demo:"https://infinite-inlet-20359.herokuapp.com",
    description: "This application allows the user to find movies and fellow movie buffs called- buddies, based on information they provide in a form which is accessed upon signing up or logging in. Once the user's top 3 favorite movies, actors, directors, and movie genres are entered, the user consents to being searchable by fellow movie buffs, and then submits the form. Upon submitting the form, users see descriptions of their favorite movies, recommended movies based on their favorite movies, actors, directors, and genres. These recommended movie results include posters which can be clicked on to access the Rotten Tomatoes page for that movie. In addition, the user sees a list of buddies whose tastes in movies are closest to theirs. This application uses OMDB API to search movie data, as well as MySQL to store user data in a database. The business impact of this application is the ability for movies to receive increased publicity through recommendations and social networks developed through the buddy search. Future developments to this project include adding geolocation to prioritize nearby buddies in the search, as well as messaging between buddies.",
    myDuty:"My core responsibilities were configuring MongoDB to the registration page using PassportJ and creating a private route for users, layout, and API calls.",
    builtWith: "ExpressJs, NodeJs, PassportJs, MySQL, MomentsJs, Ajax, Sequelize, Dotenv, Console.Table, and Heroku."
  },
  {
    id: 2 ,
    name: "LingoLabs",
    images: ( process.env.PUBLIC_URL + "../images/lingolabs.png"),
    alt: "lingolabs website",
    repo:   "https://github.com/ShawnWhy/portfolio/LingoLabs" ,
    demo:"https://shawnyulingolabsmaster.herokuapp.com/",
    description: "A website where users can browse and shop for stock website templates.",
    myDuty: "My core responsibility was creating the registration, backend server, private route.",
    builtWith: "NodeJs, NPM, Expressjs, MongoDB, Reactjs, Mongoose, Passportjs, Socket.io, and Heroku."
  },
  {
    id: 3,
    name: "Sports-Tracker",
    images: (process.env.PUBLIC_URL + "../images/portfolio/sports_tracker.png"),
    alt: "figure of players playing verious sports",
    repo: "https://github.com/SportsWarriorsGWU/Sports-Tracker/" ,
    demo:"https://sportswarriorsgwu.github.io/Sports-Tracker/",
    description: "Sports-Tracker is a website dedicated to the professional sports leagues of the United States (minus MLS to come in a later version). It features stats and news related to each league and the specific teams, as well as quick links and a favorite function.",
    myDuty: "My core responsibility utilizing Bootstrap and Bulma CSS to work with API call data.",
    builtWith: "Bootstrap, Bulma, Javascript, and JQuery."
  },
  {
    id: 4,
    name: "Note-Taker",
   images: ( process.env.PUBLIC_URL + "../images/portfolio/note_taker.gif"),
   alt: "note taker ",
   repo: "https://github.com/Kuiil7/Note-Taker" ,
   demo:"https://kuiil7.github.io/Note-Taker",
    description: "This application was created to write, save, and delete text notes. This is for any type of user that wants to track any amount of information. Backend data is stored and retrieved in JSON format via Express.",
    myDuty: "My core responsibility was creating the app from scratch",
    builtWith: "Bootstrap, NodeJs, NPM, jQuery, Expressjs, Ajax, and JSON."
  },
  {
    id: 5,
    name: "Eat-Da-Burger",
    images: ( process.env.PUBLIC_URL + "../images/portfolio/eatdaburger.gif"),
    alt: "landing page with input box",
    repo: "https://github.com/Kuiil7/Node-Express-Handlebars" ,
    demo:"https://ancient-thicket-66505.herokuapp.com/",
    description: "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they would like to eat.",
    myDuty: "All responsibilities (individual project)",
    builtWith: "NodeJs, Express Handlebars (MVC), and MySQL."
  }
];


function Portfolio () {


 return (
    <div className="p-4">
    {data.map(function(data, i){

       return (
       <div className="container pt-4 pb-4 bg-white" key={i}>
<div class="columns-reverse">
  <div class="column is-size-3 has-text-centered">
  <strong>{data.name}</strong>
  </div>
  <div class="column ">
    <center>
    <img src={data.images} alt={data.alt} className="is-fluid fade-in-3  " />

    </center>
  </div>
  <div class="column has-text-centered">
  <a href={data.repo} className=" m-2 " >
   <Button color="primary">Repo</Button>
</a>
<a href={data.demo}>
  <Button color="primary">Demo</Button>
</a>

</div>
  <div className="column">
  <ul  className="list-group has-text-justified ">
  <li className="list-group-item pb-3"><strong> Description: </strong>{data.description}</li>
  <li className="list-group-item pb-3"><strong>My Duties: </strong>  {data.myDuty}</li>
  <li className="list-group-item pb-3"><strong>Built with: </strong>{data.builtWith}</li>
</ul>
  </div>
</div>

</div>)
     })}
   <div style={
     {
     display:"flex",
     justifyContent: "center",
     }
     } >
     <i  className="fa fa-wrench text-white  pt-5  ">
     <a href="https://github.com/Kuiil7" className=" text-white btn-1 btn-sm" > JGAM 2021</a>

     </i>

     </div>
    </div>
);


}

export default Portfolio;