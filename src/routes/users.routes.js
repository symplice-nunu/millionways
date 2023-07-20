// routes/index.js
const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const permissionController = require('../controllers/permissionController');
const userController = require('../controllers/userController');
const userRoleController = require('../controllers/userRoleController');

// Roles
router.get('/roles', roleController.getAllRoles);
router.post('/roles', roleController.createRole);

// Permissions
router.get('/permissions', permissionController.getAllPermissions);
router.post('/permissions', permissionController.createPermission);

// Users
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.delete('/users/:id', userController.deleteUser);

// User Roles
router.post('/users/:userId/roles/:roleId', userRoleController.assignRoleToUser);

module.exports = router;
