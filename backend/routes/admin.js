const path = require('path');

const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users')
const groupController = require('../controllers/groups')

router.post('/createuser', usersController.createUser);

router.get('/userlist', usersController.userList);

router.get('/:id', usersController.viewUser);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

router.post('/creategroup', groupController.createGroup);

router.put('/updategroup/:id', groupController.updateGroup);

exports.routes = router;