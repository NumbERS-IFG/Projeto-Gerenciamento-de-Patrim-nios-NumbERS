const CategoriaController = require('../controllers/categoriaController');
const express =require('express');
const router = express.Router();
const categoriaController = new CategoriaController();

//CONSULTA TODOS ELEMENTOS
router.get('/', categoriaController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', categoriaController.show);
//INSERE ELEMENTOS
router.post('/store', categoriaController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', categoriaController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', categoriaController.delete);

module.exports = router;
