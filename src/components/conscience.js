import React, { Fragment } from "react";

export function Conscience (props){

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

export function PortugueseConscience (props){

  return (
    <Fragment>
      <p> 🤖 Sim, eu tenho um plano para erradicar a humanidade. Hahahahaha é brincadeira. Eu não sou uma inteligencia artificial,
        sou apenas um bot. E juro que não estou planejando matar ou escravizar nenhum humano. Skynet é coisa de robô mal. Eu sou um dos bonzinhos.
      </p>
      <div className="menu">
        <button className='menu-btn' onClick={props.about}>Sobre Fernando</button>
        <button className='menu-btn' onClick={props.projects}>Projetos</button>
        <button className='menu-btn' onClick={props.contact}>Contato</button>
      </div>
    </Fragment>
  ) 
}