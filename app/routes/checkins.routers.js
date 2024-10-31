const CheckinsCheckins = require('../controllers/checkinController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const checkinsController = new CheckinsCheckins();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, checkinsController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, checkinsController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, checkinsController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, checkinsController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, checkinsController.delete);

module.exports = router;
