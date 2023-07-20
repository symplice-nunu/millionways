// userModel.js
const db = require('../../config/db.config');

const User = {
  getAll: (callback) => {
    db.query('SELECT * FROM users', callback);
  },
  deleteUser: (userId, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        callback(err);
      } else {
        callback(null, result.affectedRows > 0); // Return true if at least one row was affected (user deleted)
      }
    });
  },

  create: (username, email, password, callback) => {
    db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password],
      callback
    );
  }, 
};

module.exports = User;
