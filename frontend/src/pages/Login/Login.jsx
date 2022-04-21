import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
const Login = () => {
    return (
        <div className="login-page">
            <span className="login-title">Login</span>
            <form className="login-form">
                <label >Email</label>
                <input className="login-input" type="text" placeholder="Enter your email..." />
                <label >Password</label>
                <input className="login-input" type="text" placeholder="Enter your password..." />
                <button className="login-btn">Login</button>
            </form>
            <Link className="link" to="/register" > <button className="register-btn">Register</button></Link>
        </div>
    )
}
export default Login
