import React from 'react';
import reactLogo from '../Images/react.png'
import sassLogo from '../Images/sass.png'
import github from '../Images/github.png'
import linkedin from '../Images/linkedin.png'

const About = () => {

    return (
        <div className="about">
            <div className="info-container">
                <div className= "left-info">
                    <h3>Daily Tools is a Web App built with:</h3>
                    <div>
                        <img src={reactLogo} alt="react-logo"/><p>ReactJS</p>
                    </div>
                    <div>
                        <img src={sassLogo} alt="sass-logo"/><p>SASS</p>
                    </div>
                </div>
                <div className= "right-info">
                    <div className="contact-info">
                        <h2>Made by:</h2>
                        <p>Enrique Anaya Marin</p>
                        <p>Located in Madrid, Spain</p>
                        <p>luiseanayam@gmail.com</p>
                        <p>(+34) 654189233</p>
                    
                        <div className="contact-logos">
                            <a href="https://www.linkedin.com/in/enrique-anaya-marin/" target="_blank" rel="noopener noreferrer"><img className="contact-logos" src={linkedin} alt="linkedin-logo"/></a>
                            <a href="https://github.com/kikeanaya" target="_blank" rel="noopener noreferrer"><img className="contact-logos" src={github} alt="github-logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;