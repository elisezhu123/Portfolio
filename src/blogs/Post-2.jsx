import React from 'react';

/* import Link */
import { Link } from 'react-router-dom';

/* import CSS */
import './Post.css';

/* import image */
import blog_2 from '../assets/img/Blog/blog2.1.jpg';

/* import boxicons */
import 'boxicons';

function post2() {
  return (
    <section className="post">
        <div className="post-container">

          {/* back button */}
          <Link to ="/blog" className="back">
            <box-icon name='arrow-back' size="20px" animation='fade-right' color='#ffffff'></box-icon>
          </Link>

          {/* post content*/}
          <h2 className='post-title'>
            Aesthetic Shot: Make-up, Flower and Inner Beauty
          </h2>
          <img className="pic2" src={blog_2} alt="blog2.1" />
          <div className="des">
            <p>
              For years, I relied on makeup as a shield, carefully applying layers to conceal the imperfections and flaws on my face, much like the flower petals that slowly close in on themselves, hiding the delicate core within. The routine became a ritual, which which caters to the social fashion of judging people by their appearance. My self-esteem depended on how I looked, and any flaws in my appearance would make me feel unconfident. Like a flower vulnerable to the elements, I feared exposure. The search for perfection from the outside distracted me from nurturing the strength, beauty, and resilience within.
            </p>
            <p>
              I was hiding parts of myself—my imperfections and even my personality. The layers became heavier, not just on my skin but in my soul, as I distanced myself from the idea that my natural self was enough. I kept refusing my subconsciousness that beauty comes from authenticity, not perfection. Over time, I started questioning: is it meaningful to project an ideal me that people want to see rather than an authentic me to the world?
            </p>
            <p>
              A flower opens its soft petals until its most delicate inner glow shows and its sweet scent emits. Only when it blooms fully and lets the sunshine pour in could it begin to accept the gifts from heaven and earth. I started to blossom when I let go of my defences and embraced my flaws. I started using the mirror less often and with less makeup. I realized that makeup can make my looks impeccable but can't make me beautiful in my heart and soul. I started to see the beauty in my imperfections, the strength in my weaknesses, and the power in my true self. True beauty doesn't just lie in how we look but how we feel and treat others. Let's embrace our flaws and cherish our uniqueness.
            </p>
          </div>

            {/* post tech information*/}
          <div className="post-tech">
            <box-icon name='camera' type='solid' size="20px" color='#ffffff' ></box-icon>
            <span>Camera: Canon EOS Rebel T7</span>
            <span>Shutter Speed: 1/100</span>
            <span>Aperture: f/3.5-5.6</span>
            <span>ISO: 100</span>
          </div>
        </div>
        
    </section>
  )
}

export default post2