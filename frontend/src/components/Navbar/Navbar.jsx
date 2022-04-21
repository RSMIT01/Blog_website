import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
const Navbar = () => {
    const user = false;
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
                        <Link className="link" to="/register" >
                            {user && "Logout"} </Link></li>

                </ul>
            </div>
            <div className="navright">
                {user ? (
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PwSMiuuHMJW1_UbGG3lMMJpMHUGZReo_FmjrG9Me7ykRyWRcdFC7_jEJC9V98mprHtY&usqp=CAU" alt="profile" className="profileimg" />
                ) : (
                    <Link className="link" to="/login" >Login</Link>
                )}
                <i className=" fas fa-search navsearch"></i>
            </div>
        </div>
    )
}

export default Navbar
