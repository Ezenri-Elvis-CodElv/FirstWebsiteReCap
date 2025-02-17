import "./SignUp.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all form!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords does not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://movie-app-ch5.onrender.com/api/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {
        toast.error(result.message || "Signup failed.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="signup-container">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signupheader">
        <h1 className="signup-title">Sign Up</h1>
           <p>Create your account to get full access</p>

        </div>
        <div className="signuphero">
         <h4>Full Name</h4>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="signup-input1"
        />
         <h4>Email Address</h4>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="signup-input1"
        />
          <h4>PassWord</h4>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input1"
        />
         <h4>Confirm PassWord</h4>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="signup-input1"
        />
        </div>
         <div className="signupfooter">

        <button type="submit" disabled={loading} className="signup-button">
          {loading ? <SyncLoader size={10}  color="white"/> : "Sign Up"}
        </button>

        <p className="login-text">
          Already have an account? <span className="login-link" onClick={() => navigate("/login")}>Login</span>
        </p>
         </div>
      </form>
    </div>
  );
};

export default SignUp;
