const ProjetoController = require('../controllers/projetoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const projetoController = new ProjetoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/home', authController.authToken, authController.authNivel, projetoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, projetoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, projetoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, projetoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, projetoController.delete);

module.exports = router;
