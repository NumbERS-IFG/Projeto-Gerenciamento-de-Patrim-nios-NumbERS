const CondicaoController = require('../controllers/condicaoController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const condicaoController = new CondicaoController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, condicaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, condicaoController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, condicaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, condicaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, condicaoController.delete);

module.exports = router;
