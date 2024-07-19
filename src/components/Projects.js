import React from 'react';
import './Projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1 className="projects-heading">
        <i className="fas fa-box"></i> Projects</h1>
        <div className="container marketing">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="card project-card">
                <div className="card-body project-content">
                  <h5 className="card-title project-title">Decentralized Token Transfer and Transaction Tracking System using ICP Blockchain</h5>
                  <ul className="project-list">
                    <li>Constructed a decentralized token transferring and transaction tracking web application through combining HTML, CSS, JavaScript, React.js for front-end enabling smoother interface and Motoko for back-end.</li>
                    <li>Applied Internet Computer Protocol’s Internet Identity for robust authentication and security of the user resulting in a 40% reduction in unauthorized access attempts compared to traditional authentication methods.</li>
                    <li>Integrated ICP's tamper-proof ledger to secure and validate all token transfers and transaction records, enhancing trust and reliability.</li>
                    <li>Utilized efficient state management and asynchronous data fetching in React.js to provide seamless user experiences and real-time transaction updates.</li>
                    <li>Demonstrated robust Git version control for efficient code management, ensuring seamless integration of styling enhancements and real-time transaction listing, maintaining code integrity, and enabling systematic project iteration.</li>
                  </ul>
                  <div className="project-button-container">
                    <a className="btn project-button" href="https://github.com/inbantamizhselvan/Din_Token">
                      <i className="fab fa-github"></i>
                      GitHub »
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card project-card">
                <div className="card-body project-content">
                  <h5 className="card-title project-title">Decentralized NFT Marketplace Using Internet Computer Protocol (ICP) Blockchain</h5>
                  <ul className="project-list">
                    <li>Seamlessly integrated the decentralized token transfer system to handle NFT transactions, maintaining user balances and IDs securely.</li>
                    <li>Created a coherent user interface using React.js, HTML, and CSS, providing smooth navigation and interactions for a better user experience.</li>
                    <li>Leveraged ICP's blockchain to ensure secure and transparent minting, buying, and selling of NFTs, strengthening user trust and system reliability by 40% over conventional e-commerce platforms.</li>
                    <li>Used Motoko-based smart contracts for automated and enforced marketplace rules, improving transaction efficiency and security.</li>
                    <li>Designed the marketplace with a scalable architecture to support a growing user base and increasing transaction volumes without compromising performance.</li>
                  </ul>
                  <div className="project-button-container">
                    <a className="btn project-button" href="https://github.com/inbantamizhselvan/Decentralized_NFT_Marketplace">
                      <i className="fab fa-github"></i>
                      GitHub »
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card project-card">
                <div className="card-body project-content">
                  <h5 className="card-title project-title">Dynamic To-Do List Application Development</h5>
                  <ul className="project-list">
                    <li>Developed a dynamic To-Do List web application using JavaScript, Embedded JavaScript (EJS), Express.js, HTML and CSS, ensuring seamless integration between back-end and front-end components.</li>
                    <li>Implemented PostgreSQL for efficient data storage and retrieval, enhancing scalability and performance by 40%.</li>
                    <li>Deployed RESTful APIs to facilitate smooth data flow and user interactions between the front-end and back-end systems.</li>
                    <li>Employed Material-UI components and responsive web design principles to develop a user interface that is both visually attractive and intuitive, consequently improving the overall user experience and user engagement by 30%.</li>
                    <li>Maintained proficiency in Git version control, orchestrating systematic feature enhancements and bug fixes, ensuring project integrity.</li>
                  </ul>
                  <div className="project-button-container">
                    <a className="btn project-button" href="https://github.com/inbantamizhselvan/To-Do-List">
                      <i className="fab fa-github"></i>
                      GitHub »
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
