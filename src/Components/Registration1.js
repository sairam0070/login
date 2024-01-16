// Registration1.js
import React, { useState } from 'react';
import styles from "../style/Registration1.module.css";

export default function Registration1() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const handleSubmit = () => {

    ''
    // Handle form submission
  }

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h2>Registration</h2>
        <form>
          {/* <div className={styles.formgroup}>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)} placeholder='Enter First Name'
            />
          </div> */}
          {/* <div className={styles.formgroup}>
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)} placeholder='Enter Last Name'
            />
          </div> */}
          <div className={styles.formgroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password} placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmpassword"
              value={confirmpassword} placeholder='Enter password'
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
          <button className={styles.button1} type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <p>
          <span className="psw">Already have an account? <a href="/">Login</a></span>
        </p>
      </div>
    </div>
  );
}
