
import { useState } from "react";

// Replace this with your business WhatsApp number.
// Nigeria example format: 2348012345678
const WHATSAPP_NUMBER = "2349036174991";

// Replace with your business email address.
const BUSINESS_EMAIL = "ebukaugochukwu100@gmail.com";

const services = [
  "Classic Haircut",
  "Low Fade",
  "Mid Fade",
  "High Skin Fade",
  "Taper Fade",
  "Haircut & Beard",
  "Beard Grooming",
  "Kids Haircut",
  "Other",
];

const hairstyles = [
  "Low Fade",
  "Mid Fade",
  "High Skin Fade",
  "Low Taper",
  "Mid Taper",
  "Textured Crop",
  "Classic Side Part",
  "Buzz Cut",
  "Haircut & Beard Combo",
  "Beard Lineup",
  "Not Sure Yet",
  "Other",
];

const barbers = [
  "Any Available Barber",
  "Senior Barber",
  "Grooming Specialist",
  "Style Barber",
];

function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    hairstyle: "",
    date: "",
    time: "",
    barber: "Any Available Barber",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Prevent selecting a date in the past.
  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+()\d\s-]{7,20}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.service) {
      newErrors.service = "Please select a service.";
    }

    if (!form.hairstyle) {
      newErrors.hairstyle = "Please choose a hairstyle.";
    }

    if (!form.date) {
      newErrors.date = "Please select a preferred date.";
    } else if (form.date < minDate) {
      newErrors.date = "Please choose today or a future date.";
    }

    if (!form.time) {
      newErrors.time = "Please choose a preferred time.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function buildMessage() {
    return [
      "💈 BLADE & FADE — APPOINTMENT REQUEST",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service}`,
      `Preferred Hairstyle: ${form.hairstyle}`,
      `Preferred Date: ${form.date}`,
      `Preferred Time: ${form.time}`,
      `Preferred Barber: ${form.barber}`,
      `Additional Notes: ${form.notes.trim() || "None"}`,
      "",
      "Please confirm whether this appointment is available.",
    ].join("\n");
  }

  function handleWhatsAppSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    const message = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleEmailSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    const subject = encodeURIComponent(
      "New Blade & Fade Appointment Request"
    );
    const body = encodeURIComponent(buildMessage());

    window.location.href =
      `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="booking-page">
      <section className="booking-hero">
        <span className="booking-eyebrow">
          YOUR NEXT LOOK STARTS HERE
        </span>

        <h1>
          Book Your <span>Appointment</span>
        </h1>

        <p>
          Tell us what style you want, choose your preferred
          date and time, and send your request directly to us.
        </p>
      </section>

      <section className="booking-layout">
        <div className="booking-intro">
          <span className="booking-eyebrow">THE BLADE & FADE EXPERIENCE</span>

          <h2>Your Style Deserves Attention.</h2>

          <p>
            Complete the form with your details and the look
            you have in mind. We will review your request and
            confirm availability with you.
          </p>

          <div className="booking-info-card">
            <span className="booking-info-icon">01</span>
            <div>
              <h3>Choose Your Service</h3>
              <p>Select the grooming service and hairstyle you want.</p>
            </div>
          </div>

          <div className="booking-info-card">
            <span className="booking-info-icon">02</span>
            <div>
              <h3>Pick Your Time</h3>
              <p>Tell us when you would prefer to visit.</p>
            </div>
          </div>

          <div className="booking-info-card">
            <span className="booking-info-icon">03</span>
            <div>
              <h3>Send Your Request</h3>
              <p>We will contact you to confirm your appointment.</p>
            </div>
          </div>
        </div>

        <form
          className="booking-form"
          onSubmit={handleWhatsAppSubmit}
          noValidate
        >
          <div className="booking-form-heading">
            <span className="booking-eyebrow">RESERVATION DETAILS</span>
            <h2>Appointment Form</h2>
            <p>Fields marked * are required.</p>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-name">Full Name *</label>
            <input
              id="booking-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
            {errors.name && (
              <small className="booking-error">{errors.name}</small>
            )}
          </div>

          <div className="booking-field">
            <label htmlFor="booking-phone">Phone Number *</label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. 08012345678"
              autoComplete="tel"
              required
            />
            {errors.phone && (
              <small className="booking-error">{errors.phone}</small>
            )}
          </div>

          <div className="booking-field">
            <label htmlFor="booking-service">Service *</label>
            <select
              id="booking-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <small className="booking-error">{errors.service}</small>
            )}
          </div>

          <div className="booking-field">
            <label htmlFor="booking-hairstyle">Preferred Hairstyle *</label>
            <select
              id="booking-hairstyle"
              name="hairstyle"
              value={form.hairstyle}
              onChange={handleChange}
              required
            >
              <option value="">Choose your hairstyle</option>
              {hairstyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
            {errors.hairstyle && (
              <small className="booking-error">{errors.hairstyle}</small>
            )}
          </div>

          <div className="booking-field-row">
            <div className="booking-field">
              <label htmlFor="booking-date">Preferred Date *</label>
              <input
                id="booking-date"
                name="date"
                type="date"
                min={minDate}
                value={form.date}
                onChange={handleChange}
                required
              />
              {errors.date && (
                <small className="booking-error">{errors.date}</small>
              )}
            </div>

            <div className="booking-field">
              <label htmlFor="booking-time">Preferred Time *</label>
              <input
                id="booking-time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                required
              />
              {errors.time && (
                <small className="booking-error">{errors.time}</small>
              )}
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-barber">Preferred Barber</label>
            <select
              id="booking-barber"
              name="barber"
              value={form.barber}
              onChange={handleChange}
            >
              {barbers.map((barber) => (
                <option key={barber} value={barber}>
                  {barber}
                </option>
              ))}
            </select>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-notes">
              Additional Notes <span>(Optional)</span>
            </label>
            <textarea
              id="booking-notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Describe your desired cut or any special requests..."
              rows={4}
              maxLength={500}
            />
            <small className="booking-character-count">
              {form.notes.length}/500 characters
            </small>
          </div>

          <p className="booking-disclaimer">
            This is an appointment request, not a confirmed booking.
            We will confirm your date and time after checking availability.
          </p>

          <button
            type="submit"
            className="booking-submit booking-whatsapp"
          >
            Send Request via WhatsApp <span>↗</span>
          </button>

          <button
            type="button"
            className="booking-submit booking-email"
            onClick={handleEmailSubmit}
          >
            Send Request via Email <span>↗</span>
          </button>
        </form>
      </section>
    </main>
  );
}

export default BookingPage;
