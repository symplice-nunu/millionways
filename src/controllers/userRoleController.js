// userRoleController.js
const UserRole = require('../models/userRoleModel');

const userRoleController = {
  assignRoleToUser: (req, res) => {
    const { userId, roleId } = req.params;
    UserRole.assignRole(userId, roleId, (err) => {
      if (err) {
        console.error('Error assigning role to user:', err);
        res.status(500).json({ error: 'Error assigning role to user' });
      } else {
        res.json({ message: 'Role assigned to the user' });
      }
    });
  },
};

module.exports = userRoleController;
