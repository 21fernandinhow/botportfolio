import { React, useState } from "react";

const projects = [
  {description: "Recruitment Page for Codi Academy enterprise",
  translation: "Página de recrutamento da Codi Academy",
  image: "../images/codi.webp",
  link: "https://coditrainee.netlify.app/"},
  {description: "Institutional website for the ONG Florescer",
  translation: "Site Institucional da ONG Florescer",
  image: "../images/florescer.webp",
  link: "https://florescerjf.netlify.app/"},
  {description: "Webapp that uses an API to convert Crypto",
  translation: "Webapp que usa uma API para converter criptomoedas",
  image: "../images/cryptoconverter.webp",
  link: "https://welcometocryptoconverter.netlify.app/"},
  {description: "ReactJs MemoryGame made for Fernando's little sister-in-law",
  translation: "Jogo da memória em ReactJs feita para cunhada de 5 anos",
  image: "../images/memorygame.webp",
  link: "https://forestmemorygame.netlify.app/"},
  {description: "It automatic counts how many days left to next world cup",
  translation: "Site que conta automaticamente quanto falta pra copa",
  image: "../images/worldcup.webp",
  link: "https://quantofaltapracopa.netlify.app/"}
]

function Carousel (props) {

  let [project, setProject] = useState(0);
  let showDescription = '';
  
  if(props.name===1){
    showDescription = projects[project].translation;
  } else{
    showDescription = projects[project].description;
  };
  
  const nextProject = () => {
    if(project < projects.length-1 ){
      setProject(project=project+1);
    } else {
      setProject(0);
    };
  }
  const lastProject = () => {
    if(project !== 0 ){
      setProject(project=project-1);
    } else if (project === 0){
      setProject(project=projects.length-1);
    };
  }

  return (

    <div className="carrousel">

      <div className="arrow-div arrow1">
        <span onClick={lastProject}>{`<`}</span>
      </div>

      <div className="portfolio-div">
        <a href={projects[project].link} target="_blank" rel="noopener noreferrer">
          <img className="portfolio-img" alt="website" src={projects[project].image}/>
        </a>    
        <p className="portfolio-name"> {project+1}/{projects.length} - {showDescription} </p>
      </div>

      <div className="arrow-div arrow2">
        <span onClick={nextProject}>{`>`}</span>
      </div>

    </div>
    
  );
};

export default Carousel;