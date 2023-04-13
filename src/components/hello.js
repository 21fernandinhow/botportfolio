import React, { Fragment } from "react";
import Message from "./message";

function Hello (props){

    return (
        <Message 
        key='0'
        who='bot' 
        content={
          <Fragment>
            <h2> Hi! I'm not Fernando Carvalho.</h2>
            <p> 🤖 My name is Charlie, a simple bot created by Fernando to guide you on his portfolio.</p>
            <div className="menu">
              <button className='menu-btn' onClick={props.about}>About Fernando</button>
              <button className='menu-btn' onClick={props.bot}>Charlie? A Bot?</button>
              <button className='menu-btn' onClick={props.projects}>Projects</button>
              <button className='menu-btn' onClick={props.contact}>Contact</button>
            </div>
          </Fragment>
        }/>
    ) 
}

export default Hello;