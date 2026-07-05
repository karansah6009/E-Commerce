import React, { useState } from 'react'
import './CSS/LoginSignUp.css'
import { Link } from 'react-router-dom'

const LoginSignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const res = await fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const message = await res.text();
    alert(message);
  };


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
        <button onClick={signup}>Continue</button>
        <p className='loginsignup-login'>Already have and account? <Link to='/loginPage'><span>Login Here</span></Link></p>

      </div>
    </div>
  )
}

export default LoginSignUp
