const CheckinsCheckins = require('../controllers/checkinController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const checkinsController = new CheckinsCheckins();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, authController.authNivel, checkinsController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, checkinsController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, checkinsController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, checkinsController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, checkinsController.delete);

module.exports = router;
