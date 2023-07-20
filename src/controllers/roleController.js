// roleController.js
const Role = require('../models/roleModel');

const roleController = {
  getAllRoles: (req, res) => {
    Role.getAll((err, roles) => {
      if (err) {
        console.error('Error fetching roles:', err);
        res.status(500).json({ error: 'Error fetching roles' });
      } else {
        res.json(roles);
      }
    });
  },

  createRole: (req, res) => {
    const { name } = req.body;
    Role.create(name, (err, result) => {
      if (err) {
        console.error('Error creating role:', err);
        res.status(500).json({ error: 'Error creating role' });
      } else {
        res.json({ id: result.insertId, name });
      }
    });
  },
};

module.exports = roleController;
