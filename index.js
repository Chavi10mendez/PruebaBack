const server = require('./routes/index');

server.listen(3001, () => {
    console.log('El server esta corriendo en el puerto 3001 correctamente')
});