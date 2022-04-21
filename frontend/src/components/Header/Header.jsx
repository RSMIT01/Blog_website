import React from 'react'
import "./header.css"
const Header = () => {
    return (
       <div className="header">
           <div className="headertitle">
               <span className="headersmall">Start your blogging journey!</span>
               <span className="headerbig">Blog</span>
           </div>
           <img src="https://c0.wallpaperflare.com/preview/378/348/1020/beverage-blogger-break-browsing.jpg" alt="" className="headerimg" />
       </div>
    )
}

export default Header
