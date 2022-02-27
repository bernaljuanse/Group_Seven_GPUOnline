const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

const { route } = require('express/lib/application');

router.get("/", mainController.home);

router.get("/carrito",mainController.carrito);
router.get("/detalleProducto/:id?",mainController.detalleProducto); /* detalle producto particular */


module.exports =router;