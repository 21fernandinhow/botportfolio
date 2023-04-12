import './css/style.css';
import Header from './components/header';
import Message from './components/message';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Charlie from './components/charlie';
import Conscience from './components/conscience';
import { Fragment, useState } from 'react';

function App() {

  const publishMessage = (order, newMessage) => {
    messages.push(order, newMessage);
    setMessages([...messages]);
    window.scrollTo(0, document.body.scrollHeight);
  }

  const about = () => {
    const order = {
      who: 'user',
      content: <p>Ok Charlie, tell me more about your creator.</p>,
      key: 1
    }
    const newMessage = {
      who: 'bot',
      content: <Fragment>
        <About/>
        <div className='menu'>
          <button className='menu-btn' onClick={contact}>Get in touch</button>
          <button className='menu-btn'onClick={projects}>See Projects</button>
        </div>
      </Fragment>,
      key: 2
    }
    publishMessage(order, newMessage);
  }

  const projects = () => {
    const order = {
      who: 'user',
      content: <p>Ok Charlie, show me the projects of Fernando.</p>,
      key: 3
    }
    const newMessage = {
      who: 'bot',
      content: <Fragment>
        <Portfolio/>
        <div className='menu'>
          <button className='menu-btn' onClick={about}>About Fernando</button>
          <button className='menu-btn' onClick={contact}>Get in touch</button>
        </div>
      </Fragment>,
      key: 4
    }
    publishMessage(order, newMessage);
  }

  const contact = () => {
    const order = {
      who: 'user',
      content: <p>I want to get in touch with the Fernando</p>,
      key: 5
    }
    const newMessage = {
      who: 'bot',
      content: <Fragment>
        <Contact/>
        <div className='menu'>
          <button className='menu-btn' onClick={about}>About Fernando</button>
          <button className='menu-btn' onClick={projects}>See Projects</button>
        </div>
      </Fragment>,
      key: 6
    }
    publishMessage(order, newMessage);
  }

  const bot = () => {
    const order = {
      who: 'user',
      content: <p>Charlie? I'm talking with a robot?</p>,
      key: 7
    }
    const newMessage = {
      who: 'bot',
      content: <Fragment>
        <Charlie/>
        <div className="menu">
          <button className='menu-btn' onClick={about}>About Fernando</button>
          <button className='menu-btn' onClick={conscience}>Do you have a conscience and want to kill humanity?</button>
          <button className='menu-btn' onClick={projects}>Projects</button>
          <button className='menu-btn' onClick={contact}>Contact</button>
        </div>
      </Fragment>,
      key: 8
    }
    publishMessage(order, newMessage);
  }

  const conscience = () => {
    const order = {
      who: 'user',
      content: <p>Do you have a conscience? Feelings? Want to kill humans?</p>,
      key: 9
    }
    const newMessage = {
      who: 'bot',
      content: <Fragment>
        <Conscience/>
        <div className="menu">
          <button className='menu-btn' onClick={about}>About Fernando</button>
          <button className='menu-btn' onClick={projects}>Projects</button>
          <button className='menu-btn' onClick={contact}>Contact</button>
        </div>
      </Fragment>,
      key: 10
    }
    publishMessage(order, newMessage);
  }

  const [messages, setMessages] = useState([]);

  return (
    <div className="App">
      <Header/>
      <section id='message-box'>

        {/*First message renders without the map, for a faster initial load*/}
        <Message 
        key={0}
        who='bot' 
        content={
          <Fragment>
            <h2> Hi! I'm not Fernando Carvalho.</h2>
            <p> 🤖 My name is Charlie, a simple bot created by Fernando to guide you on his portfolio.</p>
            <div className="menu">
              <button className='menu-btn' onClick={about}>About Fernando</button>
              <button className='menu-btn' onClick={bot}>Charlie? A Bot?</button>
              <button className='menu-btn' onClick={projects}>Projects</button>
              <button className='menu-btn' onClick={contact}>Contact</button>
            </div>
          </Fragment>
        }/>
        
        {messages.map(i => (
          <Message key={i.key} who={i.who} content={i.content}/>
        ))}

      </section>
    </div>
  );
}

export default App;
