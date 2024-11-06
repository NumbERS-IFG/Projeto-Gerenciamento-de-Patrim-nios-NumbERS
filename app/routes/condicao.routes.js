const CondicaoController = require('../controllers/condicaoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const condicaoController = new CondicaoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, authController.authNivel, condicaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, condicaoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, condicaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, condicaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, condicaoController.delete);

module.exports = router;
