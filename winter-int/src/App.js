import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navigation from './Navigation.js';
import Footer from './Footer.js';

library.add(fab, faGithub);

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
