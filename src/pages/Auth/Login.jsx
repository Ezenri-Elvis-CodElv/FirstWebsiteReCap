import "./Login.css";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../routes/PrivateRoutes";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = "https://movie-app-ch5.onrender.com/api/user/log-in";
    // const {login} = useContext(AuthContext)
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter your details 😎");
      return;
    }

    try {
      const response = await axios.post(url, { email, password }, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("Login Response:", response);
    //   login()
      localStorage.setItem("userData", JSON.stringify(response?.data?.data));

      alert(response?.data?.message || "Login Successful!");

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      console.error("Login Error:", err);

      if (err.response) {
        alert(err.response?.data?.message || "Invalid login credentials");
      } else {
        alert("Something went wrong. Try again later!");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="textlogin"> 

        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Enter Login details to get access</p>
        </div>
         <div className="middletext">

        <label className="login-label">Username or Email Address</label>
        <input 
          type="email" 
          placeholder="Username / Email Address" 
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="login-label">Password</label>
        <div className="password-wrapper">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
            {showPassword ?  <FiEye />: <FiEyeOff /> }
          </span>
        </div>
          <div className="keepmelogedinandpassword">

        <div className="login-options">
          <label className="keep-logged-in">
            <input type="checkbox" className="chexkbox"/> Keep me logged in
          </label>
         </div>
          <span className="forgot-password" onClick={() => navigate("/signup")}>
            Forgot Password?
          </span>
          </div>
        </div>
          <div className="loginfooteer">

        <button type="submit" className="login-button">Login</button>

        <p className="signup-text">
          Don't have an account? 
          <p className="signup-link">  <span className="spann" onClick={() => navigate("/signup")}>Sign Up </span> here</p>
        </p>
          </div>
      </form>
    </div>
  );
};

export default Login;
