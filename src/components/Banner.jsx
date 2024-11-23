import React from 'react'

/* Import CSS */
import './Banner.css'

/* Import Images */
import ban1 from '../assets/img/banner1.png';
import ban2 from '../assets/img/banner2.png';
import ban3 from '../assets/img/banner3.png';
import ban4 from '../assets/img/banner4.png';
import ban5 from '../assets/img/banner5.png';
import ban6 from '../assets/img/banner6.png';
import ban7 from '../assets/img/banner7.png';

/* Import Boxicons */
import 'boxicons';


function Banner() {
    return (
    <section className="banner">

        {/* slider 1 with 15 icons about my skills */}
        <div className="slider1">
            <div className="list">
                <div className="item" style={{"--position": 1}}>
                    <box-icon name='markdown' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>Markdown</p>
                </div>

                <div className="item" style={{"--position": 2}}>
                    <box-icon name='html5' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>HTML5</p>
                </div>

                <div className="item" style={{"--position": 3}}>
                    <box-icon name='tailwind-css' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>TailwindCSS</p>
                </div>

                <div className="item" style={{"--position": 4}}>
                    <box-icon name='react' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>React</p>
                </div>

                <div className="item" style={{"--position": 5}}>
                    <box-icon name='redux' type='logo' size='20px' color='#ffffff' ></box-icon>
                    <p>Redux</p>
                </div>

                <div className="item" style={{"--position": 6}}>
                    <box-icon name='javascript' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>JavaScript</p>
                </div>

                <div className="item" style={{"--position": 7}}>
                    <box-icon name='bootstrap' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>Bootstrap</p>
                </div>

                <div className="item" style={{"--position": 8}}>
                    <box-icon name='docker' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>Docker</p>
                </div>

                <div className="item" style={{"--position": 9}}>
                    <box-icon name='wordpress' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>WordPress</p>
                </div>

                <div className="item" style={{"--position": 10}}>
                    <box-icon name='visual-studio' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>VSCode</p>
                </div>

                <div className="item" style={{"--position": 11}}>
                    <box-icon name='adobe' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>Adobe</p>
                </div>

                <div className="item" style={{"--position": 12}}>
                    <box-icon name='sketch' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>Sketch</p>
                </div>

                <div className="item" style={{"--position": 13}}>
                    <box-icon name='figma' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>Figma</p>
                </div>

                <div className="item" style={{"--position": 14}}>
                    <box-icon name='blender' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>Blender</p>
                </div>

                <div className="item" style={{"--position": 15}}>
                    <box-icon name='unity' size='20px' type='logo' color='#ffffff' ></box-icon>
                    <p>Unity</p>
                </div>
            </div>   
        </div>


        {/* slider 2 with 7 images */}
        <div className="slider2">
            <div className="list">
                <div className="item reverse" style={{"--position": 1}}>
                    <img src={ban1} alt="banner1" />
                </div>

                <div className="item reverse" style={{"--position": 2}}>
                    <img src={ban2} alt="banner2" />
                </div>

                <div className="item reverse" style={{"--position": 3}}>
                    <img src={ban3} alt="banner3" />
                </div>

                <div className="item reverse" style={{"--position": 4}}>
                    <img src={ban4} alt="banner4" />
                </div>

                <div className="item reverse" style={{"--position": 5}}>
                    <img src={ban5} alt="banner5" />  
                </div>

                <div className="item reverse" style={{"--position": 6}}>
                    <img src={ban6} alt="banner6" />
                </div>

                <div className="item reverse" style={{"--position": 7}}>
                    <img src={ban7} alt="banner7" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner