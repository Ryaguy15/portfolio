import React from 'react';

import {AccountsRow} from './AccountsRow'
import './App.css';
import "uikit/dist/css/uikit.min.css"
import { Project } from './Project';
import techchatIcon from "./techchat.png"

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
    </div>
  );
}

export default App;
