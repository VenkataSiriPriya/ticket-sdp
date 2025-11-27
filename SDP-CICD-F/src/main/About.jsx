import React from 'react';

export default function About() {
  return (
    <div>
      <section id="booking" className="booking">
        <h3>About us We provide an easy and secure way to book your favorite tickets online.</h3>
        <div className="booking-options">
          <a href="/movies">🎬 Movies</a>
          <a href="/travel">🚗 Travel</a>
          <a href="/events">🎟️ Events</a>
        </div>
      </section>

      <section id="description" className="bg-slate-100 py-12 text-center">
        <p className="text-lg text-slate-700 mb-4 max-w-2xl mx-auto">
          We provide an easy and secure way to book your favorite tickets online.
        </p>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
          Enjoy a seamless experience with multiple payment options and instant e-tickets.
        </p>
      </section>
    </div>
  );
}
