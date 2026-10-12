import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-small-text">
          PREMIUM BARBERSHOP
        </p>

        <h1>
          LOOK SHARP.
          <br />
          <span>FEEL CONFIDENT.</span>
        </h1>

        <p className="hero-description">
          Precision cuts, clean fades and premium grooming
          for men who care about their style.
        </p>

        <div className="hero-buttons">
          <Link to="/booking" className="primary-btn">
            Book Appointment
          </Link>

          <Link to="/services" className="secondary-btn">
            Explore Services
          </Link>
        </div>

      </div>

      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;