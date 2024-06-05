const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/create-user', async (req, res) => {
    console.log("⚙️  | req.body :", req.body);
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        console.log("⚙️  | users :", users);
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
