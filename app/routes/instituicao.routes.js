const InstituicaoController = require('../controllers/instituicaoController');
const express =require('express');
const router = express.Router();
const instituicaoController = new InstituicaoController();

//CONSULTA TODOS ELEMENTOS
router.get('/', instituicaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', instituicaoController.show);
//INSERE ELEMENTOS
router.post('/store', instituicaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', instituicaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', instituicaoController.delete);

module.exports = router;
