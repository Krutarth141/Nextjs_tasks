"use client";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Details sent successfully!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="login-input"
          />
          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
      </div>
      <style jsx>{`
        /* Container Styling */
        .login-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to right, #141e30, #243b55);
          overflow: hidden;
        }

        /* Background Shapes */
        .login-container::before,
        .login-container::after {
          content: "";
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          z-index: 0;
        }

        .login-container::before {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation: move1 6s infinite alternate;
        }

        .login-container::after {
          width: 200px;
          height: 200px;
          bottom: 15%;
          right: 15%;
          animation: move2 8s infinite alternate;
        }

        @keyframes move1 {
          to {
            transform: translateY(30px) translateX(20px);
          }
        }

        @keyframes move2 {
          to {
            transform: translateY(-30px) translateX(-20px);
          }
        }

        /* Login Box */
        .login-box {
          position: relative;
          z-index: 1;
          background: #ffffff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        h2 {
          margin-bottom: 1.5rem;
          color: #333;
          font-size: 1.8rem;
        }

        /* Input Fields */
        .login-input {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          box-sizing: border-box;
        }

        /* Submit Button */
        .login-button {
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: #fff;
          border: none;
          padding: 0.8rem;
          width: 100%;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .login-button:hover {
          background: linear-gradient(to right, #2575fc, #6a11cb);
          transform: scale(1.05);
        }

        /* Success Message */
        .success-message {
          margin-top: 1rem;
          color: green;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
