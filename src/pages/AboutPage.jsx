
import { Link } from "react-router-dom";


const values = [
  {
    number: "01",
    title: "Precision",
    description:
      "Every detail matters. We focus on clean lines, balanced fades, and carefully finished cuts.",
  },
  {
    number: "02",
    title: "Craftsmanship",
    description:
      "We treat barbering as a craft, combining technique, creativity, and attention to detail.",
  },
  {
    number: "03",
    title: "Confidence",
    description:
      "Our goal is to help every client leave feeling refreshed, confident, and ready for anything.",
  },
];

const highlights = [
  { number: "01", label: "Personalized Service" },
  { number: "02", label: "Attention to Detail" },
  { number: "03", label: "A Premium Experience" },
];

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="about-eyebrow">THE BLADE & FADE STORY</span>

        <h1>
          More Than a Cut.
          <br />
          <span>A Standard of Style.</span>
        </h1>

        <p>
          We believe a great haircut is more than a fresh look.
          It is confidence, character, and the freedom to express
          who you are.
        </p>

        <div className="about-hero-line" />
      </section>

      <section className="about-story">
        <div className="about-story-image">
          <img
            src="/images/gallery/barber.jpg"
            alt="Barber carefully working on a client's haircut"
            loading="lazy"
          />
          <span className="about-image-caption">
            THE ART OF THE CRAFT
          </span>
        </div>

        <div className="about-story-content">
          <span className="about-eyebrow">WHO WE ARE</span>

          <h2>
            Built on Skill.
            <br />
            Defined by Detail.
          </h2>

          <p>
            Blade & Fade is built around a simple idea: every
            client deserves a haircut that feels personal.
          </p>

          <p>
            From timeless classic cuts to modern fades and
            carefully shaped beards, we focus on understanding
            your style and bringing your vision to life.
          </p>

          <p>
            We combine attention to detail, a welcoming
            atmosphere, and a passion for the craft to make
            every visit feel worthwhile.
          </p>

          <Link to="/services" className="about-text-link">
            Explore Our Services <span>→</span>
          </Link>
        </div>
      </section>

      <section className="about-mission">
        <span className="about-eyebrow">OUR MISSION</span>

        <h2>
          Great Style Starts
          <br />
          with the <span>Details.</span>
        </h2>

        <p>
          Our mission is to deliver thoughtful, high-quality
          grooming with consistency, creativity, and respect
          for every client's individual style.
        </p>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <span className="about-eyebrow">WHAT WE STAND FOR</span>
          <h2>Our Values</h2>
          <p>
            The principles behind every cut, every conversation,
            and every visit.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.number}>
              <span className="about-value-number">
                {value.number}
              </span>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-experience">
        <div className="about-experience-content">
          <span className="about-eyebrow">
            THE BLADE & FADE EXPERIENCE
          </span>

          <h2>
            Your Style.
            <br />
            Our Craft.
          </h2>

          <p>
            Whether you know exactly what you want or need
            inspiration for a new look, we focus on making
            your grooming experience comfortable, personal,
            and professional.
          </p>

          <Link to="/booking" className="about-book-btn">
            Book Your Appointment <span>→</span>
          </Link>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <div className="about-highlight" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="about-final-cta">
        <span className="about-eyebrow">COME EXPERIENCE THE DIFFERENCE</span>

        <h2>Ready for Your Next Look?</h2>

        <p>
          Make time for yourself. Let us help you find your style.
        </p>

        <Link to="/booking" className="about-book-btn">
          Book Your Cut <span>→</span>
        </Link>
      </section>
    </main>
  );
}

export default AboutPage;
