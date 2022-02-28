const { redirect } = require("express/lib/response");

module.exports = {
    listar: (req,res)=> {
        let products =[
            {id:1 , name:"tarjeta 1 gamer ", description: "para jugar", imagen:"/img/tarjeta1", price:400},
            {id:2 , name:"tarjeta 2 streaming ", description: "para streaming" , imagen:"/img/tarjeta2", price:500},
            {id:3 , name:"tarjeta 3 streaming and gaming ", description: "para streaming and jugar", imagen:"/img/tarjeta3", price:900},
            {id:4 , name:"tarjeta 1 gamer ", description: "para jugar", imagen:"/img/tarjeta1", price:400},
            {id:5 , name:"tarjeta 2 streaming ", description: "para streaming", imagen:"/img/tarjeta2", price:9595959}
        ]
        res.render("./products/listaProducto.ejs", {"products":products})
        /* res.render("./products/listaProducto.ejs") */
    },
    vista: (req,res)=> {
        res.render("./products/crearProducto.ejs")
    },
    crear: (req,res)=> {
        //res.send(req.body)
        
            //tambien podemos todo lo que contiene: req.body
            //si existe crear el nombre requerir file.name y si no poner un nombre por defecto
            let image = req.file ? req.file.filename : "no existe";
            console.log(req.file.filename);
            
            let productos = {
                nombre: req.body.name,
                descripcion: req.body.description,
                precio: req.body.price,

            }
       
        // Campo para Guardar informacion del formulario crear

        res.redirect("/listaProducto") //pensar lo que vamos a redireccionar
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