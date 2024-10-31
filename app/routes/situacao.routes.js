const SituacaoController = require('../controllers/situacaoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const situacaoController = new SituacaoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, situacaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, situacaoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, situacaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, situacaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, situacaoController.delete);

module.exports = router;
