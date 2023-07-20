// permissionModel.js
const db = require('../../config/db.config');

const Permission = {
  getAll: (callback) => {
    db.query('SELECT * FROM permissions', callback);
  },

  create: (name, callback) => {
    db.query('INSERT INTO permissions (name) VALUES (?)', [name], callback);
  },
};

module.exports = Permission;
