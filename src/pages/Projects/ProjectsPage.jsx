import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

let projects = [     
{name: "Board Gamer", img:"https://i.imgur.com/xmCqa56.png",
desc: "Board Gamer is a full CRUD web app that allows users to browse and search for popular, community-added board games. Registered users can create reviews on board games, create new board games to the database, and add them to their wishlist. Registered users can also utilize Update and Delete functionality by editing their contributed games, deleting their entries or wishlist items. Hosted on Heroku.",
login: "username: guestlogin, password: welcome1234", tech: "Python, Django, Postgresql", github: "https://github.com/nicoleww/boardgamer", live: "https://boardgamer-the-app.herokuapp.com", button: "Live",
},
{name: "Smallr", img: "https://i.imgur.com/d9xEua5.png",
desc: "I noticed that it's difficult to find small pets for adoption rather than purchase, so I made Smallr. Smallr was designed to help shelters and rescues showcase their small pets up for adoption. Smallr is a full CRUD web application that allows users to browse small pets up for adoption or list a pet for adoption. Shelters/rescues must create an account to be able to create posts, as well as edit and/or delete their posts. Hosted on Heroku.",
login: "", tech: "Node.js, Express.js, MongoDB, Mongoose, Passport.js, Google OAuth", github: "https://github.com/nicoleww/smallr", live: "https://smallr-app.herokuapp.com", button: "Live"}, 
{name: "GlowUp", img:"https://i.imgur.com/7TacvDt.png",
desc: "Glow Up is a webapp that allows registered users to track their skincare and haircare progress through logs. Registered users can have a log of all their products, their supplements, as well as a dedicated space to add hair or skin logs with pictures to truly see if their products are making an impact for them. GlowUp was a collaboration effort, however, some of my contributions include: AWS S3 implementation, views functions for rendering data on webpages, forms, and CSS. Hosted on Heroku.",
login:"username: guestlogin, password: Welcome2GlowUp", tech: "Python, Django, Postgresql, AWS S3 Storage", github: "https://github.com/nicoleww/glow-up", live: "https://glowup-the-app.herokuapp.com", button: "Live",
},
{name: "WatchList", img:"https://i.imgur.com/1sdzlOW.png",
desc: "Watchlist is a web app that allows registered users to search for movies and add them to their own custom playlists. Users must first login with Google OAuth. After logging in, they can create their own playlists and search for movies via the OMDB api to add to their playlists. Users can then utilize full CRUD capability to edit their playlist names, delete the movies in them, or delete the whole list all together. Hosted on Heroku.",
login:"", tech: "Node.js, Express.js, OMDB API, MongoDB, Mongoose, Passport.js", github: "https://github.com/nicoleww/watchlist", live: "https://watchlist-the-app.herokuapp.com", button: "Live",
},
{name: "this.portfolio", img:"https://i.imgur.com/bocpXMc.png",
desc: "Hi! I hope you're enjoying your time on my portfolio and finding all the information you need. This portfolio was made with React to showcase my technical skills and passion as a developer. If there's anything missing or you have any feedback, I'd love to hear it!",
login: "", tech: "React, CSS, SVG Animations", github: "https://github.com/nicoleww/react-portfolio", live: "https://www.linkedin.com/in/nicolewitherall/", button: "Linkedin",
}]

export default class App extends React.Component {
  state ={
    project: projects[0],
    index: 0,
  }
  
  nextProject = () => {
    let newIndex= this.state.index + 1
    if (newIndex == projects.length) {
      newIndex = 0
    }

    this.setState({
      project: projects[newIndex],
      index: newIndex,

    })
  }

  prevProject = () => {
    let newIndex= this.state.index - 1
    if (newIndex === -1) {
      newIndex = 4
    }

    this.setState({
      project: projects[newIndex],
      index: newIndex,

    })
  }

  render() {
    return (
    <>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <Projects prevProject={this.prevProject} nextProject={this.nextProject} project={this.state.project} name={this.state.name} img={this.state.img} 
      desc={this.state.desc} login={this.state.login} tech={this.state.tech} github={this.state.github} live={this.state.live} button={this.state.button}/>
    </>
    );

}
}