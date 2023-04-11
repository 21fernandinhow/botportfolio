import React from "react";

function Contact() {
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
    </div>
  );
};

export default Contact;