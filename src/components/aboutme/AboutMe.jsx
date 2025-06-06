import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id="about" className="aboutme-box">
        <div className="aboutme-title-box">
          <h2><u><i><b>About Me</b></i></u></h2>
        </div>
        <div className = "aboutme-grid">
        <div className="timeline-entry">
          <h4>Hobbies</h4>
          <ul>
            <li>Chess</li>
            <li>Computer programming</li>
            <li>Meditation</li>
            <li>Gaming</li>
            <li>Eating</li>
            <li>Volunteering</li>
            <li>Science and technology studies</li>
          </ul>
        </div>
        
          <div className="timeline-entry">
            <h4>Favorite Cars</h4>
            <p>I love insane cars because they are insane—that's what makes them interesting.</p>
          </div>
          <div className="timeline-entry">
            <h4>Favorite Games</h4>
            <ul>
              <li>PUBG</li>
              <li>Ace Combat</li>
              <li>Aliens Colonial Marines</li>
              <li>GTA</li>
              <li>Super Mecha Champions</li>
            </ul>
          </div>
          <div className="timeline-entry">
            <h4>Favorite Music</h4>
            <p>
              Nightcore & GMV: <a href="https://www.youtube.com/watch?v=oTUZRT-Zzt0">click here</a><br />
              Zhakata: <a href="https://www.youtube.com/watch?v=w1AfxNwjz-o">click here</a><br />
              NF Music: <a href="https://www.youtube.com/watch?v=aqrr3Dj_Jn8">click here</a>
            </p>
          </div>
        </div>
    </section>
  );
}