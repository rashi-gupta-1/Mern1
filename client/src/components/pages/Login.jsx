import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5006/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.info("Login Successfully"); // Show success toast
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        ); // Show error toast
        console.log("invalid credentials");
      }
    } catch (error) {
      console.log("login", error);
      toast.error("Failed to login. Please try again later."); // Handle network or server errors
    }
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-5">
            <div className="card register-card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4 mt-3">
                  <b>Login Now</b>
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      className="form-control"
                      autoComplete="off"
                      name="email"
                      placeholder="Email"
                      required
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="password"
                      className="form-control"
                      autoComplete="off"
                      name="password"
                      placeholder="Password"
                      required
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-submit col-12 mb-4"
                  >
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />{" "}
      {/* Render ToastContainer at the end of your component */}
    </>
  );
};
