/* import useState and useEffect hooks from react */
import React, {useState, useEffect} from 'react';

/* import CSS */
import './ProjectQuickView.css';

/* import images */
import pro1 from '../assets/img/project1.png';
import pro2 from '../assets/img/project2.png';
import pro3 from '../assets/img/project3.png';
import pro4 from '../assets/img/project4.png';
import pro5 from '../assets/img/project5.png';
import pro6 from '../assets/img/project6.png';

/* import projectquickview function */
import { projectquickview } from './ProjectQuickView.js';


function ProjectQuickView() {

  {/* create a state variable i and a function setI to update the state variable i */}
  const [i, setI] = useState(1); // set i to 1

  /* call the projectquickview function when the component mounts */
  useEffect(() => {
    const cleanUp = projectquickview(); // call the projectquickview function and store the returned function in cleanUp
    return () => cleanUp(); // return the cleanUp function to be called when the component unmounts
    }, []); 

  return (
    <section className="project-overview">
      <div className="title">
        Recent Projects
      </div>   

      {/* 6 recent popular project descriptions*/}
      <div className='content'>
        <div className="items active">
          <h1>Project1: IU Cube</h1>
          <div className="text">
            <p>
              Through this project, I hope to share the perplexity and excitement of those adolescent years with you. It is more than just a simple webpage. It was a remembrance and a yearning for that period in my life.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}> 
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/iu-cube'>
              View Project
            </a>
            </button>
        </div>

        <div className="items">
          <h1>Project2: The Pearl Girl</h1>
          <div className="text">
            <p>
              I recreated the well-known oil painting " The Girl with the Pearl Earring" in this work. I turned the traditional image of the original artwork into a contemporary and amusing cartoon using Blender for 3D modeling and rendering.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}>
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/the-pearl-girl'>
              View Project
            </a>
          </button>
        </div>

        <div className="items">
          <h1>Project3: Healthy Food & Tips </h1>
          <div className="text">
            <p>
              In Western nations, tipping culture us wudespread as a trend in a more globalized world. However, many overseas Chinese may find it challenging to adapt. Thus, I attempted to create this user interface for a food and beverages ordering application using Sketch development tool.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}>
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/healthy-food-tips'>
              View Project
            </a> 
          </button>
        </div>

        <div className="items">
          <h1>Project4: Foxes in Fireflies Forest</h1>
          <div className="text">
            <p>
              This is a short animated film about a family of foxes with a group of fireflies in a forest. The 3D modelling, animation, and rendering of all the characters and environmental elements depended on Blender for design. It is more than just a piece of work but a passing childhood fancy deeply remembered and cherished. The character of the foxes in the animation reminds me of a little civet cat I used to feed in my hometown.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}>
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/foxes-in-fireflies-forest'>
              View Project
            </a>
          </button>
        </div>

        <div className="items">
          <h1>Project5: Fluid Rotation Timeline</h1>
          <div className="text">
            <p>
              This design is a tribute to Bilibili (a YouTube-like social media platform like YouTube having most Chinese followers) and my fans. I will share unique visuals with yout via code programming.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}> 
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/fluid-rotation-timeline'>
              View Project
            </a>
            </button>
        </div>

        <div className="items">
          <h1>Project6: Collecting Gems</h1>
          <div className="text">
            <p>
            It is an open-source mini-game enriching the Mac game ecosystem, and players can enter the game in a single setting. It is a game adapted to younger kids and can help them quickly recover from a rigorous learning atmosphere and achieve complete relaxation. I also encourage teenagers interested in coding to download and recreate according to their preferences.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}>
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/collecting-gem'>
              View Project
            </a>
          </button>
        </div>

        {/* Project images */}
        <div className="images">
          <div className="pro" style={{ "--i": 1 }}>
            <img src={pro1} alt="project1" />
          </div>

          <div className="pro" style={{ "--i": 2 }}>
            <img src={pro2} alt="project2" />
          </div>

          <div className="pro" style={{ "--i": 3 }}>
            <img src={pro3} alt="project3" />
          </div>

          <div className="pro" style={{ "--i": 4 }}>
            <img src={pro4} alt="project4" />
          </div>

          <div className="pro" style={{ "--i": 5 }}>
            <img src={pro5} alt="project5" />
          </div>

          <div className="pro" style={{ "--i": 6 }}>
            <img src={pro6} alt="project6" />
          </div>
        </div>

        <div className="rotation">
          <button className="prev-btn">
            <box-icon name='chevron-left' size="20px" type='solid'  color="#ffffff" ></box-icon>
          </button>
          <button className="next-btn">
            <box-icon name='chevron-right' size="20px" type='solid' color='#ffffff' ></box-icon>
          </button>
        </div>

      </div>
    </section>
  )
}

export default ProjectQuickView