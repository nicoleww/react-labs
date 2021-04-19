import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';


export default function LandingPage(props){

    return (
    <>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <Landing />
    </>
    );

}