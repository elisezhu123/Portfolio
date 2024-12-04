import React from 'react';

/* import Link */
import { Link } from 'react-router-dom';

/* import CSS */
import './Post.css';

/* import image */
import blog_1 from '../assets/img/Blog/blog1.1.jpg';

/* import boxicons */
import 'boxicons';

function post1() {
  return (
    <section className="post">
        <div className="post-container">

          {/* back button */}
          <Link to ="/blog" className="back">
            <box-icon name='arrow-back' size="20px" animation='fade-right' color='#ffffff'></box-icon>
          </Link>

          {/* post content*/}
          <h2 className='post-title'>
            Passion in life: Daily Jogging at Campus
          </h2>
          <img className="pic1" src={blog_1} alt="blog1.1" />
          <div className="des">
            <p>
              In China, the air feels heavy, laden with smoke and dust, making me struggle in my hometown -- a bustling industrial hub. I used to be tired and stressed as poor air quality blocked my connection with nature.
            </p>
            <p>
              However, it is quite different in Ireland. Roaming on thisland every morning feels like a free bird in the forest. The air is clean and crisp, and the sky is a clear blue. The sun shines brightly, casting a warm glow over everything. The lush green landscapes stretch out before me, and the cool breeze brushes against my skin. I feel a sense of freedom and joy as if embraced by nature in a way I never have. All these make me feel like I am truly alive and free.
            </p>
            <p>
              Jogging is more than an exercise; it's a ritual that helps me find balance and peace. The freedom I get when I run here stays with me long after I've done. This snapshot captured a running moment with a cool breeze blowing around me. It reminds me that there's always the promise of something pure and beautiful waiting to be found, even in a polluted world.
            </p>
          </div>

            {/* post tech information*/}
          <div className="post-tech">
            <box-icon name='camera' type='solid' size="20px" color='#ffffff' ></box-icon>
            <span>Camera: Canon EOS Rebel T7</span>
            <span>Shutter Speed: 1/400</span>
            <span>Aperture: f/3.5-5.6</span>
            <span>ISO: 100</span>
          </div>
        </div>
        
    </section>
  )
}

export default post1