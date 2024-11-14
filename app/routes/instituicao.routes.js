const InstituicaoController = require('../controllers/instituicaoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const instituicaoController = new InstituicaoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/home', authController.authToken, authController.authNivel, instituicaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, instituicaoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, instituicaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, instituicaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, instituicaoController.delete);

module.exports = router;
