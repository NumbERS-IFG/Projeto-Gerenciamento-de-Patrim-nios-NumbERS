const ProjetoController = require('../controllers/projetoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const projetoController = new ProjetoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, projetoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, projetoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, projetoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, projetoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, projetoController.delete);

module.exports = router;
