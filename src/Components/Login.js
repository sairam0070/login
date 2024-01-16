// src/components/Registration.js
import React, { useState } from 'react';
import styles from "../style/Login.module.css";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Navigate = useNavigate()
  const handleLogin = () => {};

  const handleSignup = () => {
    // Use the `Navigate` function to navigate to './Registration1.js'

       Navigate('./register');
  };

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h2>Login</h2>
        <form>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setUsername(e.target.value)} placeholder='Enter email'
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password} placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)} 
            />
          </label>
          <br />
          <div className={styles.button}>
            <button className={styles.button1} type="submit" onClick={handleLogin}>
              Login
            </button>
            <button className={styles.button2} type="button" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </form>
        <p>
          <span className="psw">Forgot <a href="./Forgotpassword">password?</a></span>
        </p>
      </div>
    </div>
  );
}
