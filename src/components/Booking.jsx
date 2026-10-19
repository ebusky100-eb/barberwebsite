import { useState } from "react";
import { Link } from "react-router-dom";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Classic Haircut",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Thanks ${formData.name}! Your ${formData.service} appointment request has been received.`
    );


    setFormData({
      name: "",
      phone: "",
      service: "Classic Haircut",
      date: "",
    });
  };

  return (
    <section className="booking section" id="booking" >

      <div className="booking-container">

        <div className="booking-info">

          <p className="booking-label">
            READY FOR A FRESH CUT?
          </p>

          <h2>
            BOOK YOUR
            <br />
            <span>APPOINTMENT.</span>
          </h2>

          <p>
            Choose your service, pick a date and let us
            handle the rest.
          </p>

        </div>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">
            <label>Your Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="08012345678"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Service</label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option>Classic Haircut</option>
               <option>Skin Fade</option>
              <option>Haircut & Beard</option>
              <option>Premium Grooming</option>
              <option></option> 

            </select>

          </div>

          <div className="input-group">
            <label>Preferred Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            <Link to="/Booking">Request Appointment →</Link>
          </button>

        </form>

      </div>

    </section>
  );
}

export default Booking;