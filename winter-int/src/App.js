import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navigation from './Navigation.js';
import Main from './Main.js';
import Info from './Info.js';
import CTA from './CTA.js';
import Footer from './Footer.js';
import Signup from './Signup.js';
import Example from './Example.js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

library.add(fab, faGithub);

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Route exact path='/' component={Main} />
        <Route path='/example' component={Example} />
        <Route path='/signup' component={Signup} />
        <Route path='/info' component={Info} />
        <CTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
