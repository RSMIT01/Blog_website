import React, { useRef,useContext } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import "./login.css"
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'


const Login = () => {

    const email=useRef('');
    const password=useRef('');
    const navigate=useNavigate();

    const { dispatch } = useContext(AuthContext)
     const loginhandler=async(e)=>{
        e.preventDefault();
        const user={
            email:email.current.value,
            password:password.current.value
        }
        try {
            const res=await axios.post("/auth/login",user);
            navigate("/");
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error });
        }
    

     }

    return (
        <div className="login-page">
            <span className="login-title">Login</span>
            <form className="login-form" onSubmit={loginhandler}>
                <label >Email</label>
                <input className="login-input" type="text"  ref={email} placeholder="Enter your email..." />
                <label >Password</label>
                <input className="login-input" ref={password}  type="text" placeholder="Enter your password..." />
                <button className="login-btn" type='submit'>Login</button>
            </form>
            <Link className="link" to="/register" > <button className="register-btn">Register</button></Link>
        </div>
    )
}
export default Login
