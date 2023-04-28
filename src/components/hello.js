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
        <p> 🤖 My name is Charlie, a simple bot created by Fernando to guide you on his portfolio. Talk with me using the buttons: </p>
        <div className="menu">
          <button className='menu-btn' onClick={props.about}>About Fernando</button>
          <button className='menu-btn' onClick={props.bot}>Charlie? A Bot?</button>
          <button className='menu-btn' onClick={props.projects}>Projects</button>
          <button className='menu-btn' onClick={props.contact}>Contact</button>
        </div>
      </Fragment>
    }
    portugueseContent={
      <Fragment>
        <h2> Olá! Eu não sou Fernando Carvalho.</h2>
        <p> 🤖 Meu nome é Charlie, um simples Bot criado pelo Fernando para te guiar em seu portfolio.
          Converse comigo usando os botões: </p>
        <div className="menu">
          <button className='menu-btn' onClick={props.about}>Sobre Fernando</button>
          <button className='menu-btn' onClick={props.bot}>Charlie? Um bot?</button>
          <button className='menu-btn' onClick={props.projects}>Projetos</button>
          <button className='menu-btn' onClick={props.contact}>Contato</button>
        </div>
      </Fragment>
    }
    language={props.language}/>
  ) 
}

export default Hello;