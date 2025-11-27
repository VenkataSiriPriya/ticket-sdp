import React, { useState } from 'react';

export default function CustomerHome() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark" : ""}> {/* Apply dark mode class */}
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <h2>Book Your Tickets Hassle-Free!</h2>
          <p>Movies, Events, and Travel – all in one place.<br />Easy booking, best prices, and secure payments.</p>
          <a href="#booking" className="hero-btn">Book Now</a>
        </div>
      </section>

     <section id="booking" className="booking">
        <h3>Book Your Ticket</h3>
        <div className="booking-options">
          <a href="/viewallevents">🎬 Movies</a>
          <a href="/travel">🚗 Travel</a>
          <a href="/viewallevents">🎟️ Events</a>
        </div>
      </section>

      {/* Popular Movies & Events */}
      <section id="popular">
        <h3>Popular Movies & Events</h3>
        <div className="popular-list">
          <div className="item">
            <img src="https://blog.flicks.co.nz/wp-content/uploads/50-guy-movies-collage.jpg" alt="Movie 1" />
            <p>Movie Title</p>
          </div>
          <div className="item">
            <img src="https://img.freepik.com/free-photo/black-silhouettes-music-concert-poster-concept_1194-617147.jpg?semt=ais_hybrid&w=740" alt="Concert" />
            <p>Live Concert</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">1️⃣ Choose your event, movie, or trip</div>
          <div className="step">2️⃣ Select your seats or ticket type</div>
          <div className="step">3️⃣ Make a secure payment</div>
          <div className="step">4️⃣ Get your e-ticket instantly</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h3>What Our Customers Say</h3>
        <blockquote>"This platform is amazing! Booking tickets is so easy!"</blockquote>
        <cite>- Rahul Sharma</cite>
      </section>

      {/* Description Section */}
      <section id="description" className="bg-slate-100 py-12 text-center">
        <p className="text-lg text-slate-700 mb-4 max-w-2xl mx-auto">
          We provide an easy and secure way to book your favorite tickets online.
        </p>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
          Enjoy a seamless experience with multiple payment options and instant e-tickets.
        </p>
      </section>

      {/* Contact & Support Section */}
      <section id="contact">
        <div className="contact-container">
          <h3>Need Help?</h3>
          <p>Describe your issue below, and our team will assist you as soon as possible.</p>
          <form>
            <input type="text" id="query" name="query" placeholder="Enter your query..." required />
            <button type="submit" className="hero-btn">Submit & Contact Support</button>
          </form>
        </div>
      </section>

      {/* Footer should be at the bottom */}
      {/* <Footer /> */}
    </div>
  );
}
