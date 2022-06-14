import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./leftpart.css"
const Leftpart = () => {

     const[cats,setCats]=useState([]);
     useEffect(()=>{
        const fetchallpost=async()=>{
            const res=await axios.get("/posts")
            const temp= [...new Set(res.data.map((e) => { return e.category; }))];
             setCats(temp);
        }
        fetchallpost();
     },[])
    
    return (
        <div className="leftpart">
            <div className="leftitem">
                <span className="lefttitle">CATEGORIES</span>
                <ul className="list-of-categories">
                 {cats.map(c=>(
                     <Link key={c}  to={`/?cat=${c}`} className="link">
                    <li  className="categorie_item">{c}</li></Link>
                    ))} 
                   
                </ul>
            </div>
        </div>
    )
}

export default Leftpart
