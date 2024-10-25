const SituacaoController = require('../controllers/situacaoController');
const express =require('express');
const router = express.Router();
const situacaoController = new SituacaoController();

//CONSULTA TODOS ELEMENTOS
router.get('/', situacaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', situacaoController.show);
//INSERE ELEMENTOS
router.post('/store', situacaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', situacaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', situacaoController.delete);

module.exports = router;
