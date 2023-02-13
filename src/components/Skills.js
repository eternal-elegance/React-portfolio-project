import React from 'react';
import "../styles/Skills.css";

function Skills() {
  return (
    <>
      {/* skills section */}
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Skills;