import React from "react";

const data = [

  {

    name: "Movie-Magic",
    images:( process.env.PUBLIC_URL +  "../images/movie_magic.png"),
    alt: "sign-in screen",
    repo: "https://github.com/HowardDaniels/movie-magic" ,
    demo:"https://infinite-inlet-20359.herokuapp.com",
    description: "This application allows the user to find movies and fellow movie buffs called- buddies, based on information they provide in a form which is accessed upon signing up or logging in. Once the user's top 3 favorite movies, actors, directors, and movie genres are entered, the user consents to being searchable by fellow movie buffs, and then submits the form.Upon submitting the form, users see descriptions of their favorite movies, recommended movies based on their favorite movies, actors, directors, and genres. These recommended movie results include posters which can be clicked on to access the Rotten Tomatoes page for that movie. In addition, the user sees a list of buddies whose tastes in movies are closest to theirs.This application uses OMDB API to search movie data, as well as MySQL to store user data in a database. The business impact of this application is the ability for movies to receive increased publicity through recommendations and social networks developed through the buddy search. Future developments to this project include adding geolocation to prioritize nearby buddies in the search, as well as messaging between buddies.",
    myDuty: "My Duties: My core responsibility was registration page, layout, API calls.",
    builtWith: "Built with: Express.js, NodeJs, Passport.js, MySQL, Moments.Js, Ajax, Sequelize, Dotenv, Console.Table, and Heroku."
  },
  {

    name: "LingoLabs",
    images: ( process.env.PUBLIC_URL + "../images/lingolabs.png"),
    alt: "lingolabs website",
    repo: "https://github.com/ShawnWhy/LingoLabs" ,
    demo:"https://shawnyulingolabsmaster.herokuapp.com/",
    description: "Description: A website where users can browse and shop for stock websites templates.",
    myDuty: "My Duties: My core responsibility was creating the registration and backend server.",
    builtWith: "Built with: NodeJs, NPM, Express.js, MongoDB, React.js, Mongoose, Passport.js, Socket.io, and Heroku."
  },
  {

    name: "Sports-Tracker",
    images: (process.env.PUBLIC_URL + "../images/sports_tracker.png"),
    alt: "figure of players playing verious sports",
    repo: "https://github.com/SportsWarriorsGWU/Sports-Tracker/" ,
    demo:"https://sportswarriorsgwu.github.io/Sports-Tracker/",
    description: "Description: Sports-Tracker is a website dedicated to the professional sports leagues of the United States (minus MLS to come in a later version). It features stats and news related to each league and the specific teams, as well as quick links and a favorite function.",
    myDuty: "My Duties: My core responsibility was creating the registration page where the user signups/ logins, logout, and redirect (members page). *registration has bugs but work by manually refreshing after every input.",
    builtWith: "Built with: Bootstrap, Bulma, Javascript, and JQuery."
  },
  {

    name: "Note-Taker",
   images: ( process.env.PUBLIC_URL + "../images/note_taker.gif"),
   alt: "note taker ",
   repo: "https://github.com/Kuiil7/Note-Taker" ,
   demo:"https://kuiil7.github.io/Note-Taker",
    description: "Description: This application was created to write, save, and delete text notes. This is for any type of user that wants to track any amount of information. Backend data is stored and retrieved in JSON format via Express.",
    myDuty: "My Duties: My core responsibility was creating the app from scratch",
    builtWith: "Built with: Bootstrap, NodeJs, NPM, jQuery, Express.js, Ajax, and JSON."
  },
  {
    name: "Eat-Da-Burger",
    images: ( process.env.PUBLIC_URL + "../images/eatdaburger.gif"),
    alt: "landing page with input box",
    repo: "https://github.com/Kuiil7/Node-Express-Handlebars" ,
    demo:"https://ancient-thicket-66505.herokuapp.com/",
    description: "Description: Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they would like to eat.",
    myDuty: "My Duties: All responsibilities (individual project)",
    builtWith: "Built with: Node, Express Handlebars (MVC), and MySQL."
  }
];


function Portfolio () {
 return (
    <div>
    {data.map(function(data){
       return (<div className="container pb-4 bg-white">
  <div className="col  ">
    <div className="col-sm ">
      <h1 className="text-center pt-5">
      {data.name}
      </h1>
  < div  >
  <center>
  <img src={data.images} alt={data.alt} className="img-fluid fade-in-3 rounded" />
  </center>
      </div>
      <div className=" p-4 " style={{ display:"flex",justifyContent: "center"}}>
<div>
  </div>
  <span>
  <a href={data.repo} className=" m-2 btn-outline-dark btn-1 btn rounded-pill" >REPO</a>
  </span>

<span>
<a href={data.demo} className=" m-2 btn-outline-dark btn-1 btn rounded-pill">
    DEMO
     </a>
</span>


</div>

    </div>

    <ul className="list-group text-justify">
  <li className="list-group-item "><strong> Description: </strong>{data.description}</li>
  <li className="list-group-item "><strong>My Duties:</strong>  {data.myDuty}</li>
  <li className="list-group-item "><strong>Built with:</strong>{data.builtWith}</li>
</ul>

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