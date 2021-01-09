import './Main.css';
import { NavLink } from 'react-router-dom';

function Main() {
  return (
    <div class='jumbotron'>
      <h1 class='display-3'>PortFinder</h1>
      <h2>Find the right portfolio for the right hire.</h2>
      <button class='btn btn-dark'>
        <NavLink
          className='nav-link'
          activeClassName='nav-link-active'
          to='/info'>
          More Info
        </NavLink>
      </button>
    </div>
  );
}

export default Main;
