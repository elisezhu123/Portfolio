import React from 'react';

/* import Link */
import { Link } from 'react-router-dom';

/* import CSS */
import './Post.css';

/* import image */
import blog_4 from '../assets/img/Blog/blog4.1.jpg';

/* import boxicons */
import 'boxicons';

function post4() {
  return (
    <section className="post">
        <div className="post-container">

          {/* back button */}
          <Link to ="/blog" className="back">
            <box-icon name='arrow-back' size="20px" animation='fade-right' color='#ffffff'></box-icon>
          </Link>

          {/* post content*/}
          <h2 className='post-title'>
            Drink for thought: Stage photo 1 - Disucssing Process
          </h2>
          <img className="pic4" src={blog_4} alt="blog4.1" />
          <div className="des">
            <p>
              In the cozy ambiance of the library cafeteria, we gathered to discuss the topic for our upcoming video project. To spark inspiration, we decided to browse through some YouTube videos, analyzing their storytelling techniques and visual styles. Each clip offered a unique perspective, fueling our excitement and creativity.
            </p>
            <span>Brainstorm the concept :</span>
            <p>
              With fresh ideas buzzing in our minds, we opened Figma to brainstorm. Collaboratively, we sketched out rough concepts, focusing on themes that aligned with our goals. This visual approach helped us organize our ideas effectively and decide on a clear direction for the video. Finally, we decided to focus on the commerial product of apple juice.
            </p>
            <span>Design the storyboard :</span>
            <p>
              With the focus set, we began outlining our approach. The plan includes creating a storyboard in Figma to map out key scenes, designing a catchy tagline, and deciding on visuals that emphasize the freshness and quality of apple juice. This decision marked the beginning of a creative and fun project.
            </p>
          </div>
        </div>
    </section>
  )
}

export default post4