import React, { useEffect, useState } from 'react';
import profile from '../assets/images/profile.png'; // Ensure this path is correct
import resume from '../assets/resume.pdf'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/images/image-removebg-preview.png'; // Ensure this path is correct
import './Home.css';

function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const fullText = "I am a Computer Science professional currently pursuing a Master of Science in Computer and Information Science at the University of Massachusetts Dartmouth.";

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
    <section
      id="home"
      className="home"
      style={{
        backgroundImage: `url(${backgroundImage}) rgba(255, 0, 150, 0.3)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        backgroundBlendMode: "multiply"
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0">
            <div className="profile-pic-wrapper">
              <img src={profile} alt="Profile" className="profile-pic img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-8 text-center text-sm-left text-md-left">
            <div className="text-wrapper">
              <h1 className="name">Inban Tamizhselvan</h1>
              <div className="typing">
                <p>{text}</p>
              </div>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="download-resume-btn">
                <i className="fas fa-cloud-download-alt"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
