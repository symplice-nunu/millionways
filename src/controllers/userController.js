// userController.js
const User = require('../models/userModel');

const userController = {
    getAllUsers: (req, res) => {
        User.getAll((err, users) => {
          if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Error fetching users' });
          } else {
            if (users.length === 0) {
              res.json({ message: 'No users found.' });
            } else {
              res.json(users);
            }
          }
        });
      },
      createUser: (req, res) => {
        const { username, email, password } = req.body;
        User.create(username, email, password, (err, result) => {
          if (err) {
            console.error('Error creating user:', err);
            res.status(500).json({ error: 'Error creating user' });
          } else {
            const newUser = { id: result.insertId, username, email };
            res.json({ message: 'User created successfully', user: newUser });
          }
        });
      },
};

module.exports = userController;
