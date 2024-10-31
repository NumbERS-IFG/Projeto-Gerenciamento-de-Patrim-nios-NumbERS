const InstituicaoController = require('../controllers/instituicaoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const instituicaoController = new InstituicaoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, instituicaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, instituicaoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, instituicaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, instituicaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, instituicaoController.delete);

module.exports = router;
