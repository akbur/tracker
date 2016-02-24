var express = require('express');
var userController = require('./userController');

var router = express.Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/users', userController.getUsers);
router.delete('/users/:user_id', userController.removeUser);

module.exports = router;
