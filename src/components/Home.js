import React, { useEffect, useState } from 'react';
import profile from '../assets/images/profile.jpg';
import resume from '../assets/resume.pdf';
import './Home.css';

function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);


  const fullText =
    "I am a Computer Science professional currently pursuing a Master of Science in Computer and Information Science at the University of Massachusetts Dartmouth.";

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 26); // Adjust the speed as needed (50ms per character)

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="profile-pic-wrapper">
          <img src={profile} alt="Profile" className="profile-pic" />
        </div>
        <div className="text-wrapper">
          <h1 className="name">Inban Tamizhselvan</h1>
          <div className="typing">
            <p>{text}</p>
          </div>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="download-resume-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
