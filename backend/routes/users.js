const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Post = require('../models/Post');


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