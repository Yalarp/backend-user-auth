const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  getMe, 
  updateMe,
  deactivateMe,
  getAllUsers 
} = require('../controllers/userController');
const protect = require('../middleware/auth'); 
const superAdmin = require('../middleware/superAdmin'); // Middleware to check for Super Admin role

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.put('/me', protect, updateMe);
router.delete('/me', protect, deactivateMe);
router.get('/', protect, superAdmin, getAllUsers); // Super Admin access only

module.exports = router;