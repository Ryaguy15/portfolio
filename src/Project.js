import React from 'react';

import 'uikit/dist/js/uikit.min.js'


export function Project(props) {
    return (
        <div class="uk-card uk-card-default uk-card-hover card">
            <div class="uk-card-header">
                <h3 class="uk-card-title uk-text-center">{props.title}</h3>
            </div>
            <div className="uk-card-body">
                <img src={props.image} className={'uk-align-center'} alt={"Image of " + props.title}/>
                <p className={'uk-text-center'}>{props.description}</p>
            </div>
            <div className={"uk-card-footer"}>
                <a href={props.code} class="uk-button uk-button-text uk-align-center primary-color"><span className={'color-primary'}>See The Code</span></a>
            </div>
        </div>
    ) 
}