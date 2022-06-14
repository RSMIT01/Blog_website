import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
import axios from 'axios'
import { useNavigate  } from "react-router-dom";

const Register = () => {

    const username=useRef('');
    const email=useRef('');
    const password=useRef('');
    const navigate=useNavigate();

    const registeruser=async(e)=>{
        e.preventDefault();
        const user={
            username:username.current.value,
            email:email.current.value,
            password:password.current.value
        }
     await axios.post("/auth/register",user);
     navigate("/login");
    }
 
    return (

        <div className="register-page">
            <span className="register-title">Register</span>
            <form className="register-form"  onSubmit={registeruser}>
                <label >Username</label>
                <input className="register-input" ref={username} type="text" placeholder="Enter your username..." />
                <label >Email</label>
                <input className="register-input" ref={email} type="text" placeholder="Enter your email..." />
                <label >Password</label>
                <input className="register-input" ref={password} type="text" placeholder="Enter your password..." />
                <button className="register-btn" type='submit'>Register</button>
            </form>
            <Link className="link" to="/login" >  <button className="login-btn">Login</button></Link>
        </div>

    )
}

export default Register
