import React from 'react';
import "../styles/Skills.css";


const tooltip_helper = text => (
  `${text} (click for more info)`
)

function Skills() {
  return (
    <>
      {/* skills section */}
      <div className="skills">

        {/* <h1>Skills</h1> */}
        <div className='container'>

          {/* container left */}
          <div className='top-expertise-left'>
            <h4>Top Expertise</h4>
            <div className="icon-holder">

              <span className='java logo tooltip'>
                <span className='tooltiptext'>{tooltip_helper("Java NPTEL")}</span>
              </span>

              <span className='spring logo tooltip rounded'>
                <span className='tooltiptext'>{tooltip_helper("SpringBoot")}</span>
              </span>

              <span className='react logo tooltip rounded'>
                <span className='tooltiptext'>{tooltip_helper("React-Redux")}</span>
              </span>

              <span className='aws-clfc01 logo tooltip rounded'>
                <span class="tooltiptext">{tooltip_helper("AWS Certified Cloud Practationer clf-c01")}</span>
              </span>

              <span className='docker logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Docker")}</span>
              </span>

              <span className='ansible logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Ansible")}</span>
              </span>

              <span className='terraform logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("TerraForm")}</span>
              </span>

              <span className='python logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Python")}</span>
              </span>

              <span className='javascript logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Javascript")}</span>
              </span>

            </div>
          </div>

          {/* container right */}
          <div className='more-skills-right'>
            <h4>More Skills</h4>
          </div>

        </div>
      </div>
    </>
  );
}

export default Skills;