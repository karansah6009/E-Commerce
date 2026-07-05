import React, { useState } from 'react'
import './CSS/LoginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const res = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  email, password }),
    });
    const message = await res.text();
    alert(message);
  };

  return (
    <div className='loginsignup'>
        <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
        <button onClick={signup}>Continue</button>
        <p className='login-signup'>Don't have an account? <Link to='/login'><span>Sign Up</span></Link></p>
        </div>
      
    </div>
  )
}

export default LoginPage
