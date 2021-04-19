import React from 'react';


function Contact(props) {
    return (
        <div className="Contact">
            <div className="text">
                <h3>I'd love to connect!</h3>
                <p>Whether it's a job opportunity, a project, or just to chat: 
                    please reach out.</p>
            </div>
            <div className="links">
                <a href="https://github.com/nicoleww"><img src="https://i.imgur.com/v80G3JX.png" /></a>
                <a href="https://www.linkedin.com/in/nicolewitherall/"><img src="https://i.imgur.com/5EV5x7u.png" /></a>
                <a href="mailto: nicwitherall@gmail.com"><img src="https://i.imgur.com/tCoO5ZJ.png" /></a>
            </div>
            <div className="form-container">
                <form>
                    Name: <input name="name"></input><br />
                    Email: <input name="email"></input><br />
                    Message: <textarea name="content"></textarea><br />
                    <button onClick={() => {props.handleEmail()}}>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Contact;