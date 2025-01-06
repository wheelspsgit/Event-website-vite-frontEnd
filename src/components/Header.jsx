import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom

  const handleLogin = () => {
    navigate("/login"); // Navigate to the Login page
  };

  const handleRegister = () => {
    navigate("/signup"); // Navigate to the SignUp page
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#843E71] to-[#feffbb] text-white">
      <div className="text-xl font-bold ml-10">Yalla Shabab</div>
      <nav className="space-x-8">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
      </nav>
      <div className="space-x-4 mr-10">
        {/* Login Button with navigation */}
        <button
          onClick={handleLogin} // Handle navigation when clicked
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
        >
          Login
        </button>

        {/* Register Button with navigation */}
        <button
          onClick={handleRegister} // Handle navigation when clicked
          className="px-4 py-2 bg-[#843E71] rounded hover:bg-[#ca8eba]"
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
