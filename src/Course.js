import React from 'react';


export function Course(props) {
    let cardClasses ="uk-card uk-card-default uk-card-body uk-card-small card";
    cardClasses = (props.top === undefined) ? cardClasses.concat(" uk-margin-top"): cardClasses; 
    return (
        <div className={cardClasses}>
            <h3 class="uk-card-title uk-text-center">{props.name}</h3>
            {props.children}
        </div>
    )
}