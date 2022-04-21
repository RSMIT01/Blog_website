const router = require('express').Router();
const Category = require('../models/Category');


router.post("/", async (req, res) => {
    const new_category = new Category(req.body);
    try {
        const savedcat= await new_category.save();
        res.status(200).json(savedcat);
    } catch (error) {

        res.status(500).json(error);
    }

});
router.get("/", async (req, res) => {
    try {
        const category= await Category.find();
        res.status(200).json(category);
    } catch (error) {

        res.status(500).json(error);
    }

});

module.exports = router;