import { useState } from "react";
import "../../style/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { username, password, rememberMe });
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <button type="submit" className="login-btn">
                Login
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
