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

            <div className="icon-holder">

              <span className='html logo tooltip rounded'>
                <span class="tooltiptext">{tooltip_helper("HTML5")}</span>
              </span>

              <span className='css logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("CSS3")}</span>
              </span>

              <span className='agile logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Agile")}</span>
              </span>

              <span className='maven logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Maven")}</span>
              </span>

              <span className='bootstrap logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Bootstarp4")}</span>
              </span>


              <span className='centos logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("CentOS7")}</span>
              </span>

              <span className='ansible logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Ansible")}</span>
              </span>

              <span className='terraform logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("TerraForm")}</span>
              </span>

              <span className='cproj logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("C Programming")}</span>
              </span>

              <span className='json logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("JSON")}</span>
              </span>

              <span className='git logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Git")}</span>
              </span>

              <span className='github logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("GitHub")}</span>
              </span>

              <span className='eclipse logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Eclipse")}</span>
              </span>

              <span className='jwt logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Json Web Token")}</span>
              </span>


              <span className='jupyter logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Jupyter Notebook/Lab")}</span>
              </span>

              <span className='linux logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Linux")}</span>
              </span>

              <span className='mongo logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("MongoDB")}</span>
              </span>

              <span className='mysql logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("MySqlDB")}</span>
              </span>

              <span className='pg logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Postgres")}</span>
              </span>

              <span className='oracle logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Oracle")}</span>
              </span>

              <span className='redux logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Redux")}</span>
              </span>

              <span className='spring-security logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Spring Security")}</span>
              </span>

              <span className='ubuntu logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Ubuntu Focal")}</span>
              </span>
              <span className='windows logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Windows")}</span>
              </span>
              <span className='vscode logo tooltip'>
                <span class="tooltiptext">{tooltip_helper("Visual Studio Code")}</span>
              </span>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Skills;