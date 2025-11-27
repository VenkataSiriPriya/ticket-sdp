import React from 'react'

export default function ManagerHome() {
  return (
    <div>

<section className="hero">
        <div className="hero-content">
          {/* <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
          <h2>Manager  Panel</h2>
          <br />
          <br>
          </br>
          {/* <p>ADMIN Panel<br /></p> */}
          <a href="/addevent" className="hero-btn">Add Event</a>
          <a href="/addevent" className="hero-btn">Add Movie</a>
          <a href="/viewbookings" className="hero-btn">View Bookings</a>
          <a href="/viewallcustomers" className="hero-btn">View All Customers</a>



        </div>
      
      </section>

      


    </div>
    
    
  )
}
