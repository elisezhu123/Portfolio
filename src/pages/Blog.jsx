/* import useEffect and Link */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/* import CSS */
import './Blog.css';

/* import images */
import blog1 from '../assets/img/Blog/blog1.jpg';
import blog2 from '../assets/img/Blog/blog2.jpg';
import blog3 from '../assets/img/Blog/blog3.jpg';
import blog4 from '../assets/img/Blog/blog4.jpg';
import blog5 from '../assets/img/Blog/blog5.jpg';

/* import javascript */
import {blog} from './Blog.js';

/* import Blog comments */
import PostLists from '../features/PostLists.jsx';
import AddPostForm from '../features/AddPostForm.jsx';

function Blog() {

    {/* use the useEffect hook to call the blog function and clean it up when the component unmounts */}
    useEffect(() => {
        const cleanup = blog(); // call the blog function and store the return value in cleanup
        return cleanup; // return the cleanup function so it can be called when the component unmounts
      }, []);
    
    return (
        <section className="blog">
            <h2 className='name'>Blog</h2>

            {/* Blog posts filter */}
            <div className='filter'>
                <div className='filter-item active' data-filter="all">All</div>
                <div className='filter-item' data-filter="life">Life</div>
                <div className='filter-item' data-filter="study">Study</div>
            </div>

            {/* Blog posts */}
            <div className="blog-container">
                <div className="post">
                    <img src={blog1} alt="blog1" />
                    <h3 className="category">Life</h3>
                    <div className="title">
                        Passion in life: Daily Jogging at Campus
                    </div>
                    <span className="date">Oct.3, 2024</span>
                    <p className="brief">
                        Morning runs on campus, feeling the fresh air fill my lungs. The golden sunlight gently warms my skin...
                    </p>
                    <Link to="/Post1" className="read-more">Read more</Link>
                </div>
        
                <div className="post">
                    <img src={blog2} alt="blog2" />
                    <h3 className="category">Life</h3>
                    <div className="title">
                        Aesthetic Shot: Make-up, Flower and Inner Beauty
                    </div>
                    <span className="date">Oct.3, 2024</span>
                    <p className="brief">
                        I always use makeup to hide the flaws on face but not realize the beauty of inner power...
                    </p>
                    <Link to="/Post2" className="read-more">Read more</Link>
                </div>

                <div className="post">
                    <img src={blog3} alt="blog3" />
                    <h3 className="category">Life</h3>
                    <div className="title">
                        Power and Precision: Portait of an Aspirational Professional Youth
                    </div>
                    <span className="date">Oct.3, 2024</span>
                    <p className="brief">
                        The business-type protrait taken in my dorm showing my confidence and authority while wearing a suit...
                    </p>
                    <Link to="/Post3" className="read-more">Read more</Link>
                </div>

                <div className="post">
                    <img src={blog4} alt="blog4" />
                    <h3 className="category">Study</h3>
                    <div className="title">
                        Drink for Thought: Stage Photo 1 - Disucssing Process
                    </div>
                    <span className="date">Oct.23, 2024</span>
                    <p className="brief">
                        We are sitting in the cafeteria to discuss the topic of our video project...
                    </p>
                    <Link to="/Post4" className="read-more">Read more</Link>
                </div>

                <div className="post">
                    <img src={blog5} alt="blog5" />
                    <h3 className="category">Study</h3>
                    <div className="title">
                        Drink for Thought: Stage Photo 2 - Filming Process
                    </div>
                    <span className="date">Nov.7, 2024</span>
                    <p className="brief">
                        We are shooting a commerialized advertising video regarding apple juice as the selling product...
                    </p>
                    <Link to="/Post5" className="read-more">Read more</Link>
                </div>
            </div>
                
            {/* Blog comments */}
            <AddPostForm />
            <PostLists />
        </section>
  )
}

export default Blog