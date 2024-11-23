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
              These two photos were taken in the group meeting room at the library and Plessey House outside respectively. Despite our group members, we found some actors from other courses. As the continuity coordinator, my focus is on maintaining visual consistency throughout the shoot. Between shots, I scrutinize the set and props for consistency with previous shots. In addition, since the shoot was divided into five large scenes, two of which were indoor while three were outdoor, I had photographed the actors' costumes at the end of each scene to ensure that the clothing choices were correct in order to maintain consistency. Additionally, to ensure a controlled shooting environment, we shot in locations that were free of distractions and ensured that there were no extraneous people in the background to maintain the clean and crisp aesthetic of the commercial. This attention to continuity ensured a smooth flow to the images, helping the viewer to immerse themselves in the commercial without noticing any inconsistencies.
            </p>
          </div>
        </div>   
    </section>
  )
}

export default post5