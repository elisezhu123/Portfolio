/* Import useEfect */
import React, {useEffect} from 'react'

/* Import CSS */
import './Gallery.css'

/* Import Videos */
import video1 from '../assets/img/video1.mp4';
import video2 from '../assets/img/video2.mp4';
import video3 from '../assets/img/video3.mp4';
import video4 from '../assets/img/video4.mp4';

/* Import Javascript */
import {gallery} from './Gallery.js';

const Gallery = () => {

 {/* use the useEffect hook to call the gallery function and clean it up when the component unmounts */}
  useEffect(() => {
    const cleanUp = gallery(); // call the gallery function and store the return value in cleanUp
    return () => cleanUp(); // return the cleanUp function to be called when the component unmounts
    }, []);

    return (
      <section className='gallery'>
        <h2>Gallery</h2>

        {/* Image Gallery */}
        <h3 className='sub-title'>Image Gallery</h3>

        {/* checkbox styles of 11 images */}
        <div className="wrapper">
          <div className="container">
            <input type="radio" name="slide" id="show1"/>
            <label htmlFor="show1" className="card">
                <div className="row">
                  <div className="num">1</div>
                  <div className="des">
                    <h4>The puzzle of Apple Meeting Arrow </h4>
                    <p>a modern interpretation of the story of William Tell.</p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show2"/>
            <label htmlFor="show2" className="card">
                <div className="row">
                  <div className="num">2</div>
                  <div className="des">
                    <h4>Golden Autumn</h4>
                    <p>a poster regarding coupon discount made from photoshop. </p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show3"/>
            <label htmlFor="show3" className="card">
                <div className="row">
                  <div className="num">3</div>
                  <div className="des">
                    <h4>Hi, Septeber</h4>
                    <p>a poster regarding coupon discount in September made from photoshop. </p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show4"/>
            <label htmlFor="show4" className="card">
                <div className="row">
                  <div className="num">4</div>
                  <div className="des">
                    <h4>Discover Your Beauty</h4>
                    <p>An app font page made from Sketch about make-up.</p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show5"/>
            <label htmlFor="show5" className="card">
                <div className="row">
                  <div className="num">5</div>
                  <div className="des">
                    <h4>My Apple store</h4>
                    <p>A app interface page made from Sketch about app store in iphone </p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show6" />
            <label htmlFor="show6" className="card">
                <div className="row">
                  <div className="num">6</div>
                  <div className="des">
                    <h4>Siren's Song</h4>
                    <p>A poster about a siren character in a mobile game. </p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show7"/>
            <label htmlFor="show7" className="card">
                <div className="row">
                  <div className="num">7</div>
                  <div className="des">
                    <h4>Trifold Brockure Mockup </h4>
                    <p>a trifold Brockure Mockup about a company's web design  </p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show8"/>
            <label htmlFor="show8" className="card">
                <div className="row">
                  <div className="num">8</div>
                  <div className="des">
                    <h4>Image 8: Dream in new house</h4>
                    <p>a poster about coupon discount of mattress made from photoshop </p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show9"/>
            <label htmlFor="show9" className="card">
                <div className="row">
                  <div className="num">9</div>
                  <div className="des">
                    <h4>Global Commerial </h4>
                    <p>a poster about a meeting invitation lettermade from photoshop </p>
                  </div>
                </div>
            </label>

            <input type="radio" name="slide" id="show10"/>
            <label htmlFor="show10" className="card">
                <div className="row">
                  <div className="num">10</div>
                  <div className="des">
                    <h4>Power and AI </h4>
                    <p>a poster about a meeting invitation letter made from photoshop </p>
                  </div>
                </div>
            </label>
          </div>
        </div>

        {/* Video Gallery */}
        <h3 className='sub-title'>Video Gallery</h3>
        <div className="video-container">

          {/* Video 1 */}
          <div className="main-video">
            <div className="video">
              <h3>Video 1: The Fox in the Fireflies Forest</h3>
              <video src={video1} alt="video1" controls muted></video>
            </div>
          </div>

          {/* Video lists in the right */}
          <div className="video-list">
            <div className="vid active">
              <h4 className='video-title'> Video 1: The Fox in the Fireflies Forest</h4>
              <video src={video1} alt="video1" controls muted></video>
            </div>

            <div className="vid">
              <h4 className='video-title'>Video 2: Metaverse</h4>
              <video src={video2} alt="video2" controls muted></video>
            </div>

            <div className="vid">
              <h4 className='video-title'>Video 3: Virtual Space</h4>
              <video src={video3} alt="video3" controls muted></video>
            </div>

            <div className="vid">
              <h4 className='video-title'>Video 4: Drinking for Thought</h4>
              <video src={video4} alt="video4" controls muted></video>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Gallery