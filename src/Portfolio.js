import React from "react";
import './App.css';

const Portfolio = () => {



  const data = [

    {
    id: 1,
      title: "Movie-Magic",
      images:( process.env.PUBLIC_URL +  "./images/repos/movie_magic.png"),
      alt: "sign-in screen",
      repo: "https://github.com/HowardDaniels/movie-magic" ,
      demo:"https://infinite-inlet-20359.herokuapp.com",
      description: "This application allows the user to find movies and fellow movie buffs called- buddies, based on user input which is accessed upon signing or logging in. Once the user's top 3 categoriesare entered, the user has the option to being searchable by fellow movie buffs, and then submits the form.",
      myDuty:"configuring MongoDB to the registration page using PassportJ and creating a private route for users, layout, and API calls.",
      builtWith: "ExpressJs, NodeJs, PassportJs, MySQL, MomentsJs, Ajax, Sequelize, Dotenv, Console.Table, and Heroku."
    },
    {
      id: 2 ,
      title: "LingoLabs",
      images: ( process.env.PUBLIC_URL + "./images/repos/lingolabs.png"),
      alt: "lingolabs website",
      repo:   "https://github.com/ShawnWhy/LingoLabs" ,
      demo:"https://shawnyulingolabsmaster.herokuapp.com/",
      description: "A website where users can browse and shop for stock website templates.",
      myDuty: "My core responsibility was creating the registration page, configuring the backend server, setting up private routes.",
      builtWith: "NodeJs, NPM, Expressjs, MongoDB, Reactjs, Mongoose, Passportjs, Socket.io, and Heroku."
    },
    {
      id: 3,
      title: "Sports-Tracker",
      images: (process.env.PUBLIC_URL + "./images/repos/sports_tracker.png"),
      alt: "figure of players playing verious sports",
      repo: "https://github.com/SportsWarriorsGWU/Sports-Tracker/" ,
      demo:"https://sportswarriorsgwu.github.io/Sports-Tracker/",
      description: "Sports-Tracker is a website dedicated to the professional sports leagues of the United States (minus MLS to come in a later version). It features stats and news related to each league and the specific teams, as well as quick links and a favorite function.",
      myDuty: "My core responsibility utilizing Bootstrap and Bulma CSS to work with API call data.",
      builtWith: "Bootstrap, Bulma, Javascript, and JQuery."
    },
    {
      id: 4,
      title: "Note-Taker",
     images: ( process.env.PUBLIC_URL + "./images/repos/note_taker.gif"),
     alt: "note taker ",
     repo: "https://github.com/Kuiil7/Note-Taker" ,
     demo:"https://kuiil7.github.io/Note-Taker",
      description: "This application was created to write, save, and delete text notes. This is for any type of user that wants to track any amount of information. Backend data is stored and retrieved in JSON format via Express.",
      myDuty: "My core responsibility was creating the app from scratch",
      builtWith: "Bootstrap, NodeJs, NPM, jQuery, Expressjs, Ajax, and JSON."
    },
    {
      id: 5,
      title: "Eat-Da-Burger",
      images: ( process.env.PUBLIC_URL + "./images/repos/eatdaburger.gif"),
      alt: "landing page with input box",
      repo: "https://github.com/Kuiil7/Node-Express-Handlebars" ,
      demo:"https://ancient-thicket-66505.herokuapp.com/",
      description: "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they would like to eat.",
      myDuty: "All responsibilities (individual project)",
      builtWith: "NodeJs, Express Handlebars (MVC), and MySQL."
    }
  ];



  return (
    < >
  <section className="
hero
is-light
is-fullheight"
  >

<div className='container'>
<div className="hero-body">
<div className="
columns
is-flex-wrap-wrap
">

{data.map((items, i) => (

<div className="
column
is-6-tablet
is-half-desktop
is-5-widescreen
is-5-fullhd
">

<div className="column " key={i}>
<div className="box ">
<div className="card-image">

<img src={items.images} alt={items.alt} className="is-fluid fade-in-3  " />

<p className="title is-4 mb-2">{items.title}</p>

</div>

<p className=" mb-2"> My Core responsibilities: {items.myDuty}</p>
<p><strong>Built with: </strong></p>
<p className="subtitle is-6 is-italic ">{items.builtWith}</p>




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
};
export default Portfolio;