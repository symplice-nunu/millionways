// userModel.js
const db = require('../../config/db.config');

const User = {
  getAll: (callback) => {
    db.query('SELECT * FROM users', callback);
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
