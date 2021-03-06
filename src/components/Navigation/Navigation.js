import React, { useState } from 'react';
import "./Navigation.css";
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-scroll";



function Navigation() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="navigation">
            <div className="navigation__left">
                <div className="navigation__links" id={showLinks ? "hidden" : ""}>
                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={1}
                        hover="pointer"
                    >
                        About Me
                    </Link>
                    <Link activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={1}
                    >
                        Skills
                    </Link>
                    <Link activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={1}
                    >
                        Projects
                    </Link>
                    <Link activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={1}
                    >
                        Contact
                    </Link>
                    {/* <a href="/">About Me</a>
                    <a href="/">Skills</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact Me</a> */}
                </div>
                <IconButton onClick={() => setShowLinks(!showLinks)}> <MenuIcon /> </IconButton>
            </div>

            <div className="navigation__right">
                <div className="navigation__socials">
                    <IconButton target="_blank" href="https://www.linkedin.com/in/justin-suderman-a411471a6/">
                        <LinkedInIcon
                            fontSize="large"
                            color="primary"
                        />
                    </IconButton>

                    <IconButton target="_blank" href="https://github.com/jsuderman">
                        <GitHubIcon
                            fontSize="large"
                            color="primary"
                            
                        />
                    </IconButton>

                    <IconButton>
                        <EmailIcon
                            fontSize="large"
                            color="primary"
                        />
                    </IconButton>


                </div>
            </div>




        </div>
    )
}

export default Navigation
