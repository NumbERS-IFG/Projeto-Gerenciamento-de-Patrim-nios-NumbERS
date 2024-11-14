const SkillController = require('../controllers/skillController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const skillController = new SkillController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/home', authController.authToken, authController.authNivel, skillController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, authController.authNivel, skillController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, authController.authNivel, skillController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, authController.authNivel, skillController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, authController.authNivel, skillController.delete);

module.exports = router;
