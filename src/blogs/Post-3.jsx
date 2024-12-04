import React from 'react';

/* import Link */
import { Link } from 'react-router-dom';

/* import CSS */
import './Post.css';

/* import image */
import blog_3 from '../assets/img/Blog/blog3.1.jpg';

/* import boxicons */
import 'boxicons';

function post3() {
  return (
    <section className="post">
        <div className="post-container">

          {/* back button */}
          <Link to ="/blog" className="back">
            <box-icon name='arrow-back' size="20px" animation='fade-right' color='#ffffff'></box-icon>
          </Link>

          {/* post content*/}
          <h2 className='post-title'>
            Power and Precision: Portrait of an Aspirational Professional Youth
          </h2>
          <img className="pic3" src={blog_3} alt="blog3.1" />
          <div className="des">
            <p>
              The photo was taken against a white wall at my dorm, a living and studying space full of reflection and ambition. The simplicity of the white wall behind me serves as the perfect canvas, making every detail clear and brighter with the optical characteristics of reflecting all lights. I selected a formal black suit to let the balanced light bring out the best details of my facial contours and the suit texture. I hope the well-framed compositions will present my confidence and a positive attitude in this first professional photo in life. 
            </p>
            <p>
              Thus, this portrait goes beyond a physical representation. I hope people who watch the photo can find what needs to be encapsulated in a professional lady, such as leadership qualities, elegance and charisma. I wish they could see in my pupils an aura of discernment and decisiveness. The picture symbolizes the future journey toward excellence and success of an occupational female who will grow into an individual with knowledge, inner power, and unwavering ambition.
            </p>
          </div>

            {/* post tech information*/}
          <div className="post-tech">
            <box-icon name='camera' type='solid' size="20px" color='#ffffff' ></box-icon>
            <span>Camera: Sony</span>
            <span>Shutter Speed: 1/40</span>
            <span>Aperture: f/1.8</span>
            <span>ISO: 250</span>
          </div>
        </div>
        
    </section>
  )
}

export default post3