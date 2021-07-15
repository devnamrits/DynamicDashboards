const path = require('path');

const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users')

router.post('/createuser', usersController.createUser);

router.get('/userlist', usersController.userList);

router.get('/:id', usersController.viewUser);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

exports.routes = router;