import React, { useState } from "react";
import "../styles/login.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5056/api/user/login",
        data
      );

      if (response.data.message === "User login successfully") {
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log({ error: error.message });
      alert("An error occurred during login. Please try again later.");
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData)
    
  };
  return (
    <div className="container-login">
      <form onSubmit={handleSubmit}>
        <legend>User Information</legend>
        <fieldset>
          <div>
            <label htmlFor="emailLabel">email: </label>
            <input
              type="text"
              id="emailLabel"
              name="email"
              onChange={handleChange}
              required={true}
              value={formData.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              pattern=".{8,}"
              title="Password must be at least 8 characters long."
              required={true}
              value={formData.password}
            />
          </div>

          <button>SUBMIT</button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
