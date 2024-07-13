const express = require('express');
const {
    createUser,
    updateUser,
    deleteUser,
    readUsers
} = require('../controllers/userControllers');

const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

// Route to update an existing user
router.put('/users/:id', updateUser);

// Route to delete a user
router.delete('/users/:id', deleteUser);

// Route to read all users
router.get('/users', readUsers);

module.exports = router;
