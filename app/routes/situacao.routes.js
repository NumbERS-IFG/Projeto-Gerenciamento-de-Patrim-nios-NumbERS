const SituacaoController = require('../controllers/situacaoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const situacaoController = new SituacaoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/home', authController.authToken, authController.authNivel, situacaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, situacaoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, situacaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, situacaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, situacaoController.delete);

module.exports = router;
