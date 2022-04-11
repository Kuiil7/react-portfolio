

  export const APIData = [


    {
       id: 0,
          title: "MyWeather",
          images:( process.env.PUBLIC_URL +  "../images/repos/myweather_ss.png"),
          alt: "weather dashboard",
          repo: "https://github.com/Kuiil7/myweather" ,
          demo:"https://my-weather-one.vercel.app/",
          description:"User can find local temperature via browser's geolocation function and, also, do query search across U.S. cities.",
          myDuty:"Sole maintainer.",
          builtWith:"Bulma, Axios, Moments, Geolocation, and dotenv.",
          url:"https://openweathermap.org/",
          status: "Completed"
        },
        {
          id: 1,
          title: "MyMovies",
          images: ( process.env.PUBLIC_URL + "../images/repos/mymovies_ss.png"),
          alt: "screenshot of mymovies app",
          repo: "https://github.com/Kuiil7/mymovies" ,
          demo:"https://mymovies-five.vercel.app/",
          description: "A website where user can search and find movies, TV shows, and actors along with trending, popularity, and other categories",
          myDuty: "Sole maintainer.",
          builtWith: "Luxon, Axios, dotenv, Material-UI, and Bulma.",
          url:"https://www.themoviedb.org/",
          status: "Ongoing (pagination stage)"

        },
        {
          id: 2,
            title: "MyNews",
            images:( process.env.PUBLIC_URL +  "../images/repos/mynews.png"),
            alt: "screenshot of app",
            demo:"",
            description: "Search and find U.S. news sources. Includes Top Headlines Health, Entertainment, Sports, Science, and Technology on load.",
            myDuty:"Sole maintainer",
            builtWith: "Bulma, FontAwesome, Luxon, dotenv, and Express.",
            url:"https://newsapi.org/",
            status: "Ongoing (deployment stage)"
          },



  ];

