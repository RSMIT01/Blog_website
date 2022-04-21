import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./leftpart.css"
const Leftpart = () => {
     const[cats,setCats]=useState([]);
     useEffect(()=>{
        const fetchcat=async()=>{
            const res=await axios.get("/categories")
            setCats(res.data);
        }
        fetchcat();
     },[])

    return (
        <div className="leftpart">
            <div className="leftitem">
                <span className="lefttitle">CATEGORIES</span>
                <ul className="list-of-categories">
                    {cats.map(c=>(
                     <Link to={`/?cat=${c.name}`} className="link">
                    <li key={c._id} className="categorie_item">{c.name}</li></Link>
                    ))}
                   
                </ul>
            </div>
        </div>
    )
}

export default Leftpart
