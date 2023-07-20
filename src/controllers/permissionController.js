// permissionController.js
const Permission = require('../models/permissionModel');

const permissionController = {
  getAllPermissions: (req, res) => {
    Permission.getAll((err, permissions) => {
      if (err) {
        console.error('Error fetching permissions:', err);
        res.status(500).json({ error: 'Error fetching permissions' });
      } else {
        res.json(permissions);
      }
    });
  },

  createPermission: (req, res) => {
    const { name } = req.body;
    Permission.create(name, (err, result) => {
      if (err) {
        console.error('Error creating permission:', err);
        res.status(500).json({ error: 'Error creating permission' });
      } else {
        res.json({ id: result.insertId, name });
      }
    });
  },
};

module.exports = permissionController;
