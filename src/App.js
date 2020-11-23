import React from 'react';
import {BrowserRouter as Router, Route , Switch, Redirect, Link } from 'react-router-dom';

import pp from './components/pp.png';

import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import About from './pages/About';
import BlogPage from './pages/BlogPage';

function App(props) {
    return (
    <Router>
      <Switch>
        <center className="App">
          <div className="background-container">
            <div className="background"></div>
            <div className="background-shade"></div>
            <div className="profile-container">
              <img src={pp} alt="My Fucking Face" className="profile-picture" />
              <div className="profile-name">Jaagrav Seal</div>
              <div className="profile-desc">Web Developer & UX Engineer</div>
              <br />
              <div className="socials">
                <a href="https://github.com/Jaagrav" target="_blank"><abbr title="My Github" className="fab fa-github"></abbr></a>
                <a href="https://dev.to/jaagrav" target="_blank"><abbr title="My Dev" className="fab fa-dev"></abbr></a> 
                <a href="https://linkedin.com/in/Jaagrav" target="_blank"><abbr title="My LinkedIn" className="fab fa-linkedin"></abbr></a>
                <a href="https://instagram.com/xJaagrav" target="_blank"><abbr title="My Instagram" className="fab fa-instagram"></abbr></a>
                <a href="https://twitter.com/xJaagrav" target="_blank"><abbr title="My Twitter" className="fab fa-twitter"></abbr></a>
              </div>
            </div>
          </div>
          <div className="container">
              <div className="tabs">
                <Link to="/projects" className="projects-link">PROJECTS</Link>
                <Link to="/stories" className="blogs-link open">STORIES</Link>
                <Link to="/about" className="about-link">ABOUT</Link>
              </div>
                <Route exact path="/stories" component={Blogs} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
                <Route exact path="/stories/:storyName" component={BlogPage} />
                <Redirect to="/stories" />
          </div>
          <div className="footer">
            Written by Jaagrav
          </div>
        </center>
      </Switch>
    </Router>
  );
}

export default App;
