// Service.jsx
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const Service = () => {
  const { services } = useAuth();

  // Handle loading state
  if (!services || !Array.isArray(services)) {
    return <div>Loading...</div>; // or any loading indicator component
  }

  return (
    <>
      <main id="main">
        {/* Breadcrumbs */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="breadcrumb-hero">
            <div className="container">
              <div className="breadcrumb-hero">
                <h2>Services</h2>
                <p>
                  Est dolorum ut non facere possimus quibusdam eligendi
                  voluptatem. Quia id aut similique quia voluptas sit quaerat
                  debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo
                  harum praesentium.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <ol>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Services</li>
            </ol>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <div className="row">
              {services.map((service, index) => (
                <div className="col-md-6" key={index}>
                  <div className="icon-box" data-aos="fade-up">
                    <div className="icon">
                      <i
                        className="bi bi-briefcase"
                        style={{ color: "#ff689b" }}
                      ></i>
                    </div>
                    <h4 className="title">{service.provider}</h4>
                    <p>{service.price}</p>
                    <h2>{service.service}</h2>
                    <p className="description">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Features</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              {/* Features cards */}
              {/* Example cards, replace with your actual content */}
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div
                  className="card"
                  style={{ backgroundImage: "url(assets/img/features-1.jpg)" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <NavLink to="">Our Mission</NavLink>
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <div className="read-more">
                      <NavLink to="#">
                        <i className="bi bi-arrow-right"></i> Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional feature cards */}
              {/* Add more feature cards as needed */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
