import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const Navbar = () => {
  const { isLoggedIn, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light">
            <NavLink to="/">RashiMERN</NavLink>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="dropdown">
              <NavLink to="#">
                <span>About</span> <i className="bi bi-chevron-down"></i>
              </NavLink>
              <ul>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/company">Our Company</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink activeClassName="active" to="/service">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/" onClick={handleLogout}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink activeClassName="active" to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/register">
                    Register
                  </NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink
                className="getstarted"
                activeClassName="active"
                to="/about"
              >
                Get Started
              </NavLink>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};
