import React from 'react';

export default function Home() {
    console.log('Home component loaded!')
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">IndoorSports</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">Dashboard</a>
              </li>
            </ul>
            <div>
              <a href="/login" className="btn btn-outline-primary mx-2">Login</a>
              <a href="/signup" className="btn btn-primary">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-dark text-white text-center p-5">
        <h1>Welcome to IndoorSports</h1>
        <p>Play, Train, and Excel at Your Favorite Indoor Games!</p>
        <a href="/signup" className="btn btn-warning btn-lg">Get Started</a>
      </header>

      {/* Sports Section */}
      <section className="container my-5 text-center">
        <h2>Why Choose IndoorSports?</h2>
        <p>We provide the best indoor sports facilities with world-class equipment and trainers.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://source.unsplash.com/400x300/?basketball" className="card-img-top" alt="Basketball"/>
              <div className="card-body">
                <h5 className="card-title">🏀 Basketball</h5>
                <p className="card-text">Top-quality courts with professional training.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://source.unsplash.com/400x300/?table-tennis" className="card-img-top" alt="Table Tennis"/>
              <div className="card-body">
                <h5 className="card-title">🏓 Table Tennis</h5>
                <p className="card-text">State-of-the-art tables for competitive gameplay.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://source.unsplash.com/400x300/?badminton" className="card-img-top" alt="Badminton"/>
              <div className="card-body">
                <h5 className="card-title">🏸 Badminton</h5>
                <p className="card-text">Indoor courts designed for all skill levels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        <p>© 2025 IndoorSports. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
