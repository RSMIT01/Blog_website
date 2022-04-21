import React from 'react'
import Onepost from '../Post/Onepost'
import "./blogposts.css"
const Blogpost = ({posts}) => {
    return (
        <div className="blogpost"> 
           {posts.map((p)=>(
                   <Onepost key={p._id} post={p}/>
               ))}
           
        </div>
    )
}

export default Blogpost
