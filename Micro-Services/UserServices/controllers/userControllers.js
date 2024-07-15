const MicroUser = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new MicroUser({ email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update an existing user
exports.updateUser = async (req, res) => {
    console.log(req)
    try {
        const { id } = req.params;
        const { email, password } = req.body;
const updatedUser = await MicroUser.findByIdAndUpdate(id, { email, password }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await MicroUser.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read all users
exports.readUsers = async (req, res) => {
    try {
        const users = await MicroUser.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

