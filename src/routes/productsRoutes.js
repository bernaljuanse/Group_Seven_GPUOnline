const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

const { route } = require('express/lib/application');

router.get("/listaProducto",productsController.listar); /* listado de producto */
router.get("/crearProducto",productsController.vista); /* Formulario de creación de productos. solo visualiza crearProducto.ejs */
router.post("/crearProducto",productsController.crear); /* Acción de creación. "crea producto" con form y redirecciona a listaProducto.ejs */
router.get("/editar/:idProduct",productsController.editar); /* Formulario de edición de productos */
router.put("/editar",function(req,res) {
    res.send("fui por put")
}); /* Acción de edición (a donde se envía el formulario): */

router.delete("/eliminar/:id",function(req,res) {
    res.send("fui por delete")
}); /* Acción de borrado */

module.exports =router;
