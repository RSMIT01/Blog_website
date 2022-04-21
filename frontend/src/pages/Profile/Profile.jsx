import React from 'react'
import "./profile.css"


const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-title">
                <span className="update-title">Update your Account </span>
                <span className="delete-title">Delete Account</span>
            </div>
            <form  className="profile-form">
                <label >Profile Picture</label>
                <div className="profile-picture">
                    <img className="profile-img" src="https://www.skillsportal.co.za/sites/default/files/field/image/deRfJz68gEUQ2VayR4DCyF-1200-80_0.jpg" alt="" />
                    <label htmlFor="fileinput">
                    <i className="fas fa-user-circle profile-icon"></i>
                    </label>
                    <input type="file" id="fileinput"  style={{ display: "none" }}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="joh123"/>
                <label>Email</label>
                <input type="email" placeholder="John123@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="profile-submit">Save</button>
            </form>

        </div>
    )
}

export default Profile
