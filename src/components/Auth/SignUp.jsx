import { useState } from "react";
import "../../style/SignUp.css";
import circle from "../../assets/PNG/Ellipse 1.png";

const SignUp = () => {
  // State for storing form input values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log({ username, email, password, confirmPassword });
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="text-section">
        <h1>Roll the Carpet.!</h1>
        <div className="dashed-line-wrapper">
          <button className="cta-button">Skip the lag ?</button>
          <span className="dashed-line"></span>
        </div>
        {/* <div className="left-side-skip">
          <button className="skip-btn">Skip the lag ?</button>
          <div className="dashed-border"></div>
        </div> */}
      </div>

      {/* Right Section with Form */}
      <div className="form-section-wrapper">
        <img className="circle-image" src={circle} alt="Decorative Circle" />

        <div className="form-section">
          <h2>Signup</h2>
          <p>Just some details to get you in.!</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email / Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit">Signup</button>
          </form>

          <div className="social-login-section">
            <div className="line-wrapper">
              <span className="line"></span>
              <p>Or</p>
              <span className="line"></span>
            </div>
            <div className="social-login">
              <i className="fab fa-google"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-github"></i>
            </div>
            <p className="already-registered">
              Already Registered? <a href="/login">Login</a>
            </p>
            <div className="footer-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Support</a>
              <a href="#">Customer Care</a>
            </div>
          </div>
        </div>

        <img className="circle-image-2" src={circle} alt="Decorative Circle" />
      </div>
    </div>
  );
};

export default SignUp;
