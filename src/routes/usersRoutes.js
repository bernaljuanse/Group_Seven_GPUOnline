const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

const { route } = require('express/lib/application');


router.get("/login",usersController.login);
router.get("/registro",usersController.registro);

module.exports =router;