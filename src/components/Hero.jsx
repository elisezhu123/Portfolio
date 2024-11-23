/* import useEffect from react to use the useEffect hook */
import React, {useEffect} from 'react';

/* import CSS */
import './Hero.css';

/* import hero function from Hero.js */
import {hero} from './Hero.js';

const Hero = () => {

    {/* use the useEffect hook to call the hero function and clean it up when the component unmounts */}
    useEffect(() => {
        const cleanUp = hero(); // call the hero function and store the return value in cleanUp
        return () => cleanUp(); // return the cleanUp function to be called when the component unmounts
        }, []);

        return (
            <section className='hero'>

                {/* hero section with 3 sliders*/}
                <div className="list">
                    <div className='item active'>
                        <div className="image" style={{"--bg": "url('./1.jpg')"}}></div>
                        <div className="content">
                            <h2>Ling Xiao Zhu</h2>
                            <p>An interaction Designer</p>
                            <p>
                                A Master degree in Interaction and Experience Design at the University of Limerick.
                            </p>
                        </div>
                    </div>

                    <div className='item'>
                        <div className="image" style={{"--bg": "url('./2.jpg')"}}></div>
                        <div className="content">
                            <h2>Ling Xiao Zhu</h2>
                            <p>An interaction Designer</p>
                            <p>
                                My passion lies in crafting user-centric designs and employing design thinking to address challenges effectively. 
                                As a collaborative and communicative individual, I am eager to secure a position within the interaction design field.
                            </p>
                        </div>
                    </div>

                    <div className='item'>
                        <div className="image" style={{"--bg": "url('./3.jpg')"}}></div>
                        <div className="content">
                            <h2>Ling Xiao Zhu</h2>
                            <p>An interaction Designer</p>
                            <p>
                                You can also call me Elise
                            </p>
                        </div>
                    </div>
                
                    {/* chevron icons to slider the images */}
                    <div className="chevrons">
                        <button className="prev">
                            <box-icon name='chevrons-left' size='20px' animation='fade-left' color='#ffffff'></box-icon>
                        </button>
                        <button className="next">
                            <box-icon name='chevrons-right' size='20px' animation='fade-right' color='#ffffff'></box-icon>
                        </button>
                    </div>
                </div>
            </section>
        );
    }


export default Hero