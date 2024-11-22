const AuthController = require('../controllers/authController');
const express =require('express');
const router = express.Router();
const path = require('path');
const authController = new AuthController();

//PERMITE LOGIN DO USUÁRIO
router.get('/', (req, res) => {
    res.sendFile((path.join(__dirname, '../view/html/loginPage.html')));
})
router.post('/', authController.login);

module.exports = router;