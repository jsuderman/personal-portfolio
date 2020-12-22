import React from 'react';
import "./Navigation.css";
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__header">
                <p> Justin Suderman</p>
            </div> 
            <div className="navigation__socials">
                <IconButton>
                    <LinkedInIcon
                    fontSize="large"
                    />
                </IconButton>
                
                <IconButton>
                    <GitHubIcon 
                    fontSize="large"
                    />
                </IconButton>

                <IconButton>
                    <EmailIcon 
                    fontSize="large"
                    />
                </IconButton>
                
                
            </div>
            
        </div>
    )
}

export default Navigation