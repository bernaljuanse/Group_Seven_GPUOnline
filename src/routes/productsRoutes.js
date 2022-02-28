const express = require('express');
const router = express.Router();
const multer = require("multer");
const productsController = require('../controllers/productsController');

// ****** inicio de multer *******
let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public/img/products"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

//si var storage = multer.disk... se llamaria var pepe = multer.disk... entonces var upload = multer({storage:pepe})
let upload = multer({storage});

const { route } = require('express/lib/application');

router.get("/",productsController.listar); /* listado de producto */

// TAREA, implementar el metodo de detalle para la vista del cliente.
/* router.get("/detalle/:id", productsController.detail); */

router.get("/crearProducto",productsController.vistaCrear); /* Formulario de creación de productos. solo visualiza crearProducto.ejs */

router.post("/crearProducto", upload.single("image"),productsController.crear); /* Acción de creación. "crea producto" con form y redirecciona a listaProducto.ejs */



router.get("/editar/:idProduct",productsController.editar); /* Formulario de edición de productos */
router.put("/editar",function(req,res) {
    res.send("fui por put")
}); /* Acción de edición (a donde se envía el formulario): */

router.delete("/eliminar/:id",function(req,res) {
    res.send("fui por delete")
}); /* Acción de borrado */

module.exports =router;
