import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./blog.css"
import axios from 'axios';

const Blog = () => {
    const location=useLocation();
    const post_id=location.pathname.split("/")[2];
   
    const[blog,setBlog]=useState({});
    useEffect(() => {
      const fetchblog=async()=>{
      const res= await axios.get(`/posts/${post_id}`)
      setBlog(res.data);
     }
     
    fetchblog()

    }, [post_id])
     
    console.log(blog)

    return (
        <div className="blog">
            <div className="single-blog-wrapper">
            {blog.photo && <img className="blogimage" src={blog.photo} alt="" />}
                <h1 className="blogtitle">{blog.title}
                    <div className="edit-blog">
                        <i className="fas fa-edit edit-icons"></i>
                        <i className="fas fa-trash-alt edit-icons"></i>
                    </div>
                    </h1>
                <div className="blog-info">
                   
                    <span className="author"> Author :
                    <Link to={`/?user=${blog.username}`} className="link" >
                    <b>{blog.username}</b></Link>
                    </span>
                    <span className="time"> <b>{new Date(blog.createdAt).toDateString()}</b>
                    </span>
                </div>
                <p className="blog-disc">
                  {blog.desc}
                </p>
            </div>
        </div>
    )
}

export default Blog
