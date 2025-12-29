import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css"; // reuse existing CSS

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend_url}/api/signup`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Signup Successful! Redirecting...");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setMessage("Error: " + data.msg);
      }
    } catch (error) {
      setMessage("Server error. Is the backend running?");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Signup</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="signup-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
