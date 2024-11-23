import React from 'react';

/* import css */
import './Resume.css';

/* import images */
import pic1 from '../assets/img/resume1.png';
import pic2 from '../assets/img/resume2.png';
import pic3 from '../assets/img/resume3.png';
import pic4 from '../assets/img/resume4.png';
import pic5 from '../assets/img/resume5.png';
import pic6 from '../assets/img/resume6.png';
import pic7 from '../assets/img/resume7.png';

/* import cv */
import CV from '../assets/Lingxiao Zhu-CV.pdf';

/* import boxicons */
import 'boxicons';

function Resume() {
    return (
        <section className="resume">
            <div className="name">Lingxiao Zhu</div>

            {/* row1 of work expereince, introduction and contacts*/}
            <div className="row1">
                {/* work experience in three rows */}
                <div className="work">
                    <h2 className="title">
                        WORK EXPERIENCE
                    </h2>
                    <div className="list">
                        <div className="item">
                            <div className="year">2021</div>
                            <div className="content">
                                <div className="company">Kairos Career Consulting Canada Inc</div>
                                <div className="job">
                                    Web Designer
                                </div>
                                <div className="achivements">
                                    - Self-built AIGC local servers for ComfyUI and Stable Diffusion<br />
                                    - Made a Python-based ComfyUI plugin
                                </div>
                            </div>
                        </div>
                  
                        <div className="item">
                            <div className="year"><span>2024</span></div>
                            <div className="content">
                                <div className="company">Shenzhen Archforce Distributed Technology Co</div>
                                <div className="job">
                                    UI Graphic Designer
                                </div>
                                <div className="achivements">
                                    - Accomplished two poster series for two industry seminars.
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="year"><span>2024</span></div>
                            <div className="content">
                                <div className="company">Shanghai Pengyuan Network Technology Co</div>
                                <div className="job">
                                    UI Graphic & Animation Designer
                                </div>
                                <div className="achivements">
                                   - Apply interactive animation effects to webpages.<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* introduction*/}
                <div className="intro">
                    <div className="avatar">
                        <img src={pic1} alt="resume1" />
                    </div>
                    <a href={CV} download="lingxiao_zhu_cv.pdf">
                        <button>Download CV</button>
                    </a>
                    <div className="content">
                        One-year Interactive Media Design postgraduate who received four-year cultivation in the inter-discipline of Visual Arts.
                        A super-gamer dedicated to mastering various tools in Web Design, UI/UX, and 3D Modelling & Animation. A quick learner full of curiosity in unlocking the Metaverse world. Looking for an entry-level Web designer or a UI/UX designer role in the commercial industry that offers an opportunity to satisfy my preferences and pursuits.
                    </div>

                </div>

                {/* contacts of address, email, phone and 3 website links */}
                <div className="contacts">
                    <h2 className="title">CONTACT</h2>
                    <ul>
                        <li>
                            <div>
                                <box-icon name='map' size="30px" color='#ffffff' ></box-icon>
                            </div>
                            <div>
                                V94 DP7N, Limerick, Ireland
                            </div>
                        </li>

                        <li>
                            <div>
                                <box-icon name='envelope' size="30px" color='#ffffff' ></box-icon>
                            </div>
                            <div>
                                elisezhu@163.com
                            </div>
                        </li>

                        <li>
                            <div>
                                <box-icon name='phone-call' size="30px" type='solid' color='#ffffff' ></box-icon>
                            </div>
                            <div>
                                +353 833515117
                            </div>
                        </li>
                    </ul>
                    <ul className="link">
                        <li>
                            <a href="https://elisezhu123.github.io/MyPortfolio/">
                                <box-icon name='github' size="30px" type='logo' color='#ffffff' ></box-icon>
                            </a>
                            <div>
                                website1: github.com - MyPortfolio
                            </div>
                        </li>
                        <li>
                            <a href="https://elisezhu9.wixsite.com/elise-portfoilo">
                                <box-icon name='wix' size="30px" type='logo' color='#ffffff' ></box-icon> 
                            </a>
                            <div>
                                website2: wix.com - Elise Portfolio
                            </div>
                        </li>
                        <li>
                            <a href="https://gm17044322.icoc.bz/">
                                <box-icon name='internet-explorer' size="30px" type='logo' color='#ffffff' ></box-icon>
                            </a>
                            <div>
                                website3: Capstone Project
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* row2 of images */}
            <div className="row2">
                <div>
                    <img className="bag" src={pic2} alt="resume2" />
                </div>

                <div>
                    <img className="ipad" src={pic3} alt="resume3" />
                </div>


                <div>
                    
                </div>
                
                <div>
                    <img src={pic4} alt="resume4" />
                </div>

                <div>
                    <img src={pic5} alt="resume5" />
                </div>

                <div>
                    <img src={pic6} alt="resume6" />
                </div>

                <div>
                    <img src={pic7} alt="resume7" />
                </div>
            </div>

            {/* row3 of language, education and skill */}
            <div className="row3">
                {/* language */}
                <div className="language">
                    <h2 className="title">LANGUAGES</h2>
                    <div>
                        <span>Chinese:</span> mother language
                    </div>

                    <div>
                        <span>English:</span> professional proficiency
                    </div>

                    <div>
                        <span>Spanish:</span> in progress
                    </div>
                </div>

                {/* education */}
                <div className="education">
                    <h2 className="title">EDUCATION</h2>
                    <div className="list">
                        <div className="item">
                            <div className="years"><span>2019 - 2023</span></div>
                            <div className="content">
                                <div className="company">University of British Columbia</div>
                                <div className="job">
                                    Banelor Degree
                                </div>
                                <div className="describe">
                                    Major in Visual Arts
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="years"><span>2024 - 2025</span></div>
                            <div className="content">
                                <div className="company"> University of Limerick</div>
                                <div className="job">
                                    Master Degree
                                </div>
                                <div className="describe">
                                    Interaction and Experience Design Program
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6 skills */}
                <div className="skill">
                    <div className="title">SKILL</div>
                    <ul>
                        <li>
                            <div></div>
                            <span>UI & UX Design</span>
                        </li>

                        <li>
                            <div></div>
                            <span>Model Animation</span>
                        </li>

                        <li>
                            <div></div>
                            <span>Video Editing</span>
                        </li>

                        <li>
                            <div></div>
                            <span>Web Develop</span>
                        </li>

                        <li>
                            <div></div>
                            <span>AIGC Graphic</span>
                        </li>

                        <li>
                            <div></div>
                            <span>Motion Graphic</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}  

export default Resume