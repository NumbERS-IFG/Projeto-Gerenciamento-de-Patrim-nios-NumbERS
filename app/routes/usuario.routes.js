const UsuarioController = require('../controllers/usuarioController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const usuarioController = new UsuarioController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, usuarioController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:matricula', authController.authToken, usuarioController.show);
//INSERE ELEMENTOS
router.post('/register', authController.authToken, usuarioController.register);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, usuarioController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, usuarioController.delete);

module.exports = router;
