import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../store/Auth";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = e => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5006/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      if (response.ok) {
        setContact(defaultContactFormData);

        console.log(data);
        toast.info("Message sent successfully");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <main id="main">
        {/* 
<!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="breadcrumb-hero">
            <div className="container">
              <div className="breadcrumb-hero">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <ol>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Contact</li>
            </ol>
          </div>
        </section>
        {/* <!-- End Breadcrumbs -->

<!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
                <form onSubmit={handleSubmit} className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="name"
                        placeholder="UserName"
                        required
                        value={contact.username}
                        onChange={handleInput}
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={contact.email}
                        onChange={handleInput}
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                      value={contact.message}
                      onChange={handleInput}
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      <ToastContainer /> {/* <!-- End #main --> */}
    </>
  );
};
