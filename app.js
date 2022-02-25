//require express
const express = require('express');
//para usar las rutas estaticas
const path = require('path'); 

const app = express();
const mainRoutes = require("./src/routes/mainRoutes");


//variable para subir a heroku || puerto 3000
const PORT = process.env.PORT || 3000;

//rutas estaticas
/* const publicPath = path.resolve(__dirname, './public'); */

app.use(express.static("public")); 

//implemetacion ejs
//ojo!!! cuidado!!! alerta!!! pasar views 
app.set("view engine", "ejs");
app.set("views", "./src/views");

//escuchar navegador al servidor express heroku || puerto 3000
app.listen( PORT, ()=> console.log(`corriendo servidor con Express en el puerto ${PORT}`) );

app.use(mainRoutes);


/* app.get('/', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/home.html')));
app.get('/carrito', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/carrito.html')));
app.get('/detalleProducto', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/detalleProducto.html')));
app.get('/registro', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/registro.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/login.html'))); */



//prueba borrar
app.get('/productos/:idProductos', (req, res) => res.send(
    `Bienvenidos a `+req.params.idProductos
    ));

//prueba borrar
app.get('/productos/:idProductos/comentarios/:idcomentarios?',  (req, res) =>
    {
        if(req.params.idcomentarios==undefined){
        res.send( `Bienvenidos a producto: ${req.params.idProductos}`);
            }
        else{
        res.send( `Bienvenidos a producto: ${req.params.idProductos} y comentario ${req.params.idcomentarios}`);
            }
    }
);

   


