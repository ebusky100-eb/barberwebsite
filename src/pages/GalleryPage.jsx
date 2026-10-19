
import { useState } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    id: 1,
    title: "Low Fade",
    category: "Fades",
    image: "/images/gallery/low-fade.jpg",
  },
  {
    id: 2,
    title: "Mid Fade",
    category: "Fades",
    image: "/images/gallery/mid-fade.jpg",
  },
  {
    id: 3,
    title: "High Skin Fade",
    category: "Fades",
    image: "/images/gallery/high-skin-fade.jpg",
  },
  {
    id: 4,
    title: "Low Taper",
    category: "Tapers",
    image: "/images/gallery/low-taper.jpg",
  },
  {
    id: 5,
    title: "Mid Taper",
    category: "Tapers",
    image: "/images/gallery/mid-taper.jpg",
  },
  {
    id: 6,
    title: "Textured Taper",
    category: "Tapers",
    image: "/images/gallery/textured-taper.jpg",
  },
  {
    id: 7,
    title: "Classic Side Part",
    category: "Classic Cuts",
    image: "/images/gallery/classic-side-part.jpg",
  },
  {
    id: 8,
    title: "Textured Crop",
    category: "Classic Cuts",
    image: "/images/gallery/textured-crop.jpg",
  },
  {
    id: 9,
    title: "Buzz Cut",
    category: "Classic Cuts",
    image: "/images/gallery/buzz-cut.jpg",
  },
  {
    id: 10,
    title: "Sharp Beard Lineup",
    category: "Beard Styles",
    image: "/images/gallery/sharp-beard-lineup.jpg",
  },
  {
    id: 11,
    title: "Faded Beard",
    category: "Beard Styles",
    image: "/images/gallery/faded-beard.jpg",
  },
  {
    id: 12,
    title: "Haircut & Beard",
    category: "Beard Styles",
    image: "/images/gallery/haircut-beard-combo.jpg",
  },
];

const categories = [
  "All Cuts",
  "Fades",
  "Tapers",
  "Classic Cuts",
  "Beard Styles",
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Cuts");

  const filteredImages =
    activeCategory === "All Cuts"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="gallery-page">
      <section className="gallery-page-hero">
        <span className="gallery-page-eyebrow">
          THE BLADE & FADE COLLECTION
        </span>

        <h1>
          Every Cut Tells <span>a Story.</span>
        </h1>

        <p>
          Explore precision cuts, fresh fades and timeless styles
          crafted with skill, passion and attention to detail.
        </p>

        <div className="gallery-page-hero-line"></div>
      </section>

      <section className="gallery-page-content">
        <div className="gallery-page-heading">
          <div>
            <span className="gallery-page-eyebrow">
              OUR WORK
            </span>
            <h2>Explore the Gallery</h2>
          </div>

          <p>
            Find your next look.
            <br />
            Leave the details to us.
          </p>
        </div>

        <div
          className="gallery-page-filters"
          aria-label="Filter gallery by haircut category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-page-grid">
          {filteredImages.map((item) => (
            <article
              className="gallery-page-card"
              key={item.id}
            >
              <div className="gallery-page-image-wrap">
                <img
                  src={item.image}
                  alt={`${item.title} haircut at Blade & Fade`}
                  className="gallery-page-image"
                  loading="lazy"
                />

                <div className="gallery-page-image-overlay">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="gallery-page-empty">
            No styles found in this category yet.
          </p>
        )}

        <p className="gallery-page-count">
          Showing {filteredImages.length}{" "}
          {filteredImages.length === 1 ? "style" : "styles"}
        </p>
      </section>

      <section className="gallery-page-cta">
        <span className="gallery-page-eyebrow">
          YOUR NEXT LOOK STARTS HERE
        </span>

        <h2>Ready for a Fresh Cut?</h2>

        <p>
          Bring your style inspiration. Our barbers will take care
          of the rest.
        </p>

        <Link to="/booking" className="gallery-page-book-btn">
          Book Your Appointment
          <span aria-hidden="true"> →</span>
        </Link>
      </section>
    </main>
  );
}

export default GalleryPage;
