import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import Dashboard from "../views/Dashboard";
import Events from "../views/Events";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
