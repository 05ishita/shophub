function About() {
  return (
    <div className="page">

      <section className="about-section">

        <h1>About ShopHub</h1>

        <p className="subtitle">
          A modern React e-commerce application built to practice real-world
          frontend development concepts.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h2>🚀 Project Goal</h2>

            <p>
              ShopHub is designed to simulate a real online shopping
              experience. It demonstrates API integration, routing,
              state management, filtering, searching, and responsive UI.
            </p>
          </div>

          <div className="about-card">
            <h2>⚡ Features</h2>

            <ul>
              <li>Browse Products</li>
              <li>Live Search</li>
              <li>Category Filter</li>
              <li>Price Sorting</li>
              <li>Wishlist</li>
              <li>Shopping Cart</li>
              <li>Responsive Design</li>
            </ul>
          </div>

<div className="page">
    <h1>About ShopHub</h1>

    <p>
        This project is built using React, Redux,
        Context API and FakeStore API.
    </p>
</div>

<div className="page">
    <h1>Contact Us</h1>

    <p>Email : support@shophub.com</p>

    <p>Phone : +91 9876543210</p>
</div>

          <div className="about-card">
            <h2>🛠 Built With</h2>

            <div className="tech-list">
              <span>React</span>
              <span>React Router</span>
              <span>Redux Toolkit</span>
              <span>Context API</span>
              <span>Axios</span>
              <span>React Toastify</span>
              <span>CSS3</span>
              <span>FakeStore API</span>
            </div>
          </div>

          <div className="about-card">
            <h2>👩‍💻 Developer</h2>

            <p>
              Developed by <strong>Ishita</strong> as a portfolio project to
              strengthen React fundamentals and frontend development skills.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default About;