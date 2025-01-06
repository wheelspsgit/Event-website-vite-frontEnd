import { useState } from "react";
import circle from "../assets/PNG/Ellipse 1.png";
import axiosInstance from "../API/axios/axiosInstance";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
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
      setLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-between w-full max-w-6xl mx-auto p-10 space-x-8">
      {/* Left Section */}
      <div className="flex flex-col max-w-md">
        <h1 className="text-4xl font-bold text-white mb-6">
          Roll the Carpet.!
        </h1>
        <div className="flex justify-center items-center space-x-4">
          <button className="border-2 border-white px-6 py-2 text-white text-lg rounded-md hover:bg-white hover:text-black transition-all">
            Skip the lag ?
          </button>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="relative flex flex-col items-center justify-center space-y-6">
        <img
          className="absolute top-1/4 left-10 transform -translate-x-1/2 opacity-70 w-72 h-72"
          src={circle}
          alt="Decorative Circle"
        />
        <div className="bg-gradient-to-r from-[#843E71] to-[#feffbb] p-8 rounded-lg shadow-xl w-full max-w-md relative z-10">
          <h2 className="text-2xl font-semibold text-center text-white">
            Signup
          </h2>
          <p className="text-center text-sm text-white opacity-70 mb-6">
            Just some details to get you in.!
          </p>
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
              type="email"
              placeholder="Email / Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md hover:opacity-90 transition-all"
            >
              {loading ? "Signing Up..." : "Signup"}
            </button>
          </form>

          <div className="text-center mt-6">
            <div className="flex items-center justify-center space-x-2">
              <span className="w-16 h-px bg-gray-400"></span>
              <p className="text-sm text-white">Or</p>
              <span className="w-16 h-px bg-gray-400"></span>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <i className="fab fa-google text-red-500 cursor-pointer"></i>
              <i className="fab fa-facebook-f text-blue-600 cursor-pointer"></i>
              <i className="fab fa-github text-gray-700 cursor-pointer"></i>
            </div>
            <p className="text-sm text-white mt-4">
              Already Registered?{" "}
              <a href="/login" className="text-indigo-400 hover:underline">
                Login
              </a>
            </p>
          </div>

          <div className="mt-6 text-center text-sm text-white opacity-60">
            <a href="#">Terms & Conditions</a> | <a href="#">Support</a> |{" "}
            <a href="#">Customer Care</a>
          </div>
        </div>

        <img
          className="absolute top-3/4 left-80 transform -translate-x-1/2 opacity-70 w-56 h-56"
          src={circle}
          alt="Decorative Circle"
        />
      </div>
    </div>
  );
};

export default SignUp;
