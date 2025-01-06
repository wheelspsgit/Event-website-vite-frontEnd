import { useState } from "react";
import "../style/SignUp.css";
import circle from "../assets/PNG/Ellipse 1.png";
import axiosInstance from "../API/axios/axiosInstance";

const SignUp = () => {
  // State for storing form input values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // لتحميل البيانات أثناء الطلب
  const [error, setError] = useState(null); // لحفظ رسائل الخطأ

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من مطابقة كلمة المرور
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true); // بدء التحميل
    setError(null); // إعادة تعيين الخطأ

    try {
      // إرسال البيانات إلى API
      const response = await axiosInstance.post("/auth/StudentSignUp", {
        username,
        email,
        password,
      });

      console.log("Signup successful:", response.data);
      alert("Signup successful! Please login.");
    } catch (err) {
      console.error("Error during signup:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false); // إيقاف التحميل
    }
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
      </div>

      {/* Right Section with Form */}
      <div className="form-section-wrapper">
        <img className="circle-image" src={circle} alt="Decorative Circle" />

        <div className="form-section">
          <h2>Signup</h2>
          <p>Just some details to get you in.!</p>
          {error && <p className="error-message">{error}</p>} {/* عرض الخطأ */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email / Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Signup"}
            </button>
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
