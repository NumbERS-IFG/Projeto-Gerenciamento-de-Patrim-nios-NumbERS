const SkillController = require('../controllers/skillController');
const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const skillController = new SkillController();
const authController = new AuthController();

//CONSULTA TODOS ELEMENTOS
router.get('/', authController.authToken, skillController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', authController.authToken, skillController.show);
//INSERE ELEMENTOS
router.post('/store', authController.authToken, skillController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', authController.authToken, skillController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', authController.authToken, skillController.delete);

module.exports = router;
