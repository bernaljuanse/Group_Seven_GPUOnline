const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const { redirect } = require("express/lib/response");



const controller = {
    listar: (req,res)=> {

        res.render("./products/listaProducto.ejs", { products })
    },
    vistaCrear: (req,res)=> {
        res.render("./products/crearProducto.ejs")
    },
    crear: (req,res)=> {
            //tambien podemos todo lo que contiene: req.body
            //si existe crear el nombre requerir file.name y si no poner un nombre por defecto
            let image = req.file ? req.file.filename : "no existe";

            let newProduct = {
                id: products[products.length - 1].id + 1,
                ... req.body,
                image
            }
            products.push(newProduct)
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
        // Campo para Guardar informacion del formulario crear

        res.redirect("/products") //pensar lo que vamos a redireccionar
    },
    editar: (req,res)=> {
        
            let idProduct = req.params.idProduct;
            
            let products =[
                {id:1 , name:"tarjeta 1 gamer ", description: "para jugar", imagen:"/img/tarjeta1", price:400},
                {id:2 , name:"tarjeta 2 streaming ", description: "para streaming" , imagen:"/img/tarjeta2", price:500},
                {id:3 , name:"tarjeta 3 streaming and gaming ", description: "para streaming and jugar", imagen:"/img/tarjeta3", price:900},
                {id:4 , name:"tarjeta 1 gamer ", description: "para jugar", imagen:"/img/tarjeta1", price:400},
                {id:5 , name:"tarjeta 2 streaming ", description: "para streaming", imagen:"/img/tarjeta2", price:9595959}
            ]

            let productToEdit = products[idProduct];

            res.render("./products/editarProducto.ejs", {productToEdit:productToEdit});
            
        // Campo para Guardar informacion del formulario crear

        //res.redirect("/listaProducto") //pensar lo que vamos a redireccionar
    },



};

module.exports =  controller;