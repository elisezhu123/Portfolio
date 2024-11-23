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
            Power and Precision: Protrait of an Aspiration Professional Yourth
          </h2>
          <img className="pic3" src={blog_3} alt="blog3.1" />
          <div className="des">
            <p>
              The photo was taken in my dorm with the background of a white wall, a space of both reflection and ambition. The simplicity of the white wall behind me serves as the perfect canvas, allowing every detail to shine without distraction. It shows my confidence and authority while wearing a suit. The balanced light and the well-framed composition brings out the contours of my face and the texture of the suit.
            </p>
            <p>
              This portrait goes beyong a physical representation, it encaosulates my leadership qualities, but also elegance and charisma. My stance exudes an aura of decisiveness, while my expression hints at the strategic mind that lies beneath. It highlighs the essence of a business elite, embodying power, precision, and unwavering ambition, symbolizing the journey towards excellence and success.
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