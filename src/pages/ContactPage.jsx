

const contactLinks = [
  {
    name: "WhatsApp",
    handle: "+234 801 234 5678",
    description: "Chat with us directly for enquiries and appointments.",
    icon: "W",
    className: "whatsapp",
    url: "https://wa.me/2348012345678",
    button: "Chat on WhatsApp",
  },
  {
    name: "Gmail",
    handle: "bladeandfade.demo@gmail.com",
    description: "Send us a message for business enquiries.",
    icon: "✉",
    className: "gmail",
    url: "mailto:bladeandfade.demo@gmail.com",
    button: "Send an Email",
  },
  {
    name: "TikTok",
    handle: "@bladeandfade",
    description: "Discover fresh cuts, transformations and trends.",
    icon: "♪",
    className: "tiktok",
    url: "https://www.tiktok.com/@bladeandfade",
    button: "Follow on TikTok",
  },
  {
    name: "YouTube",
    handle: "@BladeAndFadeStudio",
    description: "Watch haircut videos, tutorials and our latest work.",
    icon: "▶",
    className: "youtube",
    url: "https://www.youtube.com/@BladeAndFadeStudio",
    button: "Visit YouTube",
  },
  {
    name: "Instagram",
    handle: "@bladeandfade",
    description: "Explore our haircut gallery and behind-the-scenes content.",
    icon: "◎",
    className: "instagram",
    url: "https://www.instagram.com/bladeandfade",
    button: "Follow on Instagram",
  },
  {
    name: "Facebook",
    handle: "Blade & Fade Studio",
    description: "Follow our updates and connect with our community.",
    icon: "f",
    className: "facebook",
    url: "https://www.facebook.com/bladeandfadestudio",
    button: "Visit Facebook",
  },
  {
    name: "X",
    handle: "@bladeandfade",
    description: "Stay up to date with our latest news and updates.",
    icon: "𝕏",
    className: "x",
    url: "https://x.com/bladeandfade",
    button: "Follow on X",
  },
  {
    name: "Snapchat",
    handle: "bladeandfade",
    description: "Catch casual moments and barber shop updates.",
    icon: "👻",
    className: "snapchat",
    url: "https://www.snapchat.com/",
    button: "Open Snapchat",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="contact-eyebrow">
          STAY CONNECTED
        </span>

        <h1>
          LET'S <span>CONNECT.</span>
        </h1>

        <p>
          Great cuts. Great conversations. One community.
          Reach Blade & Fade or follow our journey on your
          favourite platforms.
        </p>

        <a href="#contact-platforms" className="contact-hero-btn">
          Find Us Online <span>↗</span>
        </a>

        <div className="contact-hero-line" />
      </section>

      <section
        className="contact-platforms section"
        id="contact-platforms"
      >
        <div className="contact-section-heading">
          <span className="contact-eyebrow">
            WE'RE JUST A MESSAGE AWAY
          </span>

          <h2>
            FIND YOUR <span>CONNECTION.</span>
          </h2>

          <p>
            Have a question, want to book a cut, or just want
            to see our latest styles? Choose your platform.
          </p>
        </div>

        <div className="contact-grid">
          {contactLinks.map((item) => (
            <article
              className="contact-card"
              key={item.name}
            >
              <div
                className={`contact-icon ${item.className}`}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <div className="contact-card-content">
                <h3>{item.name}</h3>
                <span className="contact-handle">
                  {item.handle}
                </span>

                <p>{item.description}</p>

                <a
                  className="contact-card-link"
                  href={item.url}
                  target={
                    item.name === "Gmail" ||
                    item.name === "WhatsApp"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    item.name === "Gmail" ||
                    item.name === "WhatsApp"
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  {item.button} <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-bottom">
        <span className="contact-eyebrow">
          YOUR STYLE. YOUR COMMUNITY.
        </span>

        <h2>
          STAY SHARP. <span>STAY CONNECTED.</span>
        </h2>

        <p>
          Follow Blade & Fade for fresh inspiration and
          the latest updates.
        </p>

        <a href="#contact-platforms" className="contact-hero-btn">
          Explore Our Platforms <span>↑</span>
        </a>
      </section>
    </main>
  );
}
