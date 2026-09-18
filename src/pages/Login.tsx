import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Brand */}
        <div className="auth-brand">
          <div className="auth-logo">🩸</div>

          <h1>রক্তবিন্দু মানবিক সংগঠন</h1>
          <p>(RBMS)</p>

          <span>রক্তবিন্দু মানবতার সাথে ❤️</span>
        </div>

        {/* Login Card */}
        <div className="auth-card">

          <div className="auth-heading">
            <h2>লগইন করুন</h2>
            <p>
              আপনার অ্যাকাউন্টে প্রবেশ করুন
            </p>
          </div>

          <form>

            {/* Phone / Email */}
            <div className="form-group">
              <label>
                মোবাইল নম্বর অথবা ইমেইল *
              </label>

              <input
                type="text"
                placeholder="মোবাইল নম্বর অথবা ইমেইল লিখুন"
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>পাসওয়ার্ড *</label>

              <div className="password-field">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="login-options">

              <label className="remember">
                <input type="checkbox" />
                <span>আমাকে মনে রাখুন</span>
              </label>

              <button
                type="button"
                className="forgot-password"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </button>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="auth-submit"
            >
              🔐 লগইন করুন
            </button>

          </form>

          {/* Register */}
          <div className="auth-footer">
            <p>
              আপনার কি এখনো অ্যাকাউন্ট নেই?
            </p>

            <Link to="/register">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </Link>
          </div>

          {/* Home */}
          <div className="back-home">
            <Link to="/">
              ← হোম পেজে ফিরে যান
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;