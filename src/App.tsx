import { useState } from "react";
import "./App.css";
import logo from "./assets/roktobindo-logo.png";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="container nav-container">

          <div className="brand" onClick={() => goTo("home")}>
            <img src={logo} alt="রক্তবিন্দু মানবিক সংগঠন" />

            <div>
              <h2>রক্তবিন্দু</h2>
              <span>মানবিক সংগঠন (RBMS)</span>
            </div>
          </div>

          <nav className="nav-menu">
            <button onClick={() => goTo("home")}>হোম</button>
            <button onClick={() => goTo("about")}>আমাদের সম্পর্কে</button>
            <button onClick={() => goTo("donor")}>রক্তদাতা</button>
            <button onClick={() => goTo("request")}>রক্তের আবেদন</button>
            <button onClick={() => goTo("contact")}>যোগাযোগ</button>
          </nav>

          <div className="nav-actions">
            <button
              className="outline-btn"
              onClick={() => setLoginOpen(true)}
            >
              লগইন
            </button>

            <button
              className="red-btn"
              onClick={() => setRegisterOpen(true)}
            >
              নিবন্ধন
            </button>
          </div>

        </div>
      </header>


      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-grid">

          <div className="hero-content">

            <div className="badge">
              🩸 মানবতার সেবায় একসাথে
            </div>

            <h1>
              এক ব্যাগ রক্ত
              <br />
              <span>একটি জীবন</span>
              <br />
              বাঁচাতে পারে
            </h1>

            <p>
              রক্তের প্রয়োজনে অসহায় মানুষের পাশে দাঁড়ানোই
              রক্তবিন্দু মানবিক সংগঠনের অন্যতম উদ্দেশ্য।
              আপনার একটি রক্তদান একজন মানুষের জীবনে
              নতুন আশার আলো জ্বালাতে পারে।
            </p>

            <div className="hero-actions">

              <button
                className="red-btn large"
                onClick={() => setRequestOpen(true)}
              >
                🩸 রক্তের আবেদন করুন
              </button>

              <button
                className="outline-btn large"
                onClick={() => setRegisterOpen(true)}
              >
                ❤️ রক্তদাতা হোন
              </button>

            </div>

            <div className="stats">

              <div>
                <strong>৭০+</strong>
                <span>স্বেচ্ছাসেবী সংগঠন</span>
              </div>

              <div>
                <strong>২০২৫</strong>
                <span>প্রতিষ্ঠার বছর</span>
              </div>

              <div>
                <strong>🩸</strong>
                <span>মানবতার সেবা</span>
              </div>

            </div>

          </div>


          <div className="hero-card">

            <div className="hero-logo">
              <img
                src={logo}
                alt="রক্তবিন্দু মানবিক সংগঠন"
              />
            </div>

            <h3>রক্তবিন্দু মানবিক সংগঠন</h3>

            <p>
              Blood Drop Humanitarian Organization
            </p>

            <div className="info-box">
              <div>
                <small>প্রতিষ্ঠা</small>
                <strong>২০ মার্চ ২০২৫</strong>
              </div>

              <div>
                <small>সেবা</small>
                <strong>রক্তদান ও মানবিক সহায়তা</strong>
              </div>
            </div>

            <div className="phone">
              📞 01327963306
            </div>

            <div className="phone">
              📞 01609077747
            </div>

            <div className="phone">
              📞 01849545428
            </div>

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">

          <div className="section-heading">
            <span>আমাদের সম্পর্কে</span>

            <h2>
              মানবতার সেবায় <b>রক্তবিন্দু</b>
            </h2>

            <p>
              মানুষের বিপদের সময়ে পাশে দাঁড়ানো এবং
              রক্তদাতা ও রক্তগ্রহীতার মধ্যে যোগাযোগ তৈরি
              করাই আমাদের অন্যতম লক্ষ্য।
            </p>
          </div>

          <div className="cards">

            <div className="card">
              <div className="card-icon">❤️</div>
              <h3>আমাদের লক্ষ্য</h3>
              <p>
                রক্তের অভাবে যেন কোনো মানুষ অসহায় না হয়।
                প্রয়োজনের সময়ে দ্রুত রক্তদাতা খুঁজে পেতে
                সহায়তা করা।
              </p>
            </div>

            <div className="card">
              <div className="card-icon">👥</div>
              <h3>স্বেচ্ছাসেবক</h3>
              <p>
                মানবিক কাজে আগ্রহী মানুষদের একত্রিত করে
                সমাজের মানুষের পাশে দাঁড়ানো।
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🩸</div>
              <h3>রক্তদান</h3>
              <p>
                নিয়মিত রক্তদানে উৎসাহিত করা এবং
                নিরাপদ ও দায়িত্বশীল রক্তদানের সচেতনতা
                তৈরি করা।
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* DONOR SEARCH */}
      <section className="section donor-section" id="donor">
        <div className="container">

          <div className="section-heading">
            <span>রক্তদাতা খুঁজুন</span>

            <h2>
              প্রয়োজনীয় <b>রক্তদাতা</b> খুঁজে নিন
            </h2>

            <p>
              রক্তের গ্রুপ ও অবস্থান দিয়ে আপনার প্রয়োজনীয়
              রক্তদাতা খুঁজে নেওয়ার ব্যবস্থা।
            </p>
          </div>

          <div className="search-card">

            <div>
              <label>রক্তের গ্রুপ</label>

              <select>
                <option value="">
                  রক্তের গ্রুপ নির্বাচন করুন
                </option>

                {bloodGroups.map((group) => (
                  <option key={group}>{group}</option>
                ))}
              </select>
            </div>

            <div>
              <label>জেলা / অবস্থান</label>

              <input
                type="text"
                placeholder="যেমন: কিশোরগঞ্জ"
              />
            </div>

            <button
              className="red-btn search-button"
              onClick={() =>
                alert(
                  "ডাটাবেজ যুক্ত করার পর এখানে সত্যিকারের রক্তদাতা দেখাবে।"
                )
              }
            >
              🔍 খুঁজুন
            </button>

          </div>

          <div className="empty-result">
            <div>🩸</div>

            <h3>রক্তদাতা খুঁজতে তথ্য দিন</h3>

            <p>
              রক্তের গ্রুপ এবং অবস্থান নির্বাচন করে
              অনুসন্ধান করুন।
            </p>
          </div>

        </div>
      </section>


      {/* BLOOD REQUEST */}
      <section className="request-section" id="request">
        <div className="container">

          <div className="request-box">

            <div>
              <span>জরুরি রক্তের প্রয়োজন?</span>

              <h2>রক্তের জন্য আবেদন করুন</h2>

              <p>
                রোগীর প্রয়োজনীয় তথ্য দিয়ে রক্তের আবেদন
                করুন। প্রয়োজনীয় রক্তদাতার সাথে যোগাযোগ
                করতে আমরা সহায়তা করব।
              </p>
            </div>

            <button
              className="white-btn"
              onClick={() => setRequestOpen(true)}
            >
              আবেদন করুন →
            </button>

          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">

          <div className="section-heading">
            <span>যোগাযোগ</span>

            <h2>
              আমাদের সাথে <b>যোগাযোগ করুন</b>
            </h2>
          </div>

          <div className="contact-grid">

            <div className="contact-card">
              <div>📞</div>
              <h3>ফোন</h3>
              <p>01327963306</p>
              <p>01609077747</p>
              <p>01849545428</p>
            </div>

            <div className="contact-card">
              <div>✉️</div>
              <h3>ইমেইল</h3>
              <p>blooddrop2025@gmail.com</p>
            </div>

            <div className="contact-card">
              <div>🌐</div>
              <h3>Facebook</h3>

              <a
                href="https://www.facebook.com/share/1CWVJrQLF5/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook Page →
              </a>

              <a
                href="https://www.facebook.com/share/g/1FX1cqbgEt/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook Group →
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="container">

          <div className="footer-brand">
            <img src={logo} alt="রক্তবিন্দু" />

            <div>
              <strong>
                রক্তবিন্দু মানবিক সংগঠন (RBMS)
              </strong>

              <span>
                মানবতার সেবায় একসাথে
              </span>
            </div>
          </div>

          <p>
            একসাথে আগামীর পথে ❤️
          </p>

          <small>
            © ২০২৫ রক্তবিন্দু মানবিক সংগঠন (RBMS)
          </small>

        </div>

      </footer>


      {/* LOGIN MODAL */}
      {loginOpen && (
        <div className="modal-bg">

          <div className="modal">

            <button
              className="close"
              onClick={() => setLoginOpen(false)}
            >
              ×
            </button>

            <img src={logo} alt="RBMS" />

            <h2>লগইন করুন</h2>

            <p>
              আপনার অ্যাকাউন্টে প্রবেশ করুন
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "ডাটাবেজ যুক্ত করার পর লগইন ব্যবস্থা চালু হবে।"
                );
              }}
            >

              <label>মোবাইল নম্বর / ইমেইল</label>

              <input
                type="text"
                placeholder="আপনার মোবাইল বা ইমেইল"
                required
              />

              <label>পাসওয়ার্ড</label>

              <input
                type="password"
                placeholder="পাসওয়ার্ড"
                required
              />

              <button className="red-btn full">
                লগইন
              </button>

            </form>

            <div className="switch-text">
              অ্যাকাউন্ট নেই?

              <button
                onClick={() => {
                  setLoginOpen(false);
                  setRegisterOpen(true);
                }}
              >
                নিবন্ধন করুন
              </button>
            </div>

          </div>
        </div>
      )}


      {/* REGISTER MODAL */}
      {registerOpen && (
        <div className="modal-bg">

          <div className="modal large-modal">

            <button
              className="close"
              onClick={() => setRegisterOpen(false)}
            >
              ×
            </button>

            <img src={logo} alt="RBMS" />

            <h2>রক্তদাতা নিবন্ধন</h2>

            <p>
              মানবতার সেবায় আপনার তথ্য দিন
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "ডাটাবেজ যুক্ত করার পর আপনার তথ্য সংরক্ষণ হবে।"
                );
              }}
            >

              <label>পূর্ণ নাম *</label>
              <input
                type="text"
                placeholder="পূর্ণ নাম"
                required
              />

              <label>মোবাইল নম্বর *</label>
              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                required
              />

              <div className="form-two">

                <div>
                  <label>রক্তের গ্রুপ *</label>

                  <select required>
                    <option value="">
                      নির্বাচন করুন
                    </option>

                    {bloodGroups.map((group) => (
                      <option key={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label>বয়স *</label>

                  <input
                    type="number"
                    placeholder="বয়স"
                    min="18"
                    required
                  />
                </div>

              </div>


              <div className="form-two">

                <div>
                  <label>জেলা *</label>

                  <input
                    type="text"
                    placeholder="জেলা"
                    required
                  />
                </div>

                <div>
                  <label>উপজেলা / থানা *</label>

                  <input
                    type="text"
                    placeholder="উপজেলা / থানা"
                    required
                  />
                </div>

              </div>


              <label>বর্তমান অবস্থান</label>

              <input
                type="text"
                placeholder="বর্তমান অবস্থান"
              />


              <label>সর্বশেষ রক্তদানের তারিখ</label>

              <input type="date" />


              <label>পাসওয়ার্ড *</label>

              <input
                type="password"
                placeholder="পাসওয়ার্ড"
                required
              />


              <label className="check">
                <input type="checkbox" required />

                <span>
                  আমি আমার তথ্য সঠিকভাবে প্রদান করেছি এবং
                  রক্তদানে সম্মত।
                </span>
              </label>


              <button className="red-btn full">
                নিবন্ধন সম্পন্ন করুন
              </button>

            </form>

            <div className="switch-text">
              ইতোমধ্যে অ্যাকাউন্ট আছে?

              <button
                onClick={() => {
                  setRegisterOpen(false);
                  setLoginOpen(true);
                }}
              >
                লগইন করুন
              </button>
            </div>

          </div>
        </div>
      )}


      {/* BLOOD REQUEST MODAL */}
      {requestOpen && (
        <div className="modal-bg">

          <div className="modal large-modal">

            <button
              className="close"
              onClick={() => setRequestOpen(false)}
            >
              ×
            </button>

            <img src={logo} alt="RBMS" />

            <h2>রক্তের আবেদন</h2>

            <p>
              রোগীর প্রয়োজনীয় তথ্য প্রদান করুন
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                alert(
                  "ডাটাবেজ যুক্ত করার পর রক্তের আবেদন সংরক্ষণ হবে।"
                );
              }}
            >

              <label>রোগীর নাম *</label>

              <input
                type="text"
                placeholder="রোগীর নাম"
                required
              />


              <label>রোগীর সমস্যা *</label>

              <textarea
                placeholder="রোগীর কী সমস্যা?"
                required
              />


              <div className="form-two">

                <div>
                  <label>রক্তের গ্রুপ *</label>

                  <select required>
                    <option value="">
                      নির্বাচন করুন
                    </option>

                    {bloodGroups.map((group) => (
                      <option key={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label>রক্ত কত ব্যাগ *</label>

                  <input
                    type="number"
                    min="1"
                    placeholder="যেমন: ২"
                    required
                  />
                </div>

              </div>


              <label>Request Number</label>

              <input
                type="text"
                placeholder="হাসপাতালের Request Number"
              />


              <label>হাসপাতালের নাম *</label>

              <input
                type="text"
                placeholder="হাসপাতালের নাম"
                required
              />


              <label>হাসপাতালের ঠিকানা / লোকেশন *</label>

              <input
                type="text"
                placeholder="জেলা, উপজেলা, হাসপাতাল"
                required
              />


              <label>কখন রক্ত লাগবে *</label>

              <input
                type="datetime-local"
                required
              />


              <label>রোগীর ফোন নম্বর *</label>

              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                required
              />


              <label>Reference</label>

              <input
                type="text"
                placeholder="যিনি আবেদনটি করেছেন"
              />


              <button className="red-btn full">
                রক্তের আবেদন জমা দিন
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;