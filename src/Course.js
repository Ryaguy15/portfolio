import React from 'react';


export function Course(props) {
    return (
        <div class="uk-card uk-card-default uk-card-body uk-card-small uk-width-1-2@m  uk-margin-top card">
            <h3 class="uk-card-title uk-text-right">{props.name}</h3>
            {props.children}
        </div>
    )
}