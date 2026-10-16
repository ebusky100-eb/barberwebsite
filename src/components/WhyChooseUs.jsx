const cards = [
    {

    }
]

function WhyChooseUs(){
    return(
        <section className="why-choose-us">
            <div className="why-container">
               

                <h2>Why <span> Choose</span> Us</h2>

                <div className="heading-line"></div>

                <p className="why-description">
                    More than a haircut. it's your style, your confidence.
                </p>

                <div className="features-grid">

                    <div className="feature-card">
                        <div className="icon-box">✂️</div>
                        <h3>Skilled Barbers</h3>
                        <p>Careful cuts tailored to your preferred style.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon-box">🧼</div>
                        <h3>Clean & Hygienic</h3>
                        <p>Clean tools and a tidy workspace.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon-box">🎯</div>
                        <h3>Attention to Details</h3>
                        <p>Care with every line and finish.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon-box">🛋️</div>
                        <h3>Comfortable Space</h3>
                        <p>A welcoming barbershop experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs
