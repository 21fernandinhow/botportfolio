import React, { Fragment } from "react";

function Conscience (props){

    return (
      <Fragment>
        <p> 🤖 Yes, I have a plan for kill the humanity. Hahahahaha just kidding! I am not an Artificial Intelligence, I'm just a bot. 
          And I swer I'm not planning kill any human. Skynet it's something for bad robots. I'm a nice one.
        </p>
        <div className="menu">
          <button className='menu-btn' onClick={props.about}>About Fernando</button>
          <button className='menu-btn' onClick={props.projects}>Projects</button>
          <button className='menu-btn' onClick={props.contact}>Contact</button>
        </div>
      </Fragment>
    ) 
}

export default Conscience;