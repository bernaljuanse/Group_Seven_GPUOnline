//require express
const express = require('express');
//para usar las rutas estaticas
const path = require('path'); 
const app = express();

//variable para subir a heroku || puerto 3000
const PORT = process.env.PORT || 3000;

//rutas estaticas
const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) ); 

//escuchar navegador al servidor express heroku || puerto 3000
app.listen( PORT, ()=> console.log(`corriendo servidor con Express en el puerto ${PORT}`) );

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/home.html')));
app.get('/carrito', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/carrito.html')));
app.get('/detalleProducto', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/detalleProducto.html')));
app.get('/registro', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/registro.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname ,'./src/views/login.html')));



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

   


