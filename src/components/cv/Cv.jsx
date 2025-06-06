import React from 'react';
import { Link } from 'react-router-dom';
import './Cv.css';
import ale1 from '../../assets/images/ale1.jpg';


export default function CV() {
  return (
    <div className="cv-resume">
        <div className="cv-base">
            <div className="cv-profile">
                <div>
                    <a className="cv-photo" href="index.html">
                    <img src= {ale1} alt="Alec Mabhiza Chirawu" />
                    </a>
                </div>
                <div className="cv-info">
                    <h4 className="cv-name">NAME:</h4>
                    <small className="cv-job">Alec Mabhiza Chirawu</small>
                </div>
                </div>

                <div className="cv-about">
                <h3><i className="fa fa-male"></i> MOTTO</h3>
                Together we can make a difference.
                </div>

                <div className="cv-about">
                <h3><i className="fa fa-internet-explorer"></i> My Website</h3>
                captaincheq.github.io
                </div>

                <div className="cv-about">
                <div className="cv-follow">
                    <h3><i className="fa fa-server"></i> ABOUT ME</h3>
                    <div className="box">
                    <p>To know more about me please click the circle below:</p>
                    <a href="index.html#story"><i className="fa fa-circle-o-notch fa-spin"></i></a>
                    </div>
                </div>
                </div>

                <div className="cv-follow">
                <h3><i className="fa fa-cog fa-spin"></i> REFERENCES</h3>
                <div className="box">
                    <p>For more information Contact:</p>
                    <a href="index.html#family"><i className="fa fa-circle-o-notch fa-spin"></i></a>

                    <h4><u><b>CERTIFICATES</b></u></h4>
                    <p>
                    <a href="https://olympus1.mygreatlearning.com/course_certificate/MRCPZJJW" target="_blank" rel="noreferrer">
                        Machine learning
                    </a>
                    </p>

                    <a href="index.html#about"><i className="fa fa-circle-o-notch fa-spin"></i></a>

                    <h4><u>WORKING EXPERIENCE</u></h4>
                    <p>I have helped countable number of Companies. Click the circle below for more information:</p>
                    <a href="error_page.html#events"><i className="fa fa-circle-o-notch fa-spin"></i></a>

                    <h4><u>MY THESIS PROJECT</u></h4>
                    <p>Different kinds of projects in Python.</p>
                    <a href="error_page.html"><i className="fa fa-circle-o-notch fa-spin"></i></a>
                </div>
                </div>

                <div className="cv-contact">
                <h3><i className="fa fa-compress"></i> Contact</h3>
                <div className="call">
                    <i className="fa fa-phone"></i>
                    <span>
                    China<br />
                    ***********************<br />
                    +8618810151613<br />
                    ***********************
                    </span>
                </div>
                <div className="cv-call">
                    <i className="fa fa-phone"></i>
                    <span>
                    Zimbabwe<br />
                    ***********************<br />
                    +2631783143110<br />
                    ***********************
                    </span>
                </div>
                <div className="cv-address">
                    <i className="fa fa-map-marker"></i>
                    <span>
                    Address<br />
                    ***********************<br />
                    Room 215, Building 4, USTB, Haidian District, Beijing, China<br />
                    ***********************
                    </span>
                </div>
                <div className="cv-email">
                    <i className="fa fa-envelope"></i>
                    <span>
                    Email<br />
                    ***********************<br />
                    <p style={{ fontSize: '11px' }}>alecmabhizachirawu@outlook.com</p>
                    ***********************
                    </span>
                </div>
                <div className="cv-wechat">
                    <i className="fa fa-wechat"></i>
                    <span>
                    Wechat ID<br />
                    ***********************<br />
                    captaincheqcheq<br />
                    ***********************
                    </span>
                </div>
                <div className="cv-discord">
                    <i className="fa fa-comments"></i>
                    <span>
                    Discord<br />
                    ***********************<br />
                    Captaincheq<br />
                    ***********************
                    </span>
                </div>
                <div className="cv-call">
                    <i className="fa fa-google"></i>
                    <span>
                    Gmail<br />
                    ***********************<br />
                    <p style={{ fontSize: '12px' }}>alecmabhizachirawu@gmail.com</p>
                    ***********************
                    </span>
                </div>
                </div>

                <div className="cv-follow">
                <h3>*** LETS CONNECT***</h3>
                <div className="box">
                    <a href="https://www.linkedin.com/in/alec-mabhiza-chirawu-42438a183/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/Captaincheq/" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                    <a href="https://github.com/Captaincheq/" target="_blank" rel="noreferrer"><i className="fa fa-steam"></i></a>
                    <a href="https://mobile.twitter.com/CheqCaptain/" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                    <a href="https://github.com/Captaincheq/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                    <a href="https://github.com/Captaincheq/" target="_blank" rel="noreferrer"><i className="fa fa-reddit-alien"></i></a>
                </div>
                </div>
            </div>

            <div className="cv-func">
                {/* Academic Experience */}
                <div className="cv-edu">
                <h3><i className="fa fa-graduation-cap"></i> Academic Experience</h3>
                <ul>
                    <li>
                    <span>'O & A' Level<br />Cherutombo High School</span>
                    <small>2011 - 2016</small>
                    </li>
                    <li>
                    <span>B.Sc. CS<br />Dept. of Information Engineering || HUTC</span>
                    <small>2017 - 2021</small>
                    </li>
                    <li>
                    <span>Masters. ICE<br />Dept. of Information Engineering || USTB</span>
                    <small>2021 - 2024</small>
                    </li>
                </ul>
                </div>

                {/* Professional Experience */}
                <div className="cv-work">
                <h3><i className="fa fa-briefcase"></i> Professional Experience</h3>
                <ul>
                    <li title="Understanding the main use of computers in the world and how to improve it.">
                    Hesco Certificate <br />Cherutombo High School
                    <small>2013 - 2014</small>
                    </li>
                    <li title="Ability to use computer packages including word, excel, powerpoint">
                    Computer Operation & Packages<br />Cherutombo High School
                    <small>2013 - 2014</small>
                    </li>
                    <li title="Using Raspberry Pi for face detection and recognition">
                    Project Associate<br />IoTC Laboratory || HUTC
                    <small>2018 - 2019</small>
                    </li>
                </ul>
                </div>

                {/* Programming Languages */}
                <div className="skills-prog">
                <h3><i className="fa fa-code"></i> Programming Languages</h3>
                <ul>
                    {[
                    { name: 'C', percent: 73, tooltip: 'I am good at using C programming language design for designing and calculations' },
                    { name: 'C++', percent: 70, tooltip: 'My knowledge for C++ is fair as for C' },
                    { name: 'Java', percent: 20, tooltip: 'I just understand the basics.' },
                    { name: 'JavaScript', percent: 67, tooltip: 'I have a good understanding of JavaScript as it is the main core of web development.' },
                    { name: 'Lua', percent: 10, tooltip: 'I just know the basics.' },
                    { name: 'Python', percent: 75, tooltip: 'I understand Python as it is the main language I prefer to use.' },
                    ].map(({ name, percent, tooltip }) => (
                    <li key={name} title={tooltip} data-percent={percent}>
                        <span>{name}</span>
                        <div className="skills-bar">
                        <div className="bar" style={{ width: `${percent}%` }}></div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>

                {/* (Other sections can be converted similarly if you want.) */}
            </div>

      <Link to="/">Back to Home</Link>
    </div>
  );
}
