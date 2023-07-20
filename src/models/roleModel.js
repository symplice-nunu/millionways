// roleModel.js
const db = require('../../config/db.config');

const Role = {
  getAll: (callback) => {
    db.query('SELECT * FROM roles', callback);
  },

  create: (name, callback) => {
    db.query('INSERT INTO roles (name) VALUES (?)', [name], callback);
  },
};

module.exports = Role;
