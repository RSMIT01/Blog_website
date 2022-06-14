import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./blog.css"
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios';

const Blog = () => {
    const location = useLocation();
    const post_id = location.pathname.split("/")[2];
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();



    const [newtitle, setNewtitile] = useState('');
    const [newdesc, setNewdesc] = useState('');
    const [updt, setUpdt] = useState(false);

    const [blog, setBlog] = useState({});
    useEffect(() => {
        const fetchblog = async () => {
            const res = await axios.get(`/posts/${post_id}`)
            setBlog(res.data);
            setNewtitile(res.data.title);
            setNewdesc(res.data.desc);
            
        }

        fetchblog()

    }, [post_id])

    const pf = process.env.REACT_APP_IMAGE
    const handledelete = async () => {
        await axios.delete(`/posts/${post_id}/${user.username}`);
        navigate("/");
    }

  const handleupdate=async()=>{
      await axios.put(`/posts/${post_id}`,{
          username:user.username,
          desc:newdesc,
          title:newtitle
      })
     setUpdt(false);
  }

    return (
        <div className="blog">
            <div className="single-blog-wrapper">
                {blog.photo && <img className="blogimage" src={pf + blog.photo} alt="" />}
                {updt ? <input autoFocus className="blogtitleinput" type="text" value={newtitle} onChange={(e) => setNewtitile(e.target.value)} /> : (

                    <h1 className="blogtitle">{newtitle}
                        <div className="edit-blog">
                            {user && blog.username === user.username && <span onClick={() => setUpdt(true)}>
                                <i className="fas fa-edit edit-icons"></i></span>}
                            {user && blog.username === user.username && <span onClick={handledelete}><i className="fas fa-trash-alt edit-icons"></i></span>}
                        </div>
                    </h1>
                )}
                <div className="blog-info">

                    <span className="author"> Author :
                        <Link to={`/?user=${blog.username}`} className="link" >
                            <b>{blog.username}</b></Link>
                    </span>
                    <span className="time"> <b>{new Date(blog.createdAt).toDateString()}</b>
                    </span>
                </div>

                {updt ? <textarea className="blog-discinput" value={newdesc} onChange={(e) => setNewdesc(e.target.value)} /> :
                    <p className="blog-disc">
                        {newdesc}
                    </p>}

                   {updt && <button className="updatebutton"  onClick={handleupdate} >Update</button> }
            </div>
        </div>
    )
}

export default Blog
