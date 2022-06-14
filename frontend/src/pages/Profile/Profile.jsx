import React, { useContext } from 'react'
import "./profile.css"
import {AuthContext} from "../../context/AuthContext"


const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="profile">
            <div>
            <div className=" bg-light">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10 mt-5 pt-5">
                                <div className="row z-depth-3">
                                    <div className="col-sm-4 bg-info rounded-left">
                                        <div className="card-block text-center text-white">
                                            <i className="fas fa-user-tie fa-7x mt-5"></i>
                                            <h2 className="font-weight-bold mt-4">Profile</h2>
                                       
                                        </div>
                                    </div>
                                    <div className="col-sm-8 bg-white rounded-right">
                                     
                                        <hr className="bg-primary mt-0 w-25" />
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="font-weight-bold">Username:</p>
                                                <h6 className=" text-muted">{user.username}</h6>
                                            </div>
                                            
                                            <div className="col-sm-6">
                                                <p className="font-weight-bold">Email:</p>
                                                <h6 className=" text-muted">{user.email}</h6>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
