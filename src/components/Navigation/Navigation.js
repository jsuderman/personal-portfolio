import React, { useState } from 'react';
import "./Navigation.css";
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';



function Navigation() {

        const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="navigation">
            <div className="navigation__left">
                <div className="navigation__links" id={showLinks ? "hidden" : ""}>
                    <a href="/">About Me</a>
                    <a href="/">Skills</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact Me</a>
                </div>
                <IconButton onClick={() => setShowLinks(!showLinks)}> <MenuIcon /> </IconButton>
            </div>

            <div className="navigation__right">
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




        </div>
    )
}

export default Navigation
