
module.exports = {
    home: (req,res)=> {
        res.render("home")
    },
    carrito: (req,res)=> {
        res.render("carrito")
    },
    detalleProducto: (req,res)=> {
        res.render("./products/detalleProducto.ejs")
    },
    login: (req,res)=> {
        res.render("./users/login.ejs")
    },
    registro: (req,res)=> {
        res.render("./users/registro.ejs")
    },
    crear: (req,res)=> {
        res.render("./products/crearProducto.ejs")
    },

};