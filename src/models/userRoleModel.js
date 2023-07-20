// userRoleModel.js
const db = require('../../config/db.config');

const UserRole = {
  assignRole: (userId, roleId, callback) => {
    db.query(
      'INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)',
      [userId, roleId],
      callback
    );
  },
};

module.exports = UserRole;
