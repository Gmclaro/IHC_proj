import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const [loginStatus, setLoginStatus] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function login(event) {
    event.preventDefault();

    // Simulating a successful login
    setTimeout(() => {
      const userToken = "sample-token";
      if (userToken) {
        // Store token
        localStorage.setItem("token", userToken);
        setLoginStatus("Success");
        window.location.href = "/Schedule";
      } else {
        setLoginStatus("Invalid email or password");
      }
    }, 2000); // Simulating a delay of 2 seconds
  }

  return (
    <>
      <div className="container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Login</h2>
          <form onSubmit={login}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <p className={loginStatus === "Success" ? "success-txt" : "error-txt"}>{loginStatus}</p>
            <input type="submit" className="btn-m" value="Login" />
          </form>
          <Link to="/Register" className="help-text">
            <p>Don't have an account? </p>
            <p style={{ color: "#446DD9", paddingLeft: "10px" }}>Register now! → </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;