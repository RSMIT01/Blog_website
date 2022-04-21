import React from 'react'
import "./onepost.css"
import { Link } from 'react-router-dom'

const Onepost = ({post}) => {
    return (
        <div className="onepost">
           {post.photo && <img classname="postimg" src={post.photo} alt="" />}
            <div className="postinfo">
                <div className="postcatagories">
                  {post.categories.map((cat)=>(

                    <span className="categorie">{cat.name}</span>
                    ))}
                   
                </div>
                <Link to={`/post/${post._id}`} className="link">
                <span className="posttitle">{post.title}</span></Link>
                <hr />
                <span className="posttime">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="post-discription">{post.desc}</p>
        </div>
    )
}

export default Onepost
