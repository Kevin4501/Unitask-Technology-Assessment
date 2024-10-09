const express = require('express');
const userController = require('../Controllers/userController');
const authenticate = require('../Middleware/authenticate');
const router = express.Router();

router.get('/me', authenticate, userController.viewProfile);
router.post('/logout', authenticate, userController.logout);

module.exports = router;
