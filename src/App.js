import React, { Component } from "react";
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/home' render={(props) => (
          <LandingPage {...props}/>
        )}/>
        <Route path='/projects' render={(props) => (
          <ProjectsPage {...props}/>
        )}/>
          <Route path='/about' render={(props) => (
          <AboutPage {...props}/>
        )}/>
          <Route path='/contact' render={(props) => (
          <ContactPage {...props}/>
        )}/>
        <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}

export default App;