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
      deleteUser: (req, res) => {
        const userId = req.params.id;
        User.deleteUser(userId, (err, deleted) => {
          if (err) {
            console.error('Error deleting user:', err);
            res.status(500).json({ error: 'Error deleting user' });
          } else {
            if (deleted) {
              res.json({ message: 'User deleted successfully' });
            } else {
              res.status(404).json({ error: 'User not found' });
            }
          }
        });
      },
};

module.exports = userController;
