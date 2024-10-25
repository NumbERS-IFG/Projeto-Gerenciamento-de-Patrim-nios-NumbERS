const ProjetoController = require('../controllers/projetoController');
const express =require('express');
const router = express.Router();
const projetoController = new ProjetoController();

//CONSULTA TODOS ELEMENTOS
router.get('/', projetoController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', projetoController.show);
//INSERE ELEMENTOS
router.post('/store', projetoController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', projetoController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', projetoController.delete);

module.exports = router;
