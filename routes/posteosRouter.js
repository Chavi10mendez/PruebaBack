// plan de accion de las rutas
/*
✅RUTA GET POSTEOS ===> PARA QUE ME TRAIGA TODOS LOS POSTeOs
❌RUTA POST/:ID ===> PARA QUE ME TRAIGA UN POSTEO ESPECIFICO con el ID
✅RUTA POST POSTEOS ===> PARA CREAR UN POSTEO 
❌RUTA PUT POSTEOS ===> PARA MODIFICAR EL POSTEO
❌RUTA DELETE POSTEOS ===> PARA ELIMINAR EL POSTEO
*/

const posteosRouter = require('express').Router();
const { getAllPosteos, postPosteos, getAllPosteos } = require('../controllers/index2');

posteosRouter.get('/', (req, res) => {

    const { posteo } = req.query;

    try {
        if(!posteo) throw Error('Hubo un error')
        
        else{
            const getAllPosteos = getAllPosteos();
            return  res.status(200).json(getAllPosteos);
        }
        
    } catch (error) {
         res.status(404).sendFile('../public/error404.html', {
            root: __dirname
         });
    } 
})

posteosRouter.post('/:id', (req, res) => {})

posteosRouter.post('/', (req, res) => {
    try {
        const { userId, title, contents } = req.body;

        if(!userId || !title || !contents) throw Error('Me falta info crack');
        else{
             const newPost = postPosteos(userId, title, contents);
             
             return res.status(200).json(newPost);
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

// posteosRouter.get('/', (req, res) => {})

// posteosRouter.put('/', (req, res) => {})

// posteosRouter.delete('/', (req, res) => {})

module.exports = posteosRouter;