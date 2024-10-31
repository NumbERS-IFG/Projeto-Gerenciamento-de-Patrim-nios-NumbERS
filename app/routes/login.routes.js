const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const authController = new AuthController();

//PERMITE LOGIN DO USUÁRIO
router.post('/', authController.login);

module.exports = router;