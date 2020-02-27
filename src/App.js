import React from 'react';

import {AccountsRow} from './AccountsRow'
import './App.css';
import "uikit/dist/css/uikit.min.css"

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
        <p className={"uk-text-center"}>Put in some information about yourself here!</p>
        <AccountsRow/>
      </section>
      <section id={"project-section"} class={"content uk-container"}>
        <h1 class={"uk-heading-line uk-text-center primary-color"}><span>Projects</span></h1>
      </section>
    </div>
  );
}

export default App;
