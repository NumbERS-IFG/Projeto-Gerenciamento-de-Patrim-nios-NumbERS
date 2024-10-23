const UsuarioController = require('../controllers/usuarioController');
const express =require('express');
const router = express.Router();
const usuarioController = new UsuarioController();

//CONSULTA TODOS ELEMENTOS
router.get('/', usuarioController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', usuarioController.show);
//INSERE ELEMENTOS
router.post('/store', usuarioController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', usuarioController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', usuarioController.delete);

module.exports = router;