import React from 'react';
import "./Header.css";
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';



function Header() {
    return (
        <div className="header" id="home">
            <div className="header__info">
                <h1>Justin Suderman</h1>
                <p>
                    I'M A SUNNYVALE BASED FULL STACK WEB DEVELOPER. I AM LOOKING FOR A FULL TIME CAREER WHERE I CAN IMPLEMENT THE SKILLS THAT I HAVE ACQUIRED. INTERESTED IN WORKING WITH A GREAT TEAM WHERE I CAN CONTINUE TO LEARN AND GROW. SKILLS INCLUDE HTML5, CSS3, JAVASCRIPT, JQUERY, BOOTSTRAP, REACT.JS, NODE.JS, C#, .NET, DATABASE THEORY, MONGODB, MYSQL, COMMAND LINE, AND GIT.
                </p>
                <div className="header__links">
                    <IconButton target="_blank" href="https://www.linkedin.com/in/justin-suderman-a411471a6/">
                        <LinkedInIcon
                            fontSize="large"
                        
                        />
                    </IconButton>

                    <IconButton target="_blank" href="https://github.com/jsuderman">
                        <GitHubIcon
                            fontSize="large"
                            color="white"

                        />
                    </IconButton>

                    <IconButton target="_blank" >
                        <EmailIcon
                            fontSize="large"
                            color="white"
                        />
                    </IconButton>
                </div>

            </div>





        </div>
    )
}

export default Header
