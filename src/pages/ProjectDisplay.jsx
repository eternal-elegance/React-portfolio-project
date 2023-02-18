import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import Carousel from "../components/Carousel";
import videojs from 'video.js'

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  let player = undefined;
  const projectDiv = document.getElementsByClassName("project");
  return (
    <div className="project">
      <h1> {project.name}</h1>
      {
        project.images.length > 1 ?
          <Carousel key={project.id} images={project.images} captions={["hello"] * project.images.length} /> : <img src={project.images[0]} />
      }
      {
        project.video != undefined ?
          (<div className="video-div">
            <h3>Demo</h3>
            <video
              id="my-player"
              className="video-js"
              controls
              preload="auto"
              poster={project.images[0]}
              data-setup='{}'>
              <source src={project.video} type="video/mp4"></source>
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">
                  supports HTML5 video
                </a>
              </p>
            </video>
          </div>)
          : undefined
      }

      <p className="skills-i">
        {
          project.skills.map(skill => {
            return <span className="skill-tag">{skill}</span>
          })
        }
      </p>
      <a href={"#"} target={"_blank"}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
