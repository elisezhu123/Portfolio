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
              For years, I've relied on makeup as a shield, carefully applying layers to conceal the imperfections and flaws on my face, much like the flower petals that slowly close in on themselves, hiding the delicate core within. The routine became a ritual, which prevented me from judging by the pass by. Like a flower vulnerable to the elements, I feared exposure. My self-esteem was tied to how I looked, and any flaw in my appearance would make me feel exposed. The search for perfection on the outside distracted me from nurturing the strength, beauty, and resilience within.
            </p>
            <p>
              I was hiding parts of myself—my imperfections and even my personality. The layers became heavier, not just on my skin but in my soul, as I distanced myself from the idea that my natural self was enough. Over time, I started questioning: Am I projecting the ideal I thought the world wanted to see? I did not realize that beauty comes from authenticity, not perfection.
            </p>
            <p>
              A flower opens up to show its most delicate and beautiful parts - its soft petals, its inner glow, and its sweet scent. flower blooms fully when it lets the sun shine on it, I started to blossom when I let go of my defenses and embraced my flaws. I started using the mirror less often and with less makeup. I realized that makeup is just a tool, not a way to be someone I’m not. It can make me look better, but it can’t make me who I am. I started to see the beauty in my imperfections, the strength in my weaknesses, and the power in my true self. I realized that true beauty isn’t just about how we look, but how we feel and how we treat others. It's about embracing our flaws and celebrating our uniqueness.
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