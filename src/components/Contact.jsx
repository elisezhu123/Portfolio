import React from 'react';

/* Import CSS */
import './Contact.css';

/* Import Image */
import contactimg from '../assets/img/contact.png';

const Contact = () => {
  return (
    <section id="contact-me" className="contact">
        <h2>Contact Form</h2>
        <div className="message">
            <div className="box">

                {/* checkbox unchecked*/}
                <input type="checkbox" id="message" className="input" name=''/>

                <div className="content">
                    <div className="left">
                        <div className="contact-info">
                            <div className="title">
                                <h1>Let's Work Together</h1>
                                <p className='text'> 
                                    If you have any questions or comments, feel free to ask me via email or phone.
                                </p>
                            </div>

                            {/* contact form */}
                            <form action="index.html" method="post" className="contact-form">
                                
                                {/* first name */}
                                <div className="input-wrap">
                                    <input 
                                        className="contact-input" 
                                        type="text" 
                                        autoComplete="off" 
                                        name="First Name"
                                    />
                                    <label>First Name</label>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPVJREFUSEvFlsENhCAQRQeogujBUijFUrYUS7EUDxKqADZzwAAZXYZdslz04MyDz/+CgMFDDO4PBcA5t3jvjRBi6QHHGA+l1K61PlJ9ATjPc+1tnhoiZJ7njQRYa189M69rpmm6+hQreAJIKXcAOHD5zjkTQjB3k2EDsLnWGgHXeIKwAXlBIqAhQggrtQo2QEq55c5ITe8k7QGMlQhnnPYBpQEAlOd3m8y1LluiPET4/imMLAAVf4SgTfFJSdUMoPxfy0XloQnQ0jzB6n9YK4D0PrXhdeiaAFR6n9yUh64JwLVm/v3/AMMPnOFH5je639UOv1W8AVuYvhkPIdINAAAAAElFTkSuQmCC"/>
                                </div>

                                {/* last name */}
                                <div className="input-wrap textarea">
                                    <input 
                                        className="contact-input" 
                                        type="text" 
                                        autoComplete="off" 
                                        name="Last Name"
                                    />
                                    <label>Last Name</label>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPVJREFUSEvFlsENhCAQRQeogujBUijFUrYUS7EUDxKqADZzwAAZXYZdslz04MyDz/+CgMFDDO4PBcA5t3jvjRBi6QHHGA+l1K61PlJ9ATjPc+1tnhoiZJ7njQRYa189M69rpmm6+hQreAJIKXcAOHD5zjkTQjB3k2EDsLnWGgHXeIKwAXlBIqAhQggrtQo2QEq55c5ITe8k7QGMlQhnnPYBpQEAlOd3m8y1LluiPET4/imMLAAVf4SgTfFJSdUMoPxfy0XloQnQ0jzB6n9YK4D0PrXhdeiaAFR6n9yUh64JwLVm/v3/AMMPnOFH5je639UOv1W8AVuYvhkPIdINAAAAAElFTkSuQmCC"/>
                                </div>

                                {/* email */}
                                <div className="input-wrap br">
                                    <input 
                                        className="contact-input" 
                                        type="email" 
                                        autoComplete="off" 
                                        name="Email"
                                    />
                                    <label>Email</label>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvdlc0NhCAQhQWrMHigFEqxlC3FUijFg4YqRPM2jpklizoaLnoy48x8vPlBVRV+VOH81YsAIQQ7z7NTStknZVuWZajr2jdNMyDPXqJxHLunyelggLRt2/8Apmn6wKC17okuVYIqxBg7xBljvvl2BQTYIJDoJQCe/BQghYQQXIzR8QNlFWitPTnj/UwJ7x2PzQLwIZX7ry85Hyr1IYCkculcDbfziUGcCICAFALbUQnFgBRC6nLjfAuwQbDh2HbLNzUd5duAqzvxYkDxy674dX21iVK/F/0ypdKv+q++xdwZXLsP2AAAAABJRU5ErkJggg=="/>
                                </div>
                                
                                {/* message */}
                                <div className="input-wrap br">
                                    <textarea 
                                        className="contact-input" 
                                        autoComplete="off" 
                                        name="Message" 
                                    />
                                    <label>Message</label>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPhJREFUSEvtVUsOgjAQbYelrkmaksgpXLP2AK49ijeRU7hm7SkwgQxh7bZgxliChDblG2PsBjKF9968dF45W3jxhfFZQ4CIoVIq4pyHU0jruk49z0uEECnhNARZlp2mgmthRBIEQfxBkOf5mQpSytdz7OriNB38LkFZlluyy/f9R9s2U32QRYi4r6rqQMAAcBVC3OjdVKc9Z4KiKDZKqSNjbPdWfpdSXkx13d33ENismMWi/xzoRFhvkm1hp9W4Jm5v2Nl+BoDYNcqNcd13avTQtPcAgLI+cT1l1hutTdBVNhvBWGAtwNoBIkZD7Ojrar1L39XTod89AakA9hlKIhFOAAAAAElFTkSuQmCC"/>
                                </div>
                            </form>
                            </div>
                        </div>

                        {/* contact image */}
                        <div className="right">
                            <img src={contactimg} alt="contact"/>
                        </div>
                        <label htmlFor ="message" className='label'></label>
                    </div>

                    {/* check box checked*/}
                    <label htmlFor="message" className="form"></label>
                </div>
            </div>
        </section>
  )
}

export default Contact