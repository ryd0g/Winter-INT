import 'bootstrap/dist/css/bootstrap.min.css';

function Info() {
  return (
    <section id='features'>
      <div class='container mb-5 mt-5 pb-5 pt-5'>
        <h2 class='features-title text-center'>WHAT WE'RE ABOUT</h2>
        <div class='row m-5'>
          <div class='col-lg-4' data-aos='zoom-in' data-aos-duration='1100'>
            <h3>Who We Are</h3>
            <p class='lead'>
              PortFinder is a website founded by two front-end developers, Ryan and Luis.
              As students going to the same college, we found that some of the
              greatest difficulties came from trying to make a name for ourselves.
              Not only that, but coming up with a vision to really show who we are
              to the world was one of the main challenges that led to the creation
              of PortFinder.
            </p>
          </div>
          <div class='col-lg-4' data-aos='zoom-in' data-aos-duration='1100'>
            <h3>What We Do</h3>
            <p class='lead'>
              On PortFinder, we're concered about being able to connect a prospective
              worker to potential employers in a way that immediately connects the two
              on a professional yet personable level. To that end, we are committed to
              creating an experience that bridges the gap between the two.
            </p>
          </div>
          <div class='col-lg-4' data-aos='zoom-in' data-aos-duration='1100'>
            <h3>Why It Matters</h3>
            <p class='lead'>
              A portfolio is critical nowadays in the workforce. It isn't just about
              showing where you learned, or even what you learned, but what you can do
              with what you've learned. By showing people examples of your work, you make
              yourself a far more sought after candidate for a job that could change your life.
              Don't sell yourself short, go above and beyond, and show everyone what you're made of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
