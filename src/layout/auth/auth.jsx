
import React from 'react'
import "./auth.css";

export default function auth({ children }) {
  return (
    <>
      <div className="auth-main">
        <div id="auth-box">
            {children}
        </div>
      </div>
    </>
  );
}
