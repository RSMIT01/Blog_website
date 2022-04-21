import React, { useEffect, useState } from 'react'
import Blogposts from '../../components/Blogposts/Blogposts'
import Header from '../../components/Header/Header'
import Leftpart from '../../components/Leftpart/Leftpart'
import "./home.css"
import axios from "axios"
import { useLocation } from 'react-router-dom'

const Home = () => {
    const[posts,setPosts]=useState([]);
    
    const {search} =useLocation();



    useEffect(() => {
       const fetchposts=async()=>{
         const res= await axios.get("/posts")
         setPosts(res.data)
       }
       fetchposts();
    }, [])
    
    useEffect(()=>{
        const fetchposts=async()=>{
            const res=await axios.get("/posts/"+search);
            setPosts(res.data);
        }
        fetchposts();
   },[search])


    return (
        <>
               <Header/>
            <div className="home">
              <Leftpart/>
              <Blogposts posts={posts}/>
            </div>
        </>
    )
}

export default Home
