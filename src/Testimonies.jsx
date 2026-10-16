const testimonials = [
    {
        id: 1,
        name: "David",
        service: "Low Fade",
        rating: "6",
        comment: "Excellent haircut and friendly service!"
    },
    {
       id: 2,
        name: "Micheal",
        service: "Beard Grooming",
        rating: "4",
        comment: "Very professional. I loved results." 
    },
    {
        id: 3,
        name: "Daniel",
        service: "Classic Cut",
        rating: "5",
        comment: "Great experience and attention to details"
    }
]

function Testimonies(){
    return(
        <section className="testimonials-section">
            <div className="testimonies-container">

                <h2>What Our Clients Say</h2>

                <p className="testimonials-subtitle">
                    Real feedback makes every cut worth it.
                </p>

                <div className="testimonials-grid">
                    {testimonials.map((review) => (
                        <article className="testimonial-card" key={review.id}>
                            <div className="testimonial-stars">
                                {"★".repeat(review.rating)}
                                {"☆".repeat(6 - review.rating)}
                            </div>
                            
                            <p className="testimonial-comment">
                                "{review.comment}"
                            </p>

                            <div className="testimonial-customer">
                                <h3>{review.name}</h3>
                                <span>{review.service}</span>
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonies