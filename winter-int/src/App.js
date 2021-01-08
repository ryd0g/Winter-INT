import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navigation from './Navigation.js';
import Main from './Main.js';
import Info from './Info.js';
import Footer from './Footer.js';

library.add(fab, faGithub);

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Main />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
