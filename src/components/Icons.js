const data = [
      {
        logo: "https://i.imgrz.com/Yjwf.png",
        alt: "HTML5 logo"
     },
      {

        logo: "https://i.imgrz.com/YAlk.png",
        alt: "CSS3 logo"
     },
      {
        logo: "http://i.imgrz.com/YLb5.png",
        alt: "Javascript logo"
    },
    {
        logo: " https://i.imgrz.com/YrnT.png",
        alt: "JQuery logo"
    },
    {
        logo: "https://i.imgrz.com/Y88z.png",
        alt: "MongoDB logo"
    },
    {
        logo: "https://i.imgrz.com/YQud.png",
        alt: "ExpressJS logo"
    },
    {
        logo: "https://i.imgrz.com/YajO.png",
        alt: "HTML5 logo"
    },
    {
        logo: "https://i.imgrz.com/YgIw.png",
        alt: "NPM logo"
    },
    {
        logo: "https://i.imgrz.com/YldS.png",
        alt: "ReactJs logo"
    },
    {
        logo: "https://i.imgrz.com/YpbV.png",
        alt: "Adobe Illustrator logo"
    },
    {
        logo: "https://i.imgrz.com/Y27P.jpg",
        alt: "Photoshop logo"
    },
    {
        logo: "https://i.imgrz.com/RMw0.png",
        alt: "Final Cut Pro logo"
    }

    ];



    function Icons () {




    return (
        <div className="p-1 fade-in-3 text-center">
          {data.map((data) => (
                       <img  src={data.logo} alt={data.alt} height={90} className="p-1" />
          ))}
        </div>
      );

    };

export default Icons;