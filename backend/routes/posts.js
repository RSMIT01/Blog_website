const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');


// create 
router.post("/", async (req, res) => {
    // const newpost = new Post(req.body);
    const newpost=new Post(req.body)
    
    try {
        const savedpost = await newpost.save();
        console.log(savedpost)
        res.status(200).json(savedpost);
    } catch (error) {

        res.status(500).json(error);
    }

});
//update
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.username === req.body.username) {
            try {
                const updatedpost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).json(updatedpost);
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else {
            res.status(401).json("you are not alllowed to update this post")
        }

    } catch (error) {
        res.status(500).json(error);
    }
});
//dlt
router.delete("/:id/:username", async (req, res) => {
    try {
        
        const post = await Post.findById(req.params.id);

        if (post.username === req.params.username) {
            try {
                await post.delete()
                res.status(200).json("post deleted");
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else {
            
            res.status(401).json("you are not alllowed to delete this post")
        }

    } catch (error) {
        res.status(500).json(error);
    }
});
//get post
router.get("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    } catch (error) {

        res.status(500).json(error);
    }


});
//get all posts
router.get("/", async (req, res) => {
    const username = req.query.user;
    const category = req.query.cat;
    try {

        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (category) {
            posts = await Post.find({category })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);

    } catch (error) {

        res.status(500).json(error);
    }
      

});


module.exports = router;