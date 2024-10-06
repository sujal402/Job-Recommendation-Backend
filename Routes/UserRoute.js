const express = require('express');
const router = express.Router();
const { createUserProfile } = require('../Controllers/UserController');

router.post('/', createUserProfile);

module.exports = router;
