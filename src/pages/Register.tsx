import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <div className="auth-logo">🩸</div>

          <h1>রক্তবিন্দু মানবিক সংগঠন</h1>
          <p>(RBMS)</p>

          <span>একসাথে আগামীর পথে ❤️</span>
        </div>

        <div className="auth-card">

          <div className="auth-heading">
            <h2>রক্তদাতা নিবন্ধন</h2>
            <p>
              মানবতার সেবায় আপনার তথ্য দিয়ে যুক্ত হোন
            </p>
          </div>

          <form>

            {/* নাম */}
            <div className="form-group">
              <label>পূর্ণ নাম *</label>
              <input
                type="text"
                placeholder="আপনার পূর্ণ নাম লিখুন"
                required
              />
            </div>

            {/* ফোন */}
            <div className="form-group">
              <label>মোবাইল নম্বর *</label>
              <input
                type="tel"
                placeholder="০১XXXXXXXXX"
                required
              />
            </div>

            {/* ইমেইল */}
            <div className="form-group">
              <label>ইমেইল</label>
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
              />
            </div>

            {/* রক্তের গ্রুপ */}
            <div className="form-group">
              <label>রক্তের গ্রুপ *</label>

              <select required>
                <option value="">
                  রক্তের গ্রুপ নির্বাচন করুন
                </option>
                <option value="A+">A+</option>
                <option value="A-">A−</option>
                <option value="B+">B+</option>
                <option value="B-">B−</option>
                <option value="O+">O+</option>
                <option value="O-">O−</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB−</option>
              </select>
            </div>

            {/* বয়স */}
            <div className="form-group">
              <label>বয়স *</label>

              <input
                type="number"
                min="18"
                placeholder="আপনার বয়স"
                required
              />
            </div>

            {/* লিঙ্গ */}
            <div className="form-group">
              <label>লিঙ্গ</label>

              <select>
                <option value="">
                  নির্বাচন করুন
                </option>
                <option value="male">পুরুষ</option>
                <option value="female">নারী</option>
                <option value="other">অন্যান্য</option>
              </select>
            </div>

            {/* জেলা */}
            <div className="form-group">
              <label>জেলা *</label>

              <input
                type="text"
                placeholder="আপনার জেলার নাম"
                required
              />
            </div>

            {/* উপজেলা */}
            <div className="form-group">
              <label>উপজেলা / থানা *</label>

              <input
                type="text"
                placeholder="উপজেলা / থানার নাম"
                required
              />
            </div>

            {/* বর্তমান ঠিকানা */}
            <div className="form-group">
              <label>বর্তমান অবস্থান</label>

              <input
                type="text"
                placeholder="আপনার বর্তমান এলাকার নাম"
              />
            </div>

            {/* শেষ রক্তদান */}
            <div className="form-group">
              <label>সর্বশেষ রক্তদানের তারিখ</label>

              <input type="date" />
            </div>

            {/* কতবার রক্তদান */}
            <div className="form-group">
              <label>এ পর্যন্ত কতবার রক্তদান করেছেন?</label>

              <input
                type="number"
                min="0"
                placeholder="যেমন: ৫"
              />
            </div>

            {/* জরুরি যোগাযোগ */}
            <div className="form-group">
              <label>জরুরি যোগাযোগের নম্বর</label>

              <input
                type="tel"
                placeholder="জরুরি প্রয়োজনে যোগাযোগের নম্বর"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>পাসওয়ার্ড *</label>

              <div className="password-field">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন"
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

            {/* Terms */}
            <label className="terms">
              <input type="checkbox" required />

              <span>
                আমি নিশ্চিত করছি যে উপরের তথ্যগুলো সঠিক
                এবং প্রয়োজনে রক্তদানে সম্মত আছি।
              </span>
            </label>

            <button
              type="submit"
              className="auth-submit"
            >
              ❤️ নিবন্ধন করুন
            </button>

          </form>

          <div className="auth-footer">
            <p>
              ইতিমধ্যে অ্যাকাউন্ট আছে?
            </p>

            <Link to="/login">
              লগইন করুন
            </Link>
          </div>

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

export default Register;