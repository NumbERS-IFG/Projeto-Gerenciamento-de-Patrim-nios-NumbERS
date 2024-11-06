const AtividadeController = require('../controllers/atividadeController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const atividadeController = new AtividadeController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, authController.authNivel, atividadeController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, atividadeController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, atividadeController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, atividadeController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, atividadeController.delete);

module.exports = router;
