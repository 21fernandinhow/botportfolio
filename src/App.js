import { Fragment, useState } from 'react';
import Header from './components/header';
import Message from './components/message';
import Hello from './components/hello';
import { About, PortugueseAbout } from './components/about';
import { Portfolio, PortuguesePortfolio } from './components/portfolio';
import { Contact, PortugueseContact } from './components/contact';
import { Charlie, PortugueseCharlie } from './components/charlie';
import { Conscience, PortugueseConscience } from './components/conscience';
import { Jokenpo, PortugueseJokenpo } from './components/jokenpo';
import './css/style.css';

function App() {

  const [messages, setMessages] = useState([]);
  const [language, setLanguage] = useState('en');
  const [translateIcon, setTranslateIcon] = useState('🇧🇷');

  const handleLanguage = () => {
    if (language==='en'){
        setLanguage('pt-br');
        setTranslateIcon('🇺🇲');
    } else {
        setLanguage('en');
        setTranslateIcon('🇧🇷');
    };
  };

  const publishMessage = (order, portugueseOrder, answer, portugueseAnswer) => {    
    const userMessage = {
      who: 'user',
      content: <p>{order}</p>,
      portugueseContent: <p>{portugueseOrder}</p>,
      key: parseInt(Math.random()*1000+1),
    }
    const botMessage = {
      who: 'bot',
      content: <Fragment>
                {answer}
              </Fragment>,
      portugueseContent: <Fragment>
                          {portugueseAnswer}
                        </Fragment>,
      key: parseInt(Math.random()*1000+1),
    }
    messages.push(userMessage, botMessage);
    setMessages([...messages]);
    setTimeout(()=>{
      const scrollPoint = document.querySelector('#scroll-bottom');
      scrollPoint.scrollIntoView();
    })
  }

  //Bot Messages
  const about = () => {
    publishMessage(
      'Ok Charlie, tell me more about your creator', 
      'Ok Charlie, conte-me sobre seu criador', //portuguese option
      <About contact={contact} projects={projects}/>, //pass options/menu as props
      <PortugueseAbout contact={contact} projects={projects}/> //portuguese option
    )
  }
  const projects = () => {
    publishMessage(
      'Ok Charlie, show me the projects of Fernando', 
      'Ok Charlie, me mostre os projetos do Fernando',
      <Portfolio contact={contact} about={about} jokenpo={jokenpo}/>,
      <PortuguesePortfolio contact={contact} about={about} jokenpo={jokenpo}/>,
    )
  }
  const contact = () => {
    publishMessage(
      'I want to get in touch with the Fernando', 
      'Eu quero falar com o Fernando',
      <Contact about={about} projects={projects}/>,
      <PortugueseContact about={about} projects={projects}/>
    )
  }
  const bot = () => {
    publishMessage(
      "Charlie? I'm talking with a robot?",
      "Charlie? Estou falando com um robô?", 
      <Charlie about={about} conscience={conscience} projects={projects} contact={contact}/>,
      <PortugueseCharlie about={about} conscience={conscience} projects={projects} contact={contact}/>,
    )
  }
  const conscience = () => {
    publishMessage(
      "Do you have a conscience? Feelings? Want to kill humans?",
      "Você tem uma consciência? Sentimentos? Planeja eliminar os humanos?",  
      <Conscience about={about} projects={projects} contact={contact}/>,
      <PortugueseConscience about={about} projects={projects} contact={contact}/>
    )
  }
  const jokenpo = () => {
    publishMessage(
      "Do you have another features?",
      "O que mais você sabe fazer?", 
      <Jokenpo about={about} projects={projects} contact={contact}/>,
      <PortugueseJokenpo about={about} projects={projects} contact={contact}/>,
    )
  }

  return (
    <div className="App">
      <Header handleLanguage={handleLanguage} translateIcon={translateIcon}/>
      <section id='message-box'>

        {/*First message renders without the map, for a faster initial load*/}
        <Hello about={about} bot={bot} projects={projects} contact={contact} language={language}/>
        
        {messages.map(i => (
          <Message key={i.key} who={i.who} content={i.content} portugueseContent={i.portugueseContent} language={language}/>
        ))}

      </section>
      <span id="scroll-bottom"></span>
    </div>
  );
}

export default App;
