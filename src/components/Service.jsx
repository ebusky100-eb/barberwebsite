const services = [
  {
    number: "01",
    title: "Classic Haircut",
    description:
      "A clean, timeless haircut tailored to your face and personal style.",
    price: "₦5,000",
  },
  {
    number: "02",
    title: "Skin Fade",
    description:
      "A sharp skin fade blended perfectly from the sides to the top.",
    price: "₦6,000",
  },
  {
    number: "03",
    title: "Haircut & Beard",
    description:
      "Complete grooming with a precision haircut and professionally shaped beard.",
    price: "₦8,000",
  },
  {
    number: "04",
    title: "Premium Grooming",
    description:
      "The complete experience with haircut, beard treatment and finishing.",
    price: "₦12,000",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="section-heading">
        <p>WHAT WE DO</p>

        <h2>
          OUR <span>SERVICES</span>
        </h2>

        <div className="heading-line"></div>
      </div>

      <div className="services-grid">

        {services.map((service) => (
          <article className="service-card" key={service.number}>

            <span className="service-number">
              {service.number}
            </span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-bottom">
              <strong>{service.price}</strong>

              <a href="#booking">
                Book →
              </a>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Services;