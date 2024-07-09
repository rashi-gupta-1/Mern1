import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  // Handling the input values
  const handleInput = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5006/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.info("Registration Successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register", error);
      toast.error("Failed to register. Please try again later."); // Handle network or server errors
    }
  };

  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-center min-vh-100">
            <div className="col-8">
              <div className="card register-card">
                <div className="card-body">
                  <h2 className="card-title text-center mb-4 mt-3">
                    <b>Create Your Account</b>
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        name="username"
                        placeholder="Full Name*"
                        required
                        value={user.username}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="email"
                        className="form-control"
                        autoComplete="off"
                        name="email"
                        placeholder="Enter your email*"
                        required
                        value={user.email}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        placeholder="Enter your phone no.*"
                        required
                        value={user.phone}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password*"
                        required
                        value={user.password}
                        onChange={handleInput}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-submit col-12 mb-4"
                    >
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />{" "}
      {/* Render ToastContainer at the end of your component */}
    </>
  );
};
