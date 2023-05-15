import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function registerUser(event) {
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);

    // Simulated request success
    setTimeout(() => {
      alert("check mail");
    }, 1000);
  }

  return (
    <>
      <div className="container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Register </h2>
          <form onSubmit={registerUser}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <input type="submit" className="btn-m" value="Register" />
          </form>

          <Link to="/Login" className="help-text">
            {" "}
            <p>Already have an account? </p>
            <p style={{ color: "#446DD9", paddingLeft: "10px" }}>
              Login now →{" "}
            </p>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
