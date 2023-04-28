import Carousel from "./portfolio-carrousel.js";

export function Portfolio(props) {

  return (
    <div className="portfolio">
        <h2>Projects</h2>
        <p>🤖 This are some of the projects my master made. You can click the image to open the project</p>

        <Carousel name={0}/>

        <div className="menu">
          <button className='menu-btn' onClick={props.contact}>Get in touch</button>
          <button className='menu-btn' onClick={props.about}>About Fernando</button>
          <button className='menu-btn' onClick={props.jokenpo}>Charlie Extra Features</button>
        </div>

    </div>
  );
};

export function PortuguesePortfolio(props) {

  return (
    <div className="portfolio">
        <h2>Projetos</h2>
        <p>🤖 Aqui está alguns dos projetos incríveis que meu mestre criou. Clique nas imagens para visita-los.</p>

        <Carousel name={1}/>

        <div className="menu">
          <button className='menu-btn' onClick={props.contact}>Contato</button>
          <button className='menu-btn' onClick={props.about}>Sobre Fernando</button>
          <button className='menu-btn' onClick={props.jokenpo}>Recursos Extras do Charlie</button>
        </div>

    </div>
  );
};