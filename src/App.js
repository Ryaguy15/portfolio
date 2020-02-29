import React from 'react';

import {AccountsRow} from './AccountsRow'
import './App.css';
import "uikit/dist/css/uikit.min.css"
import { Project } from './Project';
import techchatIcon from "./techchat.png"
import techCampus from "./michigan-tech-campus.jpg"
import { Course } from './Course';

function App() {
  return (
    <div>
      <header>
        <h2>Hello, I'm <span className="primary-color">Ryan Philipps</span></h2>
        <h1>Software Developer</h1>
        <button className={"button-shadow"}>Resumé</button>
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

      <br/>

      <section id={"project-section"} class={"uk-container"}>
        <h1 class={"uk-heading-line uk-text-center primary-color"}><span>Projects</span></h1>
        
        <div className={"uk-grid-large uk-child-width-expand"} data-uk-grid>
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
      <br/>
      <section id={"education-section"} className="uk-container">
        <h1 class={"uk-heading-line uk-text-center primary-color"}><span>Education</span></h1> 
        <h3 className="uk-text-meta uk-text-center">These are some of my favorite classes from college</h3>
        <div className={"uk-flex"}>
          <div><img src={techCampus} width={600}/></div>
          <div className="uk-flex uk-flex-column">
              <div>
                <Course name={"Software Process and Management"}>
                  <p className={"uk-text-right"}>
                    Learned about Continous Integration
                    and how it improves software reliability and speed. 
                    Put these lesson in to practice by creating a wiki site using TDD and CI processes. 
                    One requirement was to have at least 80% code coverage by our unit tests
                    Also learned how to refactor code by employing common design patterns
                  </p>  
                </Course>
              </div>
              <div>
                <Course name={"Artifical Intelligence"}>
                  <p className={"uk-text-right"}>
                    Created numerous A.I systems using different A.I algorithms.
                    Built a pacman A.I using tree searchs and Preceptrons
                  </p>  
                </Course>
              </div>
          </div>
        </div>
      </section>
      <br/>
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
    </div>
  );
}

export default App;
