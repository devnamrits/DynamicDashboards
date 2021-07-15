const path = require('path');

const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users')

router.post('/createuser',usersController.createUser)

exports.routes = router;