import React, { Fragment } from "react";

export function Charlie (props){

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

export function PortugueseCharlie(props){
  return (
    <Fragment>
      <p> 🤖 Sim, eu sou um robô! Meu mestre Fernando é um grande fã do meu primo famoso, o ChatGPT, e me criou para mostrar o seu portfólio.
        Uma curiosidade sobre mim: minha musica favorita é "Rap God", do Eminem. Eu penso muito rápido, mas o Eminem é incrivel! Oops... fugi do assunto.
        Vamos falar sobre o Fernando.
      </p>
      <div className="menu">
        <button className='menu-btn' onClick={props.about}>Sobre o Fernando</button>
        <button className='menu-btn' onClick={props.conscience}>Você tem consciência própria e planeja exterminar a humanidade?</button>
        <button className='menu-btn' onClick={props.projects}>Projetos</button>
        <button className='menu-btn' onClick={props.contact}>Contato</button>
      </div>
    </Fragment>
  ) 
}