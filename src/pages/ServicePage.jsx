
import { Link } from "react-router-dom";


const serviceCategories = [
  {
    id: 1,
    number: "01",
    title: "Precision Haircuts",
    description:
      "From clean fades to timeless classic cuts, every style is shaped around your look.",
    services: ["Low & Mid Fades", "Taper Cuts", "Classic Haircuts"],
    icon: "✂",
  },
  {
    id: 2,
    number: "02",
    title: "Beard Grooming",
    description:
      "Keep your beard neat and defined with careful trimming, shaping and finishing.",
    services: ["Beard Trim", "Beard Shaping", "Line-up"],
    icon: "⌁",
  },
  {
    id: 3,
    number: "03",
    title: "Premium Packages",
    description:
      "Combine your haircut and beard grooming for a complete, polished look.",
    services: ["Haircut & Beard", "Full Grooming", "Special Occasion Styling"],
    icon: "✦",
  },
  {
    id: 4,
    number: "04",
    title: "Hair & Scalp Care",
    description:
      "Extra care and finishing touches to complete your grooming experience.",
    services: ["Hair Wash", "Scalp Care", "Styling Finish"],
    icon: "◈",
  },
];

const priceList = [
  { id: 1, name: "Classic Haircut", detail: "A clean, timeless cut", price: 3000 },
  { id: 2, name: "Low or Mid Fade", detail: "A carefully blended fade", price: 4000 },
  { id: 3, name: "Taper Cut", detail: "A neat, detailed taper", price: 3500 },
  { id: 4, name: "Beard Trim", detail: "Trim and shape", price: 1500 },
  { id: 5, name: "Haircut & Beard", detail: "A complete grooming combo", price: 5000 },
  { id: 6, name: "Premium Grooming", detail: "Haircut, beard and finishing", price: 6500 },
];

const barbers = [
  {
    id: 1,
    name: "Senior Barber",
    specialty: "Fades & Precision Cuts",
    description:
      "Focused on clean blends, sharp details and styles tailored to each client.",
    initials: "SB",
  },
  {
    id: 2,
    name: "Grooming Specialist",
    specialty: "Beard Design & Styling",
    description:
      "Dedicated to neat beard shapes, balanced lines and polished finishes.",
    initials: "GS",
  },
  {
    id: 3,
    name: "Style Barber",
    specialty: "Classic & Modern Styles",
    description:
      "Bringing classic barbering techniques together with contemporary styles.",
    initials: "ST",
  },
];

function ServicePage() {
  const formatPrice = (price) =>
    `₦${price.toLocaleString("en-NG")}`;

  return (
    <main className="service-page">
      {/* HERO */}
      <section className="service-page-hero">
        <div className="service-page-hero-content">
          <span className="service-eyebrow">
            THE ART OF GROOMING
          </span>

          <h1>
            More Than a Cut.
            <span> It's Your Signature.</span>
          </h1>

          <p>
            Discover precision barbering, personalised grooming
            and attention to detail designed around your style.
          </p>

          <Link to="/booking" className="service-page-button">
            Book Your Experience
            <span aria-hidden="true"> ↗</span>
          </Link>
        </div>

        <div className="service-hero-mark" aria-hidden="true">
          <span>B</span>
          <span className="service-hero-mark-line" />
          <span>F</span>
        </div>
      </section>

      {/* SERVICE CATEGORY CARDS */}
      <section className="service-categories section">
        <div className="service-page-heading">
          <span className="service-eyebrow">WHAT WE OFFER</span>
          <h2>Crafted Around Your Style</h2>
          <p>
            Every service starts with your preferences and finishes
            with attention to the smallest details.
          </p>
        </div>

        <div className="service-category-grid">
          {serviceCategories.map((category) => (
            <article className="service-category-card" key={category.id}>
              <div className="service-card-top">
                <span className="service-card-number">
                  {category.number}
                </span>
                <span className="service-category-icon" aria-hidden="true">
                  {category.icon}
                </span>
              </div>

              <h3>{category.title}</h3>
              <p>{category.description}</p>

              <ul>
                {category.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>

              <Link to="/booking" className="service-card-link">
                Explore & Book <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* DETAILED PRICE LIST */}
      <section className="service-price-section section">
        <div className="service-page-heading">
          <span className="service-eyebrow">THE SERVICE MENU</span>
          <h2>Our Prices</h2>
          <p>
            Quality grooming with clear, straightforward pricing.
          </p>
          <p className="service-price-notice">
            Sample prices for design purposes — replace with confirmed
            shop prices before publishing.
          </p>
        </div>

        <div className="service-price-list">
          {priceList.map((item) => (
            <div className="service-price-row" key={item.id}>
              <div className="service-price-info">
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>

              <span className="service-price-value">
                {formatPrice(item.price)}
              </span>
            </div>
          ))}

          <p className="service-price-footnote">
            Final prices may vary depending on the service requested.
            Please confirm pricing when booking.
          </p>
        </div>
      </section>

      {/* BARBER TEAM */}
      <section className="service-team section">
        <div className="service-page-heading">
          <span className="service-eyebrow">THE PEOPLE BEHIND THE CUT</span>
          <h2>Meet Our Barbers</h2>
          <p>
            Skilled hands, a personal approach and pride in every detail.
          </p>
        </div>

        <div className="service-team-grid">
          {barbers.map((barber) => (
            <article className="service-barber-card" key={barber.id}>
              <div className="service-barber-avatar" aria-hidden="true">
                {barber.initials}
              </div>

              <span className="service-barber-label">
                OUR TEAM
              </span>

              <h3>{barber.name}</h3>
              <span className="service-barber-specialty">
                {barber.specialty}
              </span>

              <p>{barber.description}</p>
            </article>
          ))}
        </div>

        <p className="service-team-notice">
          These are placeholder profiles. Update them with your actual
          barbers' names, photos and specialties.
        </p>
      </section>

      {/* BOOKING CALL TO ACTION */}
      <section className="service-booking-cta">
        <span className="service-eyebrow">YOUR NEXT LOOK STARTS HERE</span>
        <h2>Ready for a Fresh Look?</h2>
        <p>
          Choose your service and let us help you look your best.
        </p>

        <Link to="/booking" className="service-page-button">
          Book an Appointment <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default ServicePage;
