const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Post = require('../models/Post');


// update 
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {

            const updateduser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updateduser);
        } catch (error) {

            res.status(500).json(error);
        }
    }
    else {
        res.status(401).json("you are not allowed to change other's account")
    }
});
// dlt 
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username })
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("your account is deleted");

            } catch (error) {
                res.status(500).json(error);
            }
        }

        catch (error) {
            res.status(404).json("user not found!");
        }
    }
    else {
        res.status(401).json("you are not allowed to delete other's account")
    }
});
//get user
router.get("/:id", async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const { password, ...all } = user._doc;
        res.status(200).json(all);

    } catch (error) {

        res.status(500).json(error);
    }


});
module.exports = router;