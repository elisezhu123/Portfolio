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
          <h1>Project 1: <br /> IU Cube</h1>
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
          <h1>Project 2: <br />The Pearl Girl</h1>
          <div className="text">
            <p>
              I recreated the well-known oil painting " The Girl with the Pearl Earring " for this project. I turned the traditional image of the original artwork into a contemporary and amusing cartoon using 3D modeling and rendering technologies with the aid of Blender.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}>
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/the-pearl-girl'>
              View Project
            </a>
          </button>
        </div>

        <div className="items">
          <h1>Project 3: <br /> Healthy Food & Tips </h1>
          <div className="text">
            <p>
              This is a graphical user interface for an online platform for ordering food and beverages based on the software Sketch development. Nowadays, many Chinese live overseas. In Western nations, tipping culture is widespread as a trend in the more globalized world. They may find it difficult to adjust to such a society. Also, they may not be familiar with the menu names of Western dishes. Thus, I attempted to create a food ordering application user interface with several main features. 
            </p>
          </div>
          <button onClick={() => setI(i + 1)}>
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/healthy-food-tips'>
              View Project
            </a> 
          </button>
        </div>

        <div className="items">
          <h1>Project 4:<br /> Foxes in Fireflies Forest</h1>
          <div className="text">
            <p>
              This is a 3D animation project created in Blender. The project is a short animated film about a fox and a firefly in a forest. The animation is created using Blender's 3D modeling, animation, and rendering tools.It is more than just a piece of work but a passing childhood fancy deeply remembered and cherished. The fox character reminds me of a little civet cat I used to feed in my hometown.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}>
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/foxes-in-fireflies-forest'>
              View Project
            </a>
          </button>
        </div>

        <div className="items">
          <h1>Project 5: <br /> Fluid Rotation Timeline</h1>
          <div className="text">
            <p>
              This design is a tribute to Bilibili (a social media platform like YouTube having most Chinese followers) and my fans. I will share with you unique and lovely visuals via code programming.
            </p>
          </div>
          <button onClick={() => setI(i + 1)}> 
            <a href='https://elisezhu9.wixsite.com/elise-portfoilo/fluid-rotation-timeline'>
              View Project
            </a>
            </button>
        </div>

        <div className="items">
          <h1>Project 6: <br /> Collecting Gems</h1>
          <div className="text">
            <p>
              It is an open-source mini-game to enrich the Mac game ecosystem, for which a player can complete it in a single setting. It is a game that younger kids can play to help them quickly recover from rigorous learning atmosphere and achieve complete relaxation. I also encourage teenagers interested in coding to download and recreate according to their preferences.
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