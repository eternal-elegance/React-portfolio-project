import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
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
        <p>DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
      </div>
    </div >
  );
}

export default ProjectItem;
