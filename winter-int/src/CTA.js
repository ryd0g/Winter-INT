import 'bootstrap/dist/css/bootstrap.min.css';
import './CTA.css';

function CTA() {
  return (
    <section id='CTA'>
      <div class='jumbotron text-center mb-0'>
        <div class='d-flex justify-content-center'>
          <form class='form-inline'>
            <label for='message'>Any questions or comments?</label>
            <textarea
              class='form-control mb-2 mr-sm-2'
              id='message'
              rows='4'></textarea>
            <button class='btn btn-dark mb-2' id='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
