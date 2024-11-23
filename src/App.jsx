/* import Link，Routes and Route*/
import { Link, Routes, Route} from 'react-router-dom';

/* import CSS */
import './App.css';

/* import logo */
import logo from './assets/img/logo.png';

/* import components */
import Hero from './components/Hero.jsx';
import Banner from './components/Banner.jsx';
import Experience from './components/Experience.jsx';
import ProjectQuickView from './components/ProjectQuickView.jsx';
import Contact from './components/Contact.jsx';

/* import pages */
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Resume from './pages/Resume.jsx';
import Project from './pages/Project.jsx';
import Gallery from './pages/Gallery.jsx';

/* import Blog posts */
import Post1 from './blogs/Post-1.jsx';
import Post2 from './blogs/Post-2.jsx';
import Post3 from './blogs/Post-3.jsx';
import Post4 from './blogs/Post-4.jsx';
import Post5 from './blogs/Post-5.jsx';

/* import boxicons */
import 'boxicons';

function App() {
  return (
    <>
    {/* navigation bar */}
      <div className='App'> 

        {/* logo */}
        <figure className="logo">
          <Link to="/Portfolio" ><img src={logo} alt="logo" /></Link>
        </figure>

        {/* checkbox */}
        <input type="checkbox" id="menu-toggle" className="menu-checkbox"/>
        <label htmlFor="menu-toggle" className="menu-icon">
          <box-icon name='menu' size="30px" color='#ffffff'></box-icon>
        </label>

        {/* navigation menu with icon */}
        <nav className='menu'>
          <ul className='links'>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Blog" >Blog</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Project">Project</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
          </ul>
        </nav>
      </div>

      {/* homepage */}
      <main>
        <Routes>
          <Route path="/Portfolio" element={<>
            <Hero />
            <Banner />
            <Experience />
            <ProjectQuickView />
            <Contact />
          </>} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Gallery" element={<Gallery />} />

          {/* Blog posts */}
          <Route path="/Post1" element={<Post1 /> } />
          <Route path="/Post2" element={<Post2 />} />
          <Route path="/Post3" element={<Post3 /> } />
          <Route path="/Post4" element={<Post4 />} />
          <Route path="/Post5" element={<Post5 />} />
        </Routes>  
      </main>

      {/* footer */}
      <footer>
        <div className="row">

          {/* column 1 with logo and descriptions */}
          <div className="col">
            <img src={logo} alt="logo" />
            <p class="des">Subscibe Elise Portfolio Channel to view more projects and click the right icons to link my other websites. </p>
          </div>

          {/* column 2 with office address and contact information */}
          <div className="col">
            <div className='title'>
              <box-icon name='map' size="20px" color='#ffffff'></box-icon>
              <h3>Office</h3>
            </div>
            <p> Thomond Village</p>
            <p> Limerick, Ireland</p>
            <p>V94 DP7N</p>
            <p className='email'>24038288@studentmail.ul.ie</p>
            <span>+353 833515117</span>
          </div>

          {/* column 3 with links */}
          <div className="col">
            <div className='title'>
              <box-icon name='link' size="20px" color='#ffffff'></box-icon>
              <h3>Links</h3>
            </div>
            <ul>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Blog" >Blog</Link></li>
              <li><Link to="/Resume">Resume</Link></li>
              <li><Link to="/Project">Project</Link></li>
              <li><Link to="/Gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* column 4 with newsletter and social-icons */}
          <div className="col">
            <div className='title'>
              <box-icon name='message-square-dots' size="20px" color='#ffffff' ></box-icon>
              <h3>Newsletter</h3>
            </div>
            <form>
              <input type="email" placeholder="Enter your email" required/>
              <button type="submit">
                <box-icon name='right-arrow-alt' size="20px" color='#ffffff' ></box-icon>
              </button>
            </form>
            <div className="social-icons">
              <a href="https://github.com/elisezhu123"> 
                <box-icon name='github' type='logo' color='#ffffff' ></box-icon>
              </a>

              <a href="https://www.linkedin.com/in/lingxiao-zhu/">
                <box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon>
              </a>

              <a href="https://www.facebook.com/profile.php?id=100040530652337">
                <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
              </a>

              <box-icon name='wordpress' type='logo' color='#ffffff' ></box-icon>

              <a href="https://elisezhu9.wixsite.com/elise-portfoilo">
                <box-icon name='wix' type='logo' color='#ffffff' ></box-icon>
              </a>

              <box-icon name='behance' type='logo' color='#ffffff' ></box-icon>
            </div>
          </div>
        </div>

        {/* copy right */}
        <div className="copy-right">
          <p>Elise Portfolio &copy; 2024 - All rights reserved</p>
        </div>
      </footer> 
    </>
  )
}

export default App
