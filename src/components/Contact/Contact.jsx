import React from 'react';


export default class Contact extends React.Component {
    state = {
      name: "",
      email: "",
      content: "",
    }; 

    handleForm = (e) => {
      this.setState({ [e.target.name]: e.target.value }) 
    }; 

    handleClick = async (e) => {
        e.preventDefault();
        try {
        let fetchResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({ 
            name: this.state.name,
            email: this.state.email,
            content: this.state.content,
         })
        })
         let serverResponse = await fetchResponse.json()
         console.log("SUCCESS YES")
         this.setState({
             name: "",
             email: "",
             content: "",
         })
         console.log("AHHHHHHHHH")
         console.log("We send")
        } catch (err) {
            console.log(err)
        }
    }

    render() {
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
                    Name: <input name="name" value={this.state.name} onChange={this.handleForm}></input><br />
                    Email: <input name="email" value={this.state.email} onChange={this.handleForm}></input><br />
                    Message: <textarea name="content" value={this.state.content} onChange={this.handleForm}></textarea><br />
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        </div>
    )
    } 
}