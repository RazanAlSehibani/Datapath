import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import logo from "../assets/logo.png";
import emailIcon from "../assets/emailIcon.png";
import lockIcon from "../assets/lockIcon.png";
import hidePass from "../assets/hidePass.png";
import showPass from "../assets/showPass.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="loginPage">
      <main className="loginContent">
        <button
          type="button"
          className="loginLogoBox"
          onClick={() => navigate("/")}
          aria-label="Go to home page"
        >
          <img src={logo} alt="DataPath logo" className="loginLogoImage" />
        </button>

        <section className="loginCard">
          <h1>Welcome Back</h1>
          <p className="loginSubtitle">Log in to your account to continue</p>

          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="loginFormGroup">
              <label htmlFor="login-email">Email</label>

              <div className="loginInputGroup">
                <img
                  src={emailIcon}
                  alt=""
                  aria-hidden="true"
                  className="loginInputIcon"
                />

                <input
                  id="login-email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="loginFormGroup">
              <label htmlFor="login-password">Password</label>

              <div className="loginInputGroup">
                <img
                  src={lockIcon}
                  alt=""
                  aria-hidden="true"
                  className="loginInputIcon"
                />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="loginPasswordToggle"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img
                    src={showPassword ? showPass : hidePass}
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <button
              type="button"
              className="loginForgotButton"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
            </button>

            <button type="submit" className="loginButton">
              Log In
            </button>
          </form>

          <p className="loginFooter">
            Don&apos;t have an account?{" "}
            <button type="button" onClick={() => navigate("/signup")}>
              Create an account
            </button>
          </p>
        </section>
      </main>
    </div>
  );
}