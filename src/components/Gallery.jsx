
const galleryImages = [
  {
    id: 1,
    title: "The Fade",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Classic Cut",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Beard Style",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Precision",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id:5,
    title: "Taper fade afro",
    image:
      "https://midtaprfade.com/wp-content/uploads/2026/07/Low-Mid-Fade-with-Beard-Connect.webp"
  },
  {
    id:6,
    title: "360 Waves with Mid Taper Fade",
    image:
      "https://midtaprfade.com/wp-content/uploads/2026/07/360-Waves-with-Mid-Taper-Fade.webp"
  },

];


function Gallery({ searchStyle }) {
  const filtered = galleryImages.filter((style) =>
    style.title
      .toLowerCase()
      .includes(searchStyle.trim().toLowerCase())
  );

  return (
    <section className="gallery section" id="gallery">
      <div className="section-heading">
        <p>OUR WORK</p>
        <h2>
          FRESH <span>LOOKS</span>
        </h2>
        <div className="gallery-line"></div>
      </div>

      <div className="gallery-grid">
        {filtered.length > 0 ? (
          filtered.map((style) => (
            <div className="gallery-item" key={style.id}>
              <img src={style.image} alt={style.title} />

              <div className="gallery-overlay">
                <h3>{style.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>
            No hairstyles found matching "{searchStyle}".
          </p>
        )}
      </div>
    </section>
  );
}

export default Gallery;
