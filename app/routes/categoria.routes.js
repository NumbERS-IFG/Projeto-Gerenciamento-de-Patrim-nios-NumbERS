const CategoriaController = require('../controllers/categoriaController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const categoriaController = new CategoriaController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, categoriaController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, categoriaController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, categoriaController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, categoriaController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, categoriaController.delete);

module.exports = router;
