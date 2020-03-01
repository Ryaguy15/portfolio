import React from 'react';

import {AccountsRow} from './AccountsRow'
import './App.css';
import "uikit/dist/css/uikit.min.css"
import { Project } from './Project';
import techchatIcon from "./techchat.png"
import techCampus from "./michigan-tech-campus.jpg"
import { Course } from './Course';
import path2 from './Path2.svg'

function App() {
  return (
    <div>
      <header id={"landing"}>
        <h2>Hello, I'm <span className="primary-color">Ryan Philipps</span></h2>
        <h1>Software Developer</h1>
        <button className={"button-shadow"}>Resumé</button>
        <div id={"transition"}>
          <img src={path2} alt={"transition shape to main content"}/>
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
             image={techchatIcon}/>
           </div>
           <div>
            <Project title="DevRamblings" description={"A blogging website with advance blog creator"}/>
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
                    Learned about Continous Integration
                    and how it improves software reliability and speed. 
                    Put these lessons in to practice by creating a wiki website using TDD and Travis CI processes. 
                    One requirement was to have at least 80% code coverage by our RSpec unit tests.
                    The class also explored how to refactor code by employing common design patterns
                  </p>  
                </Course>
                <Course name={"Artifical Intelligence"}>
                  <p className={"uk-text-center"}>
                    Created numerous A.I systems using different A.I algorithms.
                    Built a pacman A.I using tree searches and Preceptrons
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
    </div>
  );
}

export default App;
