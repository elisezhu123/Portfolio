import React from 'react'

/* import CSS */
import './Experience.css'

function Experience() {
  return (
      <section className="experience">
         <div className="title">
            <h2>Work Experience</h2>
         </div>

         {/* timeline */}
         <div className="timeline">
            <ul>
               <li>
                  <h3>Kairos Career Consulting Canada Inc</h3>
                  <p>
                     Web Designer
                  </p>
                  <p>
                     An AIGC startup in Shanghai, China
                  </p>
                  <span className="circle"></span>
                  <span className="date">
                     Jan 2021 - Nov 2021
                  </span>
               </li>

               <li>
                  <h3>Shenzhen Archforce Distributed Technology Co</h3>
                  <p>
                     UI Graphic Designer
                  </p>
                  <p>
                     A distributed technology leader providing the next generation financial platform in Shenzhen, China
                  </p>
                  <span className="circle"></span>
                  <span className="date">
                     Mar 2024 - Aug 2024
                  </span>
               </li>

               <li>
                  <h3>Shanghai Pengyuan Network Technology Co</h3>
                  <p>
                     UI Graphic & Animation Designer
                  </p>
                  <p>
                     An AIGC startup in Shanghai, China
                  </p>
                  <span className="circle"></span>
                  <span className="date">
                     Mar 2024 - Aug 2024
                  </span>
               </li>
            </ul>
         </div>
      </section>
  )
}

export default Experience