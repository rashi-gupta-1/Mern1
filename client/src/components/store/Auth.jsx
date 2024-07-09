/* eslint-disable react/prop-types */
// Auth.jsx
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [services, setServices] = useState([]);

  const storeTokenInLS = serverToken => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser({});
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5006/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5006/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data); // Assuming data is an array of objects with properties like price, description, provider, service
      } else {
        console.error("Failed to fetch services:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, [token]); // Run when token changes

  const authContextValue = {
    isLoggedIn,
    storeTokenInLS,
    logoutUser,
    user,
    services,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContextValue;
};
