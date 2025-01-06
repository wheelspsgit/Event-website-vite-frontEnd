import { useState } from "react";
import axiosInstance from "../API/axios/axiosInstance";

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

      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="flex w-full max-w-screen-xl mx-auto p-6 space-x-8">
        {/* Left Section */}
        <div className="w-2/3 max-w-md text-white">
          <h1 className="text-5xl font-semibold mb-6">Welcome Back.!</h1>
          <div className="flex items-center space-x-4">
            <button className="border-2 border-white px-6 py-3 text-white rounded-md hover:bg-white hover:text-black transition">
              Skip the lag?
            </button>
            <div className="w-1/2 h-1 border-t-2 border-dashed border-gray-400"></div>
          </div>
        </div>

        {/* Right Section with Login Form */}
        <div className="relative w-1/3 bg-gradient-to-br from-[#530061] to-[#350169] p-8 rounded-lg shadow-xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tl from-[#0d0a30] to-[#530061] rounded-full opacity-30 -translate-x-1/2 translate-y-16"></div>
          <div className="relative z-10">
            <h2 className="text-2xl text-center text-white font-semibold">
              Login
            </h2>
            <p className="text-center text-white opacity-70 mb-4">
              {"Glad you're back.!"}
            </p>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex items-center justify-between">
                <label className="text-white">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  Remember me
                </label>
                <a href="#" className="text-sm text-indigo-400 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md hover:opacity-90 transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </form>

            <div className="flex items-center justify-center space-x-2 my-6">
              <div className="w-1/4 h-0.5 bg-gray-400"></div>
              <p className="text-sm text-gray-400">Or</p>
              <div className="w-1/4 h-0.5 bg-gray-400"></div>
            </div>

            {/* Social Login */}
            <div className="flex justify-center space-x-4 mb-4">
              <i className="fab fa-google text-red-500 cursor-pointer hover:text-red-400 transition"></i>
              <i className="fab fa-facebook-f text-blue-600 cursor-pointer hover:text-blue-500 transition"></i>
              <i className="fab fa-github text-gray-500 cursor-pointer hover:text-gray-400 transition"></i>
            </div>

            <p className="text-center text-white opacity-70 text-sm">
              {"Don't have an account?"}{" "}
              <a href="/SignUp" className="text-indigo-400 hover:underline">
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
