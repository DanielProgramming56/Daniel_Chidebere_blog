import React, { useState } from "react";
import "../styles/login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActionAsync } from "../store/actions/authActions";
import { selectLoading } from "../store/reducers/authSlice";
import loading from "../assets/Ellipsis-1s-200px.svg";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginActionAsync(formData)).then((res) => {
      if (res.type.payload !== undefined) {
        console.log(res.type);
        navigate("/");
      }
    });
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

          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <img style={{ height: "70px" }} src={loading} alt="loading" />
            ) : (
              "Submit"
            )}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
