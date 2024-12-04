import React from 'react';

/* Import CSS */
import './About.css';

/* Import Image */
import aboutpic from '../assets/img/about.jpg';

function About() {
  return (
    <section className="about"> 
        <h2 className="name">About Me</h2> 
        <div className="about-container">

            {/* left side of a picture*/}
            <div className="about-left">
                <img src={aboutpic} alt="about-pic"/>
            </div>

            {/* right side of descriptions */}
            <div className="about-right">
                <p>
                    I've been interested in digital media design since high school, which drove me to learn various design tools for creating videos, 3D models, and UI/UX design.
                    As a design practitioner, I keep honing my skills in creating appealing images, websites, and code-editing projects. Furthermore, a successful designer should 
                    also grasp theoretical knowledge about visual concepts, design and research methodology, psychological and cognitive determinants, and ethical issues. A wide 
                    range of reading and community involvement let me acquire this relative knowledge and maintain a high sensitivity to popular ideas and trends in the field.
                    As a content creator of REDnote and Bilibili—two popular social media sites in China, I concentrate on showcasing self-created digital artworks and 
                    teaching software functionalities to people concerning artificial intelligence, digital workflow, macOS games, and keeping board communication with 20000+ 
                    accumulated subscribers through the platform.
                </p>
                
                {/* data of my clicks */}
                <div className="data">
                    <ul>
                        <li>
                            <span>
                                <box-icon name='hand-right' type='solid' color='#fffdfd' ></box-icon>
                                <p className='list'>Subscribers: <span>20000+</span></p>
                            </span>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <span>
                                <box-icon name='bell' type='solid' color='#fffdfd' ></box-icon>
                                <p className='list'>Max PV/UGC: <span>30,000+</span></p>
                            </span>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <span>
                                <box-icon name='hand-down' type='solid' color='#fffdfd' ></box-icon>
                                <p className='list'>Overall PV: <span>148,9000+</span></p>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* skills bar */}
                <div className="skills">
                    <div className="skill-bar">
                        <div className="info">
                            <p>UI & UX Design</p>
                            <p>70 %</p>
                        </div>
                        <div className='bar'> 
                            <span className='bar1'></span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p> 3D Modeling</p>
                            <p>50 %</p>
                        </div>
                        <div className='bar'> 
                            <span className='bar2'></span>
                        </div>
                    </div>
        
                    <div className="skill-bar">
                        <div className="info">
                            <p>Web Devlopment</p>
                            <p>80 %</p>
                        </div>
                        <div className='bar'> 
                            <span className='bar3'></span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>AIGC Design</p>
                            <p>90 %</p>
                        </div>
                        <div className='bar'> 
                            <span className='bar4'></span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>Game Design</p>
                            <p>60 %</p>
                        </div>
                        <div className='bar'> 
                            <span className='bar5'></span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>  
  )
}

export default About