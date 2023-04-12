import Item from "./portfolio-item.js";
import { useState } from "react";

function Portfolio() {

  let [project, setProject] = useState(0);

  const projects = [
    {name: "Landing Page for ClassPlay startup",
    image: "../images/classplay.webp",
    link: "https://classplay.netlify.app/"},
    {name: "Website for Digital Marketing Agency that sends form to API",
    image: "../images/apo.webp",
    link: "https://agenciapresencaonline.com.br"},
    {name: "Institutional website for the ONG Florescer",
    image: "../images/florescer.webp",
    link: "https://florescerjf.netlify.app/"},
    {name: "Webapp that uses an API to check the Weather",
    image: "../images/weather.webp",
    link: "https://checkingtheweather.netlify.app/"},
    {name: "ReactJs MemoryGame made for Fernando's little sister-in-law",
    image: "../images/memorygame.webp",
    link: "https://forestmemorygame.netlify.app/"}
  ]

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
    <div className="portfolio">
        <h2>Projects</h2>
        <p>🤖 This are some of the projects my master made. He likes to create amazing user experiences with minimalist design</p>

        <div className="carrousel">
          <div className="arrow-div arrow1" onClick={lastProject}>
            <span>{`<`}</span>
          </div>
          <Item name={projects[project].name} image={projects[project].image} link={projects[project].link} id={project+1} total={projects.length}/>
          <div className="arrow-div arrow2" onClick={nextProject}>
            <span>{`>`}</span>
          </div>
        </div>

    </div>
  );
};

export default Portfolio;