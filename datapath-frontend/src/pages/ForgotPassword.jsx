import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import logo from "../assets/logo.png";
import emailIcon from "../assets/emailIcon.png";

export default function ForgotPassword() {

  const navigate = useNavigate();

  return (
    <div className="forgotPage">

      <div className="logo">
        <div className="logoIcon">
          <img src={logo} alt="logo" />
        </div>
        <span>DataPath</span>
      </div>

      <div className="forgotCard">
        <h2>Forgot your password?</h2>
        <p className="subtitle">
          Enter your email so that we can send you password reset link
        </p>

        <label>Email</label>
        <div className="input-group">
          <img src={emailIcon} alt="email icon" className="inIcon"/>
          <input type="email" placeholder="name@example.com" />
        </div>

        <button 
          className="sendEmail-btn"
        >
          Send Email
        </button>

        <p className="footer">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>
            Create an account
          </span>
        </p>

      </div>
    </div>
  );
}