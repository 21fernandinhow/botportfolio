import React from "react";

function About (props){

    return (
        <div>
            
            <h3>About Fernando</h3>
            <p> 🤖 My master is a very creative Front End Developer from Brazil with a 
            long enterpreunership story: he's already made business websites, landing pages and 
            even an startup. So, Fernando is used to solving problems, and ready to solve yours.</p>
            <h4>Skills:</h4>

            <div className="skills">
                <p>ReactJs</p>
                <p>Javascript</p>
                <p>Styled Components</p>
                <p>SCSS/Sass</p>
                <p>CSS</p>
                <p>Bootstrap</p>
                <p>HTML</p>
                <p>Git / Github</p>
            </div>

            <div className="menu">
                <button className='menu-btn' onClick={props.contact}>Get in touch</button>
                <button className='menu-btn' onClick={props.projects}>See Projects</button>
            </div>

        </div>
    ) 
}

export default About;