import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import {AuthContext} from "../../context/AuthContext"
const Navbar = () => {
  
    const {user}= useContext(AuthContext)

  const handlelogout=()=>{
    localStorage.clear();
    window.location.reload(false);

  }

    return (
        <div className="navbar">
            <div className="navleft">
                <ul className="navlist">
                    <li className="navlistitem">
                        <Link className="link" to="/" >
                            Home </Link></li>
                    <li className="navlistitem">
                        <Link className="link" to="/create" >
                            Create  </Link></li>
                    <li className="navlistitem">
                    {user && <Link className="link" onClick={handlelogout} to="/" >
                             logout </Link>}</li>

                </ul>
            </div>
            <div className="navright">
                {user ? 
                   <Link to="/profile"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PwSMiuuHMJW1_UbGG3lMMJpMHUGZReo_FmjrG9Me7ykRyWRcdFC7_jEJC9V98mprHtY&usqp=CAU" alt="profile" className="profileimgg" /></Link>
                 : 
                    <Link className="link loginbtn" to="/login" >Login</Link>
                }
               
            </div>
        </div>
    )
}

export default Navbar
