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
              <h3>10M+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
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
    </div>
  );
};

export default App;
