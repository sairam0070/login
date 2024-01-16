// ForgotPassword.js
import React, { useState } from 'react';
import styles from "../style/Forgotpassword.module.css";



const Forgotpassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Implement your password recovery logic here
    // You might want to send a request to the server to handle the password recovery process
    console.log(`Password recovery requested for email: ${email}`);
  };

  return (
    <div className={styles.container}>
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password:</p>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="button" onClick={handleForgotPassword}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Forgotpassword;
