import { Fragment, useState } from 'react';
import Header from './components/header';
import Message from './components/message';
import Hello from './components/hello';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Charlie from './components/charlie';
import Conscience from './components/conscience';
import './css/style.css';

function App() {

  const [messages, setMessages] = useState([]);

  const publishMessage = (order, answer) => {
    const userMessage = {
      who: 'user',
      content: <p>{order}</p>,
      key: Math.random()*100+1,
    }
    const botMessage = {
      who: 'bot',
      content: <Fragment>
                {answer}
              </Fragment>,
      key: Math.random()*100+1,
    }
    messages.push(userMessage, botMessage);
    setMessages([...messages]);
    window.scrollTo(0, document.body.scrollHeight);
  }

  
  const about = () => {
    publishMessage(
      'Ok Charlie, tell me more about your creator', 
      <About contact={contact} projects={projects}/>, //pass options/menu as props
    )
  }
  const projects = () => {
    publishMessage(
      'Ok Charlie, show me the projects of Fernando', 
      <Portfolio contact={contact} about={about}/>,
    )
  }
  const contact = () => {
    publishMessage(
      'I want to get in touch with the Fernando', 
      <Contact about={about} projects={projects}/>,
    )
  }
  const bot = () => {
    publishMessage(
      "Charlie? I'm talking with a robot?", 
      <Charlie about={about} conscience={conscience} projects={projects} contact={contact}/>,
    )
  }
  const conscience = () => {
    publishMessage(
      "Do you have a conscience? Feelings? Want to kill humans?", 
      <Conscience about={about} projects={projects} contact={contact}/>,
    )
  }

  return (
    <div className="App">
      <Header/>
      <section id='message-box'>

        {/*First message renders without the map, for a faster initial load*/}
        <Hello about={about} bot={bot} projects={projects} contact={contact}/>
        
        {messages.map(i => (
          <Message key={i.key} who={i.who} content={i.content}/>
        ))}

      </section>
    </div>
  );
}

export default App;
