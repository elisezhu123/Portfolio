import React from 'react';

/* import Link */
import { Link } from 'react-router-dom';

/* import CSS */
import './Post.css';

/* import image */
import blog_5 from '../assets/img/Blog/blog5.1.jpg';
import blog_6 from '../assets/img/Blog/blog6.1.jpg';

/* import boxicons */
import 'boxicons';

function post5() {
  return (
    <section className="post">
        <div className="post-container">

          {/* back button */}
          <Link to ="/blog" className="back">
            <box-icon name='arrow-back' size="20px" animation='fade-right' color='#ffffff'></box-icon>
          </Link>

          {/* post content*/}
          <h2 className='post-title'>
            Fantasy Video Shot2: Filming Process
          </h2>
          <img className="pic5" src={blog_5} alt="blog5.1" />
          <img className="pic5" src={blog_6} alt="blog6.1" />
          <div className="des">
            <p>
              These are the two photos taken in the meeting room at the Glucksman Library and outside of Plessey House, respectively. Despite group members in the class, some actors from other programmes also participated. As the visual continuity coordinator, I took charge of the visual consistency throughout the video shoot. The whole video is composed of five large scenes, two of which are indoor and three of which are outdoor. Firstly, I scrutinized the consistency of the settings and props in each shoot. Secondly, I had to photograph the actors' costumes at the end of each scene to ensure clothing consistency in the next scene. Finally, I selected the locations with few passersby to secure a shooting environment free of distractions. The above attention ensured a smooth flow between the images, helping the viewers to immerse themselves in the clean and crisp aesthetic of the accomplished commercial.
            </p>
          </div>
        </div>   
    </section>
  )
}

export default post5