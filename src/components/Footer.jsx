function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-brand">

          <a href="#home" className="logo">
            BLADE<span>&</span>FADE
          </a>

          <p>
            Precision cuts.
            <br />
            Premium confidence.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#booking">Booking</a>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <p>Lagos, Nigeria</p>
          <p>080 1234 5678</p>
          <p>hello@bladeandfade.com</p>

        </div>

        <div className="footer-column">

          <h3>Opening Hours</h3>

          <p>Mon – Fri: 9AM – 8PM</p>
          <p>Saturday: 9AM – 9PM</p>
          <p>Sunday: 12PM – 6PM</p>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Blade & Fade. All rights reserved.
        </p>

        <p>
          Designed & Built with React
        </p>
      </div>

    </footer>
  );
}

export default Footer;