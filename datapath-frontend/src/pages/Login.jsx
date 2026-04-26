import React, {useState} from 'react';
import "./Login.css";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import emailIcon from "../assets/emailIcon.png";
import lockIcon from "../assets/lockIcon.png";
import hidePass from "../assets/hidePass.png";
import showPass from "../assets/showPass.png";

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className = "loginPage">

      <div className = "logo">
        <div className = "logoIcon">
          <img src={logo} alt="logo" />
        </div>
        <span>DataPath</span>
      </div>

      <div className = "loginCard">
        <h2>Welcome Back</h2>
        <p className = "subtitle">Log in to your account to continue</p>

        <label>Email</label>
        <div className = "input-group">
          <img src={emailIcon} alt="email icon" className = "inIcon"/>
          <input type = "email" placeholder = "name@example.com" />
        </div>

        <label>Password</label>
        <div className = "input-group">
          <img src={lockIcon} alt="lock" className="inIcon" />
          <input type = {showPassword ? "text" : "password"}
          placeholder = "••••••••" />
          <img
            src={showPassword ? showPass : hidePass}
            alt="toggle"
            className="inIcon"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <div className="forgot" 
        onClick={() => navigate("/forgotpassword")}
        >Forgot Password?</div>

        <button className="login-btn"
        onClick={() => navigate("/home")}
        >Log In</button>

        <p className="footer">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>
            Create an account
          </span>
        </p>

      </div>
    </div>
  )
}
