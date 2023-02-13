import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import TypeWriter from 'react-typewriter';
import Skills from "../components/Skills";


function Home() {
  return (
    <div className="home">

      {/* background animation */}
      <div className="context">
        <TypeWriter typing={1} maxDelay={120} minDelay={40} onTypingEnd={() => { }}>
          <h2>Hi, My Name is <span>Anurag Banerjee</span></h2>
        </TypeWriter>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>


      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

      <Skills />
    </div>
  );
}

export default Home;
