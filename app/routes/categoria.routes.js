const CategoriaController = require('../controllers/categoriaController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const categoriaController = new CategoriaController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, authController.authNivel, categoriaController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, categoriaController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, categoriaController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, categoriaController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, categoriaController.delete);

module.exports = router;
