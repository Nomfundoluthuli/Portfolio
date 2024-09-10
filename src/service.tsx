import './service.css'

const Services = () => {
  return (
    <section className="services py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5">My Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box text-center">
              <i className="bi bi-code-slash"></i>
              <h3>Web Development</h3>
              <p>Make us of HTML,CSS,JavaScript and many more </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box text-center">
              <i className="bi bi-pen"></i>
              <h3>UX/UI Design</h3>
              <p>I use figma as well as canva </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box text-center">
              <i className="bi bi-phone"></i>
              <h3>Event Planner</h3>
              <p>Decorate, Catering  and making an necessary preparation for upcoming event.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;