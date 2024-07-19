import React, { useEffect } from 'react';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about');
      const heading = document.querySelector('.about h1');
      const paragraph = document.querySelector('.about p');
      const aboutTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (aboutTop < windowHeight) {
        heading.classList.add('animate');
        paragraph.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <p>
          I am Inban Tamizhselvan, currently pursuing Master of Science in Computer and Information Science at the University of Massachusetts Dartmouth. I have previously obtained a Bachelor's degree in Computer Science from Rajalakshmi Engineering College in India. My passion is pushing the limits of technology, especially in blockchain and web development. Recently, I've concentrated on decentralized systems, creating projects such as a token transfer application and an NFT marketplace on the Internet Computer Protocol (ICP) Blockchain. These initiatives not only helped me improve my technical abilities, but also highlighted blockchain's ability to change digital transactions and ownership, increasing security and user confidence by 40%. My expertise includes full-stack web development, where I've created dynamic apps with contemporary stacks such as JavaScript, React, and Node.js. One of my recent projects, a To-Do List application, boosted user engagement by 30% through seamless integration of back-end and front-end components. I'm proficient in a wide range of technologies, including HTML5, CSS3, Bootstrap 5, JavaScript ES6, React.js, jQuery for front-end development, and Express.js, Node.js, EJS, RESTful APIs for back-end development. My programming skills span Python (Django), Java, C, C++, and PHP, and I'm experienced with databases like PostgreSQL, MongoDB, and MySQL. In addition to coding, I appreciate excellent communication and cooperation. As a leader of the University of Massachusetts Dartmouth's international student orientation program, I've developed my capacity to collaborate with a variety of teams and ease the transitions of newcomers. Whether it's designing user-friendly online apps, researching the newest developments in cloud computing, or constructing safe blockchain solutions, I'm always excited to learn and contribute to creative initiatives. I'm prepared to get started and have an effect, using my knowledge of AWS, Git version control, and the whole software development lifecycle to advance technology.
        </p>
        <h1> About Me <i class="fas fa-user-tie"></i></h1>
      </div>
    </section>
  );
}

export default About;
