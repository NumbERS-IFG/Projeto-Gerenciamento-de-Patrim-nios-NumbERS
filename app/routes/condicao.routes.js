const CondicaoController = require('../controllers/condicaoController');
const express =require('express');
const router = express.Router();
const condicaoController = new CondicaoController();

//CONSULTA TODOS ELEMENTOS
router.get('/', condicaoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', condicaoController.show);
//INSERE ELEMENTOS
router.post('/store', condicaoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', condicaoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', condicaoController.delete);

module.exports = router;
