const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get("/", mainController.home);
router.get("/carrito",mainController.carrito);
router.get("/detalleProducto",mainController.detalleProducto);
router.get("/login",mainController.login);
router.get("/registro",mainController.registro);
router.get("/crearProducto",mainController.crear);


module.exports =router;