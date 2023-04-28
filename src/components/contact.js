import React from "react";

export function Contact(props) {
  return (
    <div className="contact">
        <h2>Get in touch</h2>
        <p>🤖 Send a message to my master on the form bellow</p>

        <form action="https://formsubmit.co/21fernandinhow@gmail.com" method="POST">

          <input type="text" name="name" id="name" placeholder="Name"/>

          <input type="email" name="email" id="email" placeholder="E-mail"/>

          <textarea id="message" name="message" rows="2" placeholder="Message"/>

          <button type="submit" className="menu-btn">Send Message</button>

        </form>

        <div className='menu'>
          <button className='menu-btn' onClick={props.about}>About Fernando</button>
          <button className='menu-btn' onClick={props.projects}>See Projects</button>
        </div>
    </div>
  );
};

export function PortugueseContact (props) {
  return (
    <div className="contact">
        <h2>Contato</h2>
        <p>🤖 Envie uma mensagem para o meu mestre no formulário abaixo:</p>

        <form action="https://formsubmit.co/21fernandinhow@gmail.com" method="POST">

          <input type="text" name="name" id="name" placeholder="Name"/>

          <input type="email" name="email" id="email" placeholder="E-mail"/>

          <textarea id="message" name="message" rows="2" placeholder="Message"/>

          <button type="submit" className="menu-btn">Enviar</button>

        </form>

        <div className='menu'>
          <button className='menu-btn' onClick={props.about}>Sobre Fernando</button>
          <button className='menu-btn' onClick={props.projects}>Ver Projetos</button>
        </div>
    </div>
  );
};