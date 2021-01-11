import 'bootstrap/dist/css/bootstrap.min.css';
import './Example.css';

function Example() {
  return (
    <section id='portfolio'>
      <div id='custom-intro' class='jumbotron'>
        <h2>Roger Smith</h2>
        <h5>Front End Web Developer</h5>
      </div>
      <div class='skills'>
        <h3>Skills</h3>
        <ul>
          Front End Web Development
          <ul>
            <li>HTML, CSS, JS - 3 years</li>
            <li>Bootstrap - 2 years</li>
            <li>React - 1 year</li>
          </ul>
        </ul>
      </div>
      <div class='links'>
        <h4>Links / Contact</h4>
        <div class="link-display">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <p>Email: RogerTheNegotiator@paradigm.net</p>
        </div>
      </div>
    </section>
  );
}

export default Example;
