import React from 'react';

import {AccountsRow} from './AccountsRow'
import './App.css';
import "uikit/dist/css/uikit.min.css"
import { Project } from './Project';
import techchatIcon from "./techchat.png"
import techCampus from "./michigan-tech-campus.jpg"
import { Course } from './Course';
import clouds from "./Clouds.svg"
import resume from './Ryan_Philipps_Resume.pdf'

function App() {
  /*
  <div id={"transition"}>
          <img src={bottom} alt={"transition shape to main content"}/>
        </div>
  */
  return (
    <div>
      <header id={"landing"} className={"uk-align-center"}>
        <div id={"intro-text"}>
          <h2 className={'white-text'}>Hello, I'm <strong>Ryan Philipps</strong></h2>
          <h1 className={"white-text"}>Software Developer</h1>
          <a href={resume} id={'resume-link'}>
            <button className={"button-shadow"} style={{color: "white"}}>
              Resumé
            </button>
          </a>
        </div>
        <div>
          <img src={clouds}/>
        </div>
      </header>

      <section className={"content uk-container"} id={"aboutme-section"}>
        <h1 class="uk-heading-line uk-text-center primary-color"><span>About Me</span></h1>
        <p className={"uk-text-center"}>
          Results-oriented software engineering student with experience developing simulation software and user experience features. 
          A team player with a positive attitude who welcomes challenging projects. 
        </p>
        <AccountsRow/>
        <br/>
      </section>


      <section id={"project-section"} class={"uk-container"}>
        <h1 class={"uk-heading-line uk-text-center primary-color"}><span>Projects</span></h1>
        
        <div className={"uk-child-width-1-2@s uk-child-width-1-2@m"} data-uk-grid>
          <div>
            <Project title={"TechChat"} 
             description={"A forum website/app for Michigan Tech Students"} 
             image={techchatIcon}
             code={"https://github.com/mtuopensource/TechChat"}/>
           </div>
           <div>
            <Project title="DevRamblings" 
              description={"A blogging website with an advance blog creator"}
              code={"https://github.com/Ryaguy15/DevRamblings"}/>
          </div>
        </div>
      </section>
      
      <section id={"education-section"} className="uk-container">
        <h1 class={"uk-heading-line uk-text-center primary-color"}><span>Education</span></h1> 
        <h3 className="uk-text-meta uk-text-center">These are some of my favorite classes from college</h3>
        <div className={"row"}>
          <div className={"column"}><img id={"techImage"} src={techCampus}/></div>
          <div className={"column"}>
                <Course name={"Software Process and Management"} top={true}>
                  <p className={"uk-text-center"}>
                    Learned about Continuous Integration, and how to boost the efficiency and speed of software development.  
                    By using TDD and Travis CI processes, we brought those lessons into action by building a wiki website. 
                    One criterion was for our RSpec unit tests to have at least 80 per cent code coverage. 
                    The class also looked at how to refactor code using common design patterns.
                  </p>  
                </Course>
                <Course name={"Artifical Intelligence"}>
                  <p className={"uk-text-center"}>
                  Numerous A.I systems were built using different A.I algorithms. 
                  Created an A.I pacman using Preceptrons and Tree Searches.
                  </p>  
                </Course>
          </div>
        </div>
      </section>


      <section id={"contactme-section"} className={"uk-container "}>
        <div className={"uk-card uk-card-default uk-card-body uk-card-small card"}>
          <h3 className={'uk-text-lighter uk-text-large uk-text-center'}>Best way to contact me</h3>
          <hr/>
          <a href="mailto:raphilip@mtu.edu" >
            <h1 className={'uk-text-bold uk-text-center'}>
              raphilip<span className={'primary-color'}>@</span>mtu.edu
              </h1>
          </a>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
