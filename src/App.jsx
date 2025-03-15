import React, { useState } from "react";
import "./App.css";
import chat from "./assets/chat.jpg";
import digital from "./assets/digital-connection-technology-social-media.jpg";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`hero-container ${isDark ? "dark" : ""}`}>
      <nav className="nav">
        <div className="nav-logo">
          {/* <img src="/logo.png" alt="VibeSphere " className="logo-img" /> */}
          <span>VibeSphere </span>
        </div>
        <div className="nav-links">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
          <button className="nav-btn">Sign In</button>
          <button className="nav-btn primary">Get Started</button>
        </div>
      </nav>

      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>
            Connect, Chat, and <span className="highlight">Share</span> with
            Anyone, Anywhere
          </h1>
          <p>
            Experience seamless communication with our real-time messaging
            platform. Join millions of users who trust VibeSphere for secure and
            instant connections.
          </p>
          <div className="hero-cta">
            <button className="cta-btn primary">Start Chatting Now</button>
            <button className="cta-btn secondary">
              <span className="play-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Watch Demo
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>X.1+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>X.2+</h3>
              <p>Countries</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <img src={digital} alt="Chat Interface" className="main-image" />
            <div className="floating-card top">
              <img src={digital} alt="Messages" className="card-icon" />
              <span>1.2M Messages Today</span>
            </div>
            <div className="floating-card bottom">
              <div className="avatar-group">
                <img src={chat} alt="User" />
                <img src={chat} alt="User" />
                <img src={chat} alt="User" />
              </div>
              <span>2.5k Online Now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-soon">
        <div className="coming-soon-content">
          <h2>Building Something Amazing</h2>
          <p>
            This is just a demo of what's to come. We're working hard to bring
            you the full experience of VibeSphere - where connection meets
            innovation.
          </p>
          <div className="build-status">
            <div className="status-indicator"></div>
            <span>Currently in Development</span>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo">VibeSphere</span>
              <p>
                Connect, chat, and share with anyone, anywhere in the world.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" />
                  </svg>
                </a>
                <a href="#" aria-label="GitHub">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h3>Product</h3>
                <div className="links-wrapper">
                  <a href="#">Features</a>
                  <a href="#">Security</a>
                  <a href="#">Enterprise</a>
                  <a href="#">Pricing</a>
                </div>
              </div>

              <div className="footer-section">
                <h3>Company</h3>
                <div className="links-wrapper">
                  <a href="#">About</a>
                  <a href="#">Careers</a>
                  <a href="#">Blog</a>
                  <a href="#">Press</a>
                </div>
              </div>

              <div className="footer-section">
                <h3>Resources</h3>
                <div className="links-wrapper">
                  <a href="#">Documentation</a>
                  <a href="#">Help Center</a>
                  <a href="#">Community</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 VibeSphere. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
