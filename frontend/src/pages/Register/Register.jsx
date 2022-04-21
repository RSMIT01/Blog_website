import React from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
const Register = () => {



    return (

        <div className="register-page">
            <span className="register-title">Register</span>
            <form className="register-form"  >
                <label >Username</label>
                <input className="register-input" type="text" placeholder="Enter your email..." />
                <label >Email</label>
                <input className="register-input" type="text" placeholder="Enter your email..." />
                <label >Password</label>
                <input className="register-input" type="text" placeholder="Enter your password..." />
                <button className="register-btn">Register</button>
            </form>
            <Link className="link" to="/login" >  <button className="login-btn">Login</button></Link>
        </div>

    )
}

export default Register
