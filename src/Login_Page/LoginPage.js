import { useState } from "react";
// import "./LoginPage.css";

function LoginPage() {
  const [passwordMode, setPasswordMode] = useState("password");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordHide = () => {
    if (passwordMode === "password") {
      setPasswordMode("text");
    } else {
      setPasswordMode("password");
    }
  };

  const handleLogin = () => {
    console.log(
      `You logged in with username: ${username} and password: ${password}`
    );
    setUsername("");
    setPassword("");
  };

  const handleRegister = () => {
    console.log(
      `You registered with username: ${username} and password: ${password}`
    );
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="text-field"
            value={username}
            onChange={usernameChange}
          />
          <input
            type={passwordMode}
            id="password"
            placeholder="Password"
            className="text-field"
            value={password}
            onChange={passwordChange}
          />

          <div className="password-box">
            <input
              type="checkbox"
              id="passwordToggle"
              onClick={() => togglePasswordHide()}
            />
            <label htmlFor="passwordToggle">Show/Hide Password</label>
          </div>

          <div className="btns-container">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
