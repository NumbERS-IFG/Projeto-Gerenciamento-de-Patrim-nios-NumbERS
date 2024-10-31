const AtividadeController = require('../controllers/atividadeController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const atividadeController = new AtividadeController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, atividadeController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, atividadeController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, atividadeController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, atividadeController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, atividadeController.delete);

module.exports = router;
