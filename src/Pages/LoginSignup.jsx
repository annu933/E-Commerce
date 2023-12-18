import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import { Login } from './Login'


const LoginSignup = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
  
  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      let dataObj = {name,email,password}
      // console.log(dataObj)
      const response = await axios.post("http://localhost:3001/users", {
        name,
        email,
        password,
      });

      toast.success('Registered successfull.')
      setName('');
      setEmail('')
      setPassword('')
      navigate('/login')
     
    } catch (error) {
      toast.error('Failed.',error.message)
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup}>Continue</button>
        <p className="loginsignup-login">Already have an account?<span><Link to={'/login'}>Login here</Link></span></p>
        {/* <Login onLogin={onLogin} /> */}
        <div className="loginsignup-agree"></div>
        <input type="checkbox" name='' id='' />
        <p>By Continuing, I agree to the terms of use and privacy policy.</p>
      </div>
    </div>
    <ToastContainer />
    </form>
    
  )
}
export default LoginSignup;
