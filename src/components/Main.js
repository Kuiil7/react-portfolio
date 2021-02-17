import React from "react";
import '../index.css'
import JAM_resume from "../docs/JAM_resume.docx"

function Main () {
  return (
    <div  >

<div className="main1 container"   style={
             {

              color: "white",
              }
            }>

  <div className="row-reverse text-center text-white">
    <div className="col-sm">
      <img alt="jose's profile" className="border p-2 border-white rounded-circle img-fluid fade-in" src={("https://i.imgrz.com/vb6h.jpg")} />
    </div>
    <div className="col-sm ">
    <h3 style={{marginTop:"20px"}}>
    Jose Aguilera Merino, Full Stack Developer
      </h3>
      <a href="mailto:jgamerino@gmail.com" id="email" className="text-white">
        <p >
        jgamerino@gmail.com
          </p>
          </a>
     <p>
     <i className="fa text-danger fa-map-pin text-white"></i> San Diego, CA
     </p>
    </div>

    <div className="row fade-in-2 ">
    <div className="col-sm ">
    <a className="btn " href="https://github.com/Kuiil7" >
    <i className="fa fa-github fa-3x text-white" aria-hidden="true"></i>
      </a>


    </div>
    <div className="col-sm  ">
    <a className="btn    " href="https://www.linkedin.com/in/joey-aguilera-merino-8298b6193/">
    <i className="fa fa-linkedin-square fa-3x text-white" aria-hidden="true"></i>
     </a>
    </div>
    <div className="col-sm">

<a href={JAM_resume} target="_blank" rel="noopener noreferrer" download>

<i className="fa fa-file-o fa-3x text-white"  aria-hidden="true"></i>


</a>


</div>
  </div>


</div>

    </div>
</div>

  );
}

export default Main;