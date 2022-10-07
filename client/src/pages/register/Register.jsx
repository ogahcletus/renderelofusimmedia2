
import React from 'react';
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
const adaptableUrl = "https://elofusimmedia-api.adaptable.app/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(adaptableUrl + "/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>EMAIL</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          REGISTER
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something Went wrong!</span>}
    </div>
  );
}
