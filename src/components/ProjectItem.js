import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, desc }) {
  const navigate = useNavigate();
  return (
    // <div
    //   className="projectItem"
    //   onClick={() => {
    //     navigate("/project/" + id);
    //   }}
    // >
    //   <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
    //   <h1> {name} </h1>
    // </div>

    <div className="card"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      {/* image div */}
      < div className="image" >
        <img href="#" src={image} />
      </div >

      <div className="content">
        <h3>{name}</h3>
        <hr />
        <p>{desc}</p>
      </div>
    </div >
  );
}

export default ProjectItem;
