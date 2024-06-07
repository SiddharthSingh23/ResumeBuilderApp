const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

const secretKey = process.env.SECRET_KEY;

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

// Create a new user
router.post('/create-user', async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

// Login user
router.post('/login-user', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (password !== user.password) {
            res.status(404).json({ message: "Email or password does not match" });
            return;
        }

        const userData = {
            id: user._id,
            name: user.name,
            email: user.email,
        }

        const token = jwt.sign(userData, secretKey, { expiresIn: '30d' });
        res.json({ status: 'SUCCESS', data: token, message: 'Login Successful' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
