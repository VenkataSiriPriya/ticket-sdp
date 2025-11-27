

export default function AdminHome() 
{
  return (
    <div>
    



      <section className="hero">
        <div className="hero-content">
          {/* <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
          <h2>Admin Panel</h2>
          <br />
          <br>
          </br>
          {/* <p>ADMIN Panel<br /></p> */}
          <a href="/addeventmanager" className="hero-btn">Add Event Manager</a>
          <a href="//viewmanagers" className="hero-btn">View Managers</a>
          <a href="/viewallcustomers" className="hero-btn">View All Customers</a>
        </div>
      </section>


    </div>
  )
}
