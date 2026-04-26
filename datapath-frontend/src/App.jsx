import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Lesson from "./pages/Lesson.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/lesson">Lesson</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

