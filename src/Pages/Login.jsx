import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'
import axios from 'axios'
import { toast } from 'react-toastify'


export const Login = ({ onLogin }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        await axios.get('http://localhost:3001/users')
          .then((result => {
            result.data.map(user => {
              if (user.email === formData.email) {
                if (user.password === formData.password) {
                  toast.success("Login successfully")
                }
                else {
                  result = false;
                  toast.warning("wrong password")
                }
              } else {
                result = false;
                toast.warning("Wrong email and password")
              }
            })
          }))



        // const response = await axios.get('http://localhost:3001/users', {
        //   username,
        //   password
        // });
        // const user = response.data;
        // onLogin(user);
        // console.log(user)


      } catch (error) {
        console.error('Login failed:', error.message);
      }
    };
  }


  const validate = () => {
    let result = true;
    if (formData.email === '' || formData.email === null) {
      result = false;
      toast.warning("Please Enter Username")
    }
    if (formData.password === '' || formData.password === null) {
      result = false;
      toast.warning("Please Enter Password")
    }
    return result
  }

  return (
    <form onSubmit={handleLogin}>
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Login</h1>
          <div className="loginsignup-fields">
            {/* <input type="text" placeholder='Your Name'  /> */}
            <input type="email" placeholder='Email Address' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder='Password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          </div>
          <button onClick={handleLogin} >Continue</button>
          <p className="loginsignup-login">Don't have an account yet?<span><Link to={'/signup'}>Create an account</Link></span></p>
          <div className="loginsignup-agree"></div>
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </form>
  )
}
