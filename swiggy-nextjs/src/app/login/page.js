"use client";
import "./styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        { email, password }
      );

      if (response.data.success) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Log in successful");
        router.push("/");
      } else {
        alert("Invalid email or password, login failed");
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  }

  return (
    <div className="backg">
      <br />
      <br />
      <br />
      <div className="main-containerr">
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-background">
            <div className="text">Login</div>
            <div className="inputs">
              <div className="input">
                <img src="/img/email_icon.png" alt="" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="error"></div>
              </div>
              <div className="input">
                <img alt="" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="error"></div>
              </div>
            </div>
            <center>
              <br />
              <div className="submit-container">
                <button type="submit" className="">
                  Login
                </button>
                <p className="signup-link">
                  No account? <a href="/signup">Sign up</a>
                </p>
              </div>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
