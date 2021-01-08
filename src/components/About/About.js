import React from 'react';
import Self from "../../IMG_1772.png";
import "./About.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="about__info">
                <h2>Justin Suderman</h2>
                <p>I am a San Jose based Full Stack Software Developer</p>
            </div>
            <div className="about__picture">
                <img 
                src={Self}
                alt="self"
                />

            </div>
        </div>
    )
}

export default About
