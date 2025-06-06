import { Link } from 'react-router-dom';
import './Projects.css';
import enigma from '../../assets/images/encryption.jpg';
import web from '../../assets/images/project-02.jpg';
import python from '../../assets/images/project-03.png';
import mql from '../../assets/images/project-06.webp';
import other from '../../assets/images/project-07.png';

export default function Projects() {
  return (
    <section id="projects" className="project-box">
      <div className="project-a1">
          <div className="project-title-box">
            <h2><u>Projects</u></h2>
            <p>
              Since high school in 2015, I have been deeply immersed in computer science... (trimmed for brevity)
            </p>
          </div>
          <div className="project-grid">
            <Link to="/procurement" className="project" tabIndex={0}>
              <h2>1 - Procurement</h2>
              <img src={enigma} alt="Enigma" className="project-img" />
              <p>Encryption and decryption simulation project using Java.</p>
            </Link>

            <Link to="/websites" className="project" tabIndex={0}>
              <h2>2 - Websites</h2>
              <img src={web} alt="Web Projects" className="project-img" />
              <p>Front-end and full-stack web applications built with React and Flask.</p>
            </Link>

            <Link to="/python-projects" className="project" tabIndex={0}>
              <h2>3 - Python Projects</h2>
              <img src={python} alt="Python Projects" className="project-img" />
              <p>Automation, image processing, and game projects using Python.</p>
            </Link>

            <Link to="/mql5-trading" className="project" tabIndex={0}>
              <h2>4 - MQL5 Trading</h2>
              <img src={mql} alt="MQL Projects" className="project-img" />
              <p>Trading bots and signal systems using MetaQuotes Language 5.</p>
            </Link>

            <Link to="/other-projects" className="project" tabIndex={0}>
              <h2>5 - Other</h2>
              <img src={other} alt="Other Projects" className="project-img" />
              <p>Mini projects built in C, JavaScript, and more.</p>
            </Link>
          </div>
      </div>
    </section>
  );
}