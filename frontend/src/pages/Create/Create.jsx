import React, { useContext, useRef, useState } from 'react'
import "./create.css"
import {AuthContext} from "../../context/AuthContext"
import axios from 'axios'
const Create = () => {

    const {user}= useContext(AuthContext)

   const title=useRef('');
   const blog=useRef('');
   const cat=useRef('');
    const[photo,setPhoto]=useState(null);


   const postpublish= async(e)=>{
    e.preventDefault();
   const newpost={
       username:user.username,
       title:title.current.value,
       category:cat.current.value,
       desc:blog.current.value,


   }
  console.log(newpost)
     if(photo)
     {
         const data=new FormData();
         const filename = Date.now() + photo.name;
         data.append("name", filename);
         data.append("file", photo);
         newpost.photo=filename;
         try {
             await axios.post("/upload",data);
         } catch (error) {
            console.log(error) 
         }
     }
     try {
        const res=await axios.post("/posts",newpost)
        window.location.replace(`/post/${res.data._id}`);
     } catch (error) {
        console.log(error) 
     }
   }


    return (
        <div className="create-new-blog">
           {photo && <img src={URL.createObjectURL(photo)} alt="" className="blog-img" />}
            <form className="form" onSubmit={postpublish}>
                <div className="form-parts">
                    <label htmlFor="fileinput">
                        <i className="fas fa-plus fileadd-icon"></i>
                    </label>
                    <input onChange={(e) => setPhoto(e.target.files[0])} type="file" id="fileinput" style={{ display: "none" }} />
                    <input ref={title} type="text" placeholder="Blog Title" className="text-input" autoFocus={true} />
                </div>
                <div className="form-parts">
                    <input ref={cat} placeholder="category..." className="text-input "/>
                </div>
                <div className="form-parts">
                    <textarea ref={blog} placeholder="write your blog here..." className="text-input blog-text"></textarea>
                </div>
                <button type='submit' className="post-blog">Publish</button>
            </form>
        </div>
    )
}

export default Create
