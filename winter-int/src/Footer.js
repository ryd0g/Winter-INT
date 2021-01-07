import 'bootswatch/dist/sandstone/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <section id='footer'>
      <div class='footer bg-primary p-4 text-white'>
        &copy; Ryan Lee, Luis Ventura 2020
        <a
          class='btn btn-social-icon btn-github'
          href='https://github.com/ryd0g'
          target='blank'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          class='btn btn-social-icon btn-github'
          href='https://github.com/VenturingGuy'
          target='blank'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
}

export default Footer;
