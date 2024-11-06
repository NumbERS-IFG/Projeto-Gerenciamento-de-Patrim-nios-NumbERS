const CargoController = require('../controllers/cargoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const cargoController = new CargoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, authController.authNivel, cargoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, cargoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, cargoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, cargoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, cargoController.delete);

module.exports = router;