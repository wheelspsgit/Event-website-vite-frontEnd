import { useState } from "react";
import axiosInstance from "../API/axios/axiosInstance"; // Make sure axiosInstance is correctly set up
import "../style/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // For storing error messages
  const [isLoading, setIsLoading] = useState(false); // For handling loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors and loading state
    setError("");
    setIsLoading(true);

    try {
      // Ensure the correct URL "/auth/login" as per your documentation
      const response = await axiosInstance.post("/api/v1/auth/login", {
        username,
        password,
      });

      console.log("Login successful:", response.data);

      // Storing token in localStorage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
        }
      } else {
        setError("No token received. Please try again.");
      }

      // Redirect after login
      window.location.href = "/dashboard"; // You can also use React Router to redirect instead of window.location
    } catch (error) {
      console.error("Login failed:", error);

      // Display error message based on response or network error
      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      // Stop loading state
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <h1>Welcome Back .!</h1>
          <div className="left-side-skip">
            <button className="skip-btn">Skip the lag ?</button>
            <div className="dashed-border"></div>
          </div>
        </div>

        <div className="right-side">
          <div className="circle-top"></div>
          <div className="login">
            <h2>Login</h2>
            <p>{"Glad you're back.!"}</p>

            {/* Show error message if exists */}
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="remember-forgot">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />{" "}
                  Remember me
                </label>
              </div>
              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"}
              </button>
              <a href="#" className="forget">
                Forgot password?
              </a>
            </form>
            <div className="or-line">
              <div className="line"></div>
              <p>Or</p>
              <div className="line"></div>
            </div>
            <div className="social-login">
              <i className="fab fa-google"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-github"></i>
            </div>
            <p className="donNot">
              {"Don't have an account?"} <a href="/SignUp">Signup</a>
            </p>
          </div>
          <div className="circle-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
