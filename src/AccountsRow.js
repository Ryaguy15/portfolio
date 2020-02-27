import React from 'react';
import "uikit/dist/css/uikit.min.css"

import githubIcon from './GitHub-Mark-120px-plus.png'
import linkedInIcon from "./LI-In-Bug.png"

export const AccountsRow = () => {
    return (
        <div class="uk-flex uk-flex-center">
            <a href={"https://github.com/Ryaguy15"} style={{"margin-right": "50px"}} >
                <img src={githubIcon} alt={"github account"} width={48} height={48}/>
            </a>
            <a href={'/'}>
                <img src={linkedInIcon} alt={"LinkedIn account"} width={48} height={48}/>
            </a>
        </div>
    )
}