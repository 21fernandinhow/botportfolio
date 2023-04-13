import React, { Fragment } from "react";

function Charlie (props){

    return (
      <Fragment>
        <p> 🤖 Yes, I am a robot! My master Fernando is a big fan of my famous cousin, chatGPT, and created me to show you his portfolio.
          One curiosity about me: my favourite music is "Rap God", from Eminem. I think very fast but Eminem is unbelievable! Oops... this is not the subject.
          Let's talk about Fernando.
        </p>
        <div className="menu">
          <button className='menu-btn' onClick={props.about}>About Fernando</button>
          <button className='menu-btn' onClick={props.conscience}>Do you have a conscience and want to kill humanity?</button>
          <button className='menu-btn' onClick={props.projects}>Projects</button>
          <button className='menu-btn' onClick={props.contact}>Contact</button>
        </div>
      </Fragment>
    ) 
}

export default Charlie;