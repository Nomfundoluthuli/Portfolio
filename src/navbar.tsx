import './navbar.css'
const navbar = () => {
    
    return (
        <header className="hero-header">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <a className="navbar-brand" href="#">MYPRO</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resume">Resume</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
          {/* Hero Section */}
          <div className="container hero-content">
            <div className="row align-items-center">
              <div className="col-md-6 hero-text">
                <h1>Hi There!</h1>
                <h2>I am <span>Nomfundo Luthuli</span></h2>
                <p>I make the complex simple.</p>
                <a href="#contact" className="btn btn-primary">Contact Me</a>
              </div>
              <div className="col-md-6 hero-image">
                <img src="professional black woman in suit.jpg" alt="Developer" />
              </div>
            </div>
          </div>
    
          {/* Contact Info */}
          <div className="container contact-info text-center mt-4">
            <div className="row">
              <div className="col-md-4">
                <p>Email: nomfundoluthuli790@gami.com</p>
              </div>
              <div className="col-md-4">
                <p>Phone: +27 812700078</p>
              </div>
              <div className="col-md-4">
                <p>Location: South African,johannesburg</p>
              </div>
            </div>
          </div>
        </header>
      );
    }
    
export default navbar
