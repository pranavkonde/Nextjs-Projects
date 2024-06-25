"use client";
import "./styles.css"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SignUp = () => {
  const router = useRouter();
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/users/signup", {
        username,
        email,
        password,
      });
      
      if (response.data.success) {
        alert("User created successfully");
        router.push("/login");
      } else {
        const data = response.data;
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error.response? error.response.data : error.message);
    }
  };


  return (
    <div className="backg">
      <div className="main-containerr">
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="text">Sign Up</div>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                id="name"
                placeholder="        Enter Username"
                value={username}
                onChange={(e) => setuserName(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <input
                type="email"
                id="email"
                placeholder="        Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <input
                type="password"
                id="password"
                placeholder="        Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login-account">
            Already have an account? <a href="/login"><ul>Login</ul></a>
          </div>
          <center>
            <br />
            <div className="submit-container">
              <button type="submit" className="btn btn-dark">
                Sign Up
              </button>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

