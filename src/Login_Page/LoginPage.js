import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginPage() {
  let navigate = useNavigate();
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

  const handleLogin = async () => {
    const data = {
        username,
        password}
    const requestOptions = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data),}
    
      try{
        const response = await fetch("http://localhost:3001/user/signin", 
            requestOptions,);

        const {token} = await response.json();

        localStorage.setItem("token", token);
    }catch(e){
        console.log("Error occured when logging in:", e);
    }
      console.log(
      `You logged in with username: ${username} and password: ${password}`
    );
    setUsername("");
    setPassword("");
    navigate("/todos");
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
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className={styles.textField}
            value={username}
            onChange={usernameChange}
          />
          <input
            type={passwordMode}
            id="password"
            placeholder="Password"
            className={styles.textField}
            value={password}
            onChange={passwordChange}
          />

          <div className={styles.passwordBox}>
            <input
              type="checkbox"
              id="passwordToggle"
              onClick={() => togglePasswordHide()}
            />
            <label htmlFor="passwordToggle">Show/Hide Password</label>
          </div>

          <div className={styles.btnsContainer}>
            <button className={styles.button} onClick={handleLogin}>
              Login
            </button>
            <button className={styles.button} onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
