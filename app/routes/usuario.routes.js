const UsuarioController = require('../controllers/usuarioController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const usuarioController = new UsuarioController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, authController.authNivel, usuarioController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:matricula', authController.authToken, authController.authNivel, usuarioController.show);
//INSERE ELEMENTOS
router.post('/register', authController.authToken, authController.authNivel, usuarioController.register);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, usuarioController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, usuarioController.delete);

module.exports = router;
